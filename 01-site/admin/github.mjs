export class EditorError extends Error {
  constructor(code,status=0){super(code);this.code=code;this.status=status;}
}
export function validatePortfolio(data){
  if(!data || !data.config || !Array.isArray(data.photos) || !Array.isArray(data.config.categories)) throw new EditorError('invalidData');
  if(!data.photos.length || data.photos.length>5000) throw new EditorError('invalidData');
  const categories=new Set(data.config.categories.map(c=>c.id)),ids=new Set();
  for(const p of data.photos){
    if(!Number.isSafeInteger(p.id)||p.id<1||ids.has(p.id)||!/^photos\/[a-zA-Z0-9._-]+\.(webp|jpe?g|png)$/i.test(p.src)||![p.width,p.height].every(n=>Number.isFinite(n)&&n>0&&n<=30000)||!Array.isArray(p.tags)||p.tags.some(tag=>tag==='all'||!categories.has(tag)))throw new EditorError('invalidData');
    if(typeof p.alt!=='string'||!p.alt.trim()||p.alt.length>500||typeof p.altCs!=='string'||!p.altCs.trim()||p.altCs.length>500)throw new EditorError('descriptions');
    if(!p.tags.length)throw new EditorError('missingCategory');
    ids.add(p.id);
  }
  if(data.config.featured && (!Array.isArray(data.config.featured)||data.config.featured.length!==3||data.config.featured.some(id=>!ids.has(id))))throw new EditorError('featuredInvalid');
  return data;
}
export function parsePortfolio(source){
  const match=source.match(/^\s*window\.PORTFOLIO\s*=\s*([\s\S]+?);?\s*$/);
  if(!match)throw new EditorError('invalidData');
  try{return validatePortfolio(JSON.parse(match[1]));}catch(error){if(error instanceof EditorError)throw error;throw new EditorError('invalidData');}
}
export function serialisePortfolio(data){
  validatePortfolio(data);
  return 'window.PORTFOLIO = '+JSON.stringify(data).replace(/</g,'\\u003c')+';\n';
}
export function toBase64(bytes){let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(binary);}
export class GitHubPortfolio {
  constructor(repo,branch,token,fetcher=fetch){
    if(!/^[a-zA-Z0-9-]+\/[a-zA-Z0-9._-]+$/.test(repo)||!branch||!/^[a-zA-Z0-9._/-]+$/.test(branch)||branch.includes('..')||branch.startsWith('/')||branch.endsWith('/'))throw new EditorError('connectionFields');
    this.repo=repo;this.branch=branch;this.token=token;this.fetcher=fetcher;this.base='https://api.github.com/repos/'+repo;this.ref=branch.split('/').map(encodeURIComponent).join('/');this.head=null;this.tree=null;this.pendingCommit=null;
  }
  async request(path,method='GET',body){
    if(!this.token)throw new EditorError('signIn');
    let response;
    try{response=await this.fetcher(this.base+path,{method,headers:{Accept:'application/vnd.github+json',Authorization:'Bearer '+this.token,'X-GitHub-Api-Version':'2026-03-10',...(body?{'Content-Type':'application/json'}:{})},body:body?JSON.stringify(body):undefined,credentials:'omit',redirect:'error',cache:'no-store'});}catch{throw new EditorError('network');}
    if(!response.ok)throw new EditorError(response.status===401?'invalidKey':response.status===403?'permission':response.status===404?'notFound':[409,422].includes(response.status)?'conflict':'githubError',response.status);
    return response.json();
  }
  async load(){
    const repo=await this.request('');
    if(!repo.permissions?.push)throw new EditorError('permission');
    // This editor's images are served by the public GitHub Pages repository.
    if(repo.private)throw new EditorError('publicRepo');
    const ref=await this.request('/git/ref/heads/'+this.ref);
    const commit=await this.request('/git/commits/'+ref.object.sha);
    const file=await this.request('/contents/gallery-data.js?ref='+encodeURIComponent(ref.object.sha));
    if(file.encoding!=='base64'||!file.content)throw new EditorError('invalidData');
    const bytes=Uint8Array.from(atob(file.content.replace(/\s/g,'')),c=>c.charCodeAt(0));
    const data=parsePortfolio(new TextDecoder().decode(bytes));
    this.head=ref.object.sha;this.tree=commit.tree.sha;
    return data;
  }
  imageURL(src){return 'https://raw.githubusercontent.com/'+this.repo+'/'+encodeURIComponent(this.head)+'/'+src.split('/').map(encodeURIComponent).join('/');}
  async save(data,uploads,onProgress=()=>{}){
    validatePortfolio(data);
    if(!this.head||!this.tree)throw new EditorError('signIn');
    const current=await this.request('/git/ref/heads/'+this.ref);
    // Reconcile an ambiguous network result before attempting another write.
    if(this.pendingCommit&&current.object.sha===this.pendingCommit){this.head=this.pendingCommit;this.tree=this.pendingTree;this.pendingCommit=null;return this.head;}
    if(current.object.sha!==this.head)throw new EditorError('conflict');
    const paths=new Set(data.photos.map(p=>p.src));const items=[...uploads].filter(([path])=>paths.has(path));const tree=[];
    for(let i=0;i<items.length;i++){
      const [path,blob]=items[i];
      if(!/^photos\/[a-zA-Z0-9._-]+\.webp$/.test(path)||blob.size>8*1024*1024)throw new EditorError('invalidData');
      onProgress(i+1,items.length);
      const object=await this.request('/git/blobs','POST',{content:toBase64(new Uint8Array(await blob.arrayBuffer())),encoding:'base64'});
      tree.push({path,mode:'100644',type:'blob',sha:object.sha});
    }
    const built=await this.request('/git/trees','POST',{base_tree:this.tree,tree:[...tree,{path:'gallery-data.js',mode:'100644',type:'blob',content:serialisePortfolio(data)}]});
    const commit=await this.request('/git/commits','POST',{message:'Update photography portfolio',tree:built.sha,parents:[this.head]});
    this.pendingCommit=commit.sha;this.pendingTree=built.sha;
    // GitHub rejects non-fast-forward updates; never overwrite concurrent edits.
    await this.request('/git/refs/heads/'+this.ref,'PATCH',{sha:commit.sha,force:false});
    this.head=commit.sha;this.tree=built.sha;this.pendingCommit=null;
    return this.head;
  }
  disconnect(){this.token='';this.head=null;this.tree=null;this.pendingCommit=null;}
}

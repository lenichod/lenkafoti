import {GitHubPortfolio,EditorError,validatePortfolio} from './github.mjs';
const $=id=>document.getElementById(id);
const copy={
en:{skip:'Skip to content',viewSite:'View website',privateEditor:'Your photo workspace',title:'Photo manager',disconnect:'Sign out',closeEditor:'Close editor',connectTitle:'Connect your GitHub portfolio',connectIntro:'Your GitHub access key unlocks saving. Only people with write access to your repository can publish changes.',keyPrivacy:'The key stays in this tab’s memory. It is sent only to GitHub and cleared when you sign out or close the tab.',setupGuide:'First time? Read the setup guide',repository:'Repository',branch:'Branch',accessKey:'GitHub access key',connect:'Connect securely',tryEditor:'Try the editor without publishing',previewNotice:'Preview mode: try editing here. Nothing is saved to your website. Connect GitHub to publish changes.',hostNotice:'Saving updates your GitHub website. This separate private preview does not update from GitHub.',addPhotos:'Add photos',reload:'Reload saved version',publish:'Save to GitHub',uploadNote:'JPEG, PNG or WebP. Images are resized to 1600px and converted to WebP automatically; your originals stay untouched.',homePhotos:'Home page photographs',homeHelp:'Photo 1 is the large image on the left. Photos 2 and 3 are stacked on the right; all three stack vertically on phones.',search:'Search photos',searchPlaceholder:'Search descriptions…',collection:'Collection',noResults:'No photographs match this search.',removeTitle:'Remove this photograph?',removeHelp:'It will leave the portfolio after you save. Original files and GitHub history are kept.',cancel:'Cancel',remove:'Remove',footer:'A little less code. A little more photography.',help:'Setup & help',english:'English description',czech:'Czech description',categories:'Collections',up:'Move up',down:'Move down',first:'Move to first',slot:'Home photograph',all:'All collections',more:'Show more photos',photos:'photographs',draft:'Unsaved changes',ready:'Connected. Your saved photos are ready to edit.',previewReady:'Preview mode is ready. Publishing is disabled.',connecting:'Connecting to GitHub…',saving:'Saving your photographs to GitHub…',saved:'Saved to GitHub. If Pages is enabled for this branch, your public website will update after its deployment finishes.',uploading:'Preparing your photographs…',uploadReady:'Photos added. Fill in both descriptions and choose their collections before saving.',discard:'Discard the unsaved changes in this tab?',signIn:'Connect GitHub before saving.',invalidKey:'The access key was not accepted. Check it or create a new key.',permission:'GitHub did not allow this action. Your account needs write access and the key needs Contents: Read and write for this repository.',notFound:'Repository, branch or gallery-data.js not found. Upload the website package first, then check the repository and branch.',publicRepo:'This editor currently supports the public GitHub Pages repository. Choose the public repository that contains your website.',connectionFields:'Enter a repository as username/repository and a valid branch name.',network:'Could not reach GitHub. Your changes are still in this tab; check your connection and retry.',conflict:'The repository changed elsewhere or GitHub blocked the update. Your draft is kept in this tab. Reload the saved version only when you are ready to discard the draft.',githubError:'GitHub could not complete the request. Your draft is kept; try again later.',invalidData:'The portfolio data or an image is invalid. Check photo dimensions, categories and filenames.',descriptions:'Every photo needs a description in English and Czech (up to 500 characters each).',featuredInvalid:'Choose three existing photographs for Home.',uploadError:'This photo could not be opened. Use a JPEG, PNG or WebP up to 50 MB.',lastPhoto:'Keep at least one photograph in the portfolio.',uploadLimit:'Add up to 20 photographs at a time.',missingCategory:'Choose at least one collection for each photo.'},
cs:{skip:'Přejít k obsahu',viewSite:'Zobrazit web',privateEditor:'Tvůj prostor pro fotografie',title:'Správa fotografií',disconnect:'Odhlásit se',closeEditor:'Zavřít editor',connectTitle:'Připoj své portfolio na GitHubu',connectIntro:'Přístupový klíč GitHubu odemkne ukládání. Změny mohou publikovat jen lidé s právem zápisu do tvého repozitáře.',keyPrivacy:'Klíč zůstává pouze v paměti této karty. Odesílá se jen GitHubu a při odhlášení nebo zavření karty se smaže.',setupGuide:'Poprvé? Přečti si návod k nastavení',repository:'Repozitář',branch:'Větev',accessKey:'Přístupový klíč GitHubu',connect:'Bezpečně připojit',tryEditor:'Vyzkoušet editor bez publikování',previewNotice:'Režim náhledu: vyzkoušej si úpravy. Na web se nic neukládá. Pro publikování připoj GitHub.',hostNotice:'Ukládání aktualizuje tvůj web na GitHubu. Tento samostatný soukromý náhled se z GitHubu neaktualizuje.',addPhotos:'Přidat fotografie',reload:'Načíst uloženou verzi',publish:'Uložit na GitHub',uploadNote:'JPEG, PNG nebo WebP. Fotografie se automaticky zmenší na 1600 px a převedou do WebP; originály zůstanou beze změny.',homePhotos:'Fotografie na úvodní stránce',homeHelp:'Fotografie 1 je velký obrázek vlevo. Fotografie 2 a 3 jsou nad sebou vpravo; na telefonu se všechny tři řadí pod sebe.',search:'Hledat fotografie',searchPlaceholder:'Hledat v popisech…',collection:'Kolekce',noResults:'Hledání neodpovídá žádná fotografie.',removeTitle:'Odebrat tuto fotografii?',removeHelp:'Po uložení zmizí z portfolia. Původní soubory a historie GitHubu zůstanou zachovány.',cancel:'Zrušit',remove:'Odebrat',footer:'O trochu méně kódu. O trochu více fotografování.',help:'Nastavení a nápověda',english:'Anglický popis',czech:'Český popis',categories:'Kolekce',up:'Posunout výš',down:'Posunout níž',first:'Přesunout na začátek',slot:'Úvodní fotografie',all:'Všechny kolekce',more:'Zobrazit další fotografie',photos:'fotografií',draft:'Neuložené změny',ready:'Připojeno. Uložené fotografie jsou připravené k úpravám.',previewReady:'Náhled je připravený. Publikování je vypnuté.',connecting:'Připojuji GitHub…',saving:'Ukládám fotografie na GitHub…',saved:'Uloženo na GitHub. Pokud je pro tuto větev zapnuté Pages, veřejný web se aktualizuje po dokončení nasazení.',uploading:'Připravuji fotografie…',uploadReady:'Fotografie byly přidány. Před uložením doplň oba popisy a vyber kolekce.',discard:'Zahodit neuložené změny v této kartě?',signIn:'Před uložením připoj GitHub.',invalidKey:'Přístupový klíč nebyl přijat. Zkontroluj ho nebo vytvoř nový.',permission:'GitHub tuto akci nepovolil. Tvůj účet potřebuje právo zápisu a klíč oprávnění Contents: Read and write pro tento repozitář.',notFound:'Repozitář, větev nebo gallery-data.js nebyly nalezeny. Nejdřív nahraj balíček webu a zkontroluj repozitář a větev.',publicRepo:'Tento editor nyní podporuje veřejný repozitář pro GitHub Pages. Vyber veřejný repozitář se svým webem.',connectionFields:'Zadej repozitář ve tvaru uživatel/repozitář a platný název větve.',network:'GitHub není dostupný. Změny zůstávají v této kartě; zkontroluj připojení a zkus to znovu.',conflict:'Repozitář se mezitím změnil nebo GitHub aktualizaci zablokoval. Návrh zůstává v této kartě. Uloženou verzi načti až ve chvíli, kdy chceš návrh zahodit.',githubError:'GitHub nemohl požadavek dokončit. Návrh zůstává zachovaný; zkus to později.',invalidData:'Data portfolia nebo obrázek nejsou platné. Zkontroluj rozměry, kolekce a názvy souborů.',descriptions:'Každá fotografie potřebuje anglický i český popis (každý nejvýše 500 znaků).',featuredInvalid:'Pro úvod vyber tři existující fotografie.',uploadError:'Fotografii se nepodařilo otevřít. Použij JPEG, PNG nebo WebP do 50 MB.',lastPhoto:'V portfoliu musí zůstat alespoň jedna fotografie.',uploadLimit:'Najednou přidej nejvýše 20 fotografií.',missingCategory:'U každé fotografie vyber alespoň jednu kolekci.'}
};
const categoryCs={all:'Všechny fotografie',people:'Portréty a lidé',nature:'Příroda',travel:'Cestování',street:'Ulice a každodennost',events:'Akce',brands:'Produkty a značky',automotive:'Auta',film:'Na filmu'};
let lang=new URLSearchParams(location.search).get('lang');
if(!['en','cs'].includes(lang)){try{lang=localStorage.getItem('portfolio-language');}catch{}}
if(!['en','cs'].includes(lang))lang=navigator.language.startsWith('cs')?'cs':'en';
let data=null,client=null,dirty=false,busy=false,preview=false,limit=24,removeId=null,statusKey='';
const uploads=new Map(),urls=new Map();
const t=key=>copy[lang][key]||key;
const category=c=>lang==='cs'?categoryCs[c.id]||c.label:c.label;
function node(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;}
function message(key,type=''){statusKey=key;$('status').textContent=t(key);$('status').className='admin-status '+type;}
function fail(error){message(error instanceof EditorError?error.code:'githubError','error');}
function markDirty(){dirty=true;refreshControls();}
function refreshControls(){
 $('publish').disabled=!client||preview||!dirty||busy;
 $('photo-count').textContent=data?`${data.photos.length} ${t('photos')}${dirty?' · '+t('draft'):''}`:'';
}
function working(value){busy=value;$('workspace').inert=value;$('connection').inert=value;$('disconnect').disabled=value;refreshControls();}
function clearImages(){for(const url of urls.values())URL.revokeObjectURL(url);urls.clear();uploads.clear();}
function ensureFeatured(){const valid=new Set(data.photos.map(p=>p.id));const seed=data.config.featured||[83,52,96];data.config.featured=Array.from({length:3},(_,i)=>valid.has(seed[i])?seed[i]:data.photos[i%data.photos.length].id);}
function applyLanguage(){
 const brand=lang==='cs'?'fotografie od Lenky':window.PORTFOLIO.config.brand;
 document.documentElement.lang=lang;document.title=t('title')+' · '+brand.charAt(0).toUpperCase()+brand.slice(1);
 document.querySelectorAll('.wordmark').forEach(mark=>{mark.firstChild.textContent=brand;});
 document.querySelectorAll('[data-text]').forEach(el=>{el.textContent=t(el.dataset.text);});
 document.querySelectorAll('[data-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.placeholder);});
 document.querySelectorAll('[data-lang]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.lang===lang));});
 document.querySelectorAll('a[href]').forEach(a=>{const url=new URL(a.getAttribute('href'),location.href);if(url.origin===location.origin){url.searchParams.set('lang',lang);a.href=url.href;}});
 if(statusKey)$('status').textContent=t(statusKey);
 if(data){renderFilters();renderFeatured();renderPhotos();refreshControls();}
 if(preview)$('disconnect').textContent=t('closeEditor');
}
function renderFilters(){const selected=$('collection-filter').value;$('collection-filter').replaceChildren();for(const c of data.config.categories){const option=node('option','',c.id==='all'?t('all'):category(c));option.value=c.id;$('collection-filter').append(option);}$('collection-filter').value=selected||'all';}
function renderFeatured(){
 $('featured-fields').replaceChildren();
 data.config.featured.forEach((id,i)=>{
  const label=node('label');label.append(node('span','',t('slot')+' '+(i+1)));const select=node('select');
  for(const p of data.photos){const option=node('option','',`#${p.id} · ${lang==='cs'?p.altCs:p.alt}`);option.value=String(p.id);select.append(option);}select.value=String(id);
  select.addEventListener('change',()=>{data.config.featured[i]=Number(select.value);markDirty();});label.append(select);$('featured-fields').append(label);
 });
}
function imageSource(p){return urls.get(p.src)||(client?client.imageURL(p.src):'../'+p.src);}
function move(id,amount){if(busy)return;const index=data.photos.findIndex(p=>p.id===id);const target=amount==='first'?0:index+amount;if(target<0||target>=data.photos.length)return;const [p]=data.photos.splice(index,1);data.photos.splice(target,0,p);markDirty();renderPhotos();}
function renderPhotos(){
 const text=$('search').value.trim().toLocaleLowerCase(),filter=$('collection-filter').value||'all';
 const result=data.photos.filter(p=>(filter==='all'||p.tags.includes(filter))&&(`${p.id} ${p.alt} ${p.altCs}`).toLocaleLowerCase().includes(text));$('photo-list').replaceChildren();
 result.slice(0,limit).forEach(p=>{
  const index=data.photos.indexOf(p),card=node('article','admin-card'),img=node('img');img.src=imageSource(p);img.alt=lang==='cs'?p.altCs:p.alt;img.loading='lazy';img.decoding='async';card.append(img);
  const body=node('div','admin-card-body'),heading=node('div','card-heading');heading.append(node('span','',`#${p.id} · ${index+1}/${data.photos.length}`));
  const first=node('button','',t('first'));first.type='button';first.disabled=index===0;first.addEventListener('click',()=>move(p.id,'first'));heading.append(first);body.append(heading);
  for(const [field,key] of [['alt','english'],['altCs','czech']]){
   const label=node('label');label.append(node('span','',t(key)));const input=node('textarea');input.value=p[field]||'';input.maxLength=500;input.required=true;input.rows=2;input.lang=field==='alt'?'en':'cs';input.addEventListener('input',()=>{p[field]=input.value;markDirty();});input.addEventListener('change',renderFeatured);label.append(input);body.append(label);
  }
  const fieldset=node('fieldset','category-fields');fieldset.append(node('legend','',t('categories')));const options=node('div','category-options');
  for(const c of data.config.categories.filter(c=>c.id!=='all')){const label=node('label'),check=node('input');check.type='checkbox';check.checked=p.tags.includes(c.id);check.addEventListener('change',()=>{p.tags=check.checked?[...p.tags,c.id]:p.tags.filter(id=>id!==c.id);markDirty();});label.append(check,node('span','',category(c)));options.append(label);}fieldset.append(options);body.append(fieldset);
  const actions=node('div','card-actions'),ordering=node('div');
  for(const [amount,key] of [[-1,'up'],[1,'down']]){const button=node('button','',t(key));button.type='button';button.disabled=amount===-1?index===0:index===data.photos.length-1;button.addEventListener('click',()=>move(p.id,amount));ordering.append(button);}
  const remove=node('button','remove-button',t('remove'));remove.type='button';remove.addEventListener('click',()=>{if(data.photos.length===1){message('lastPhoto','error');return;}removeId=p.id;$('remove-dialog').showModal();$('cancel-remove').focus();});actions.append(ordering,remove);body.append(actions);card.append(body);$('photo-list').append(card);
 });
 $('empty-state').hidden=result.length!==0;
 let more=$('manager-more');if(!more){more=node('button','outline-button');more.id='manager-more';more.type='button';more.addEventListener('click',()=>{limit+=24;renderPhotos();});$('photo-list').after(more);}
 more.textContent=t('more');more.hidden=result.length<=limit;
}
function enterWorkspace(next,isPreview){
 data=structuredClone(next);preview=isPreview;dirty=false;limit=24;ensureFeatured();$('connection').hidden=true;$('workspace').hidden=false;$('disconnect').hidden=false;$('preview-notice').hidden=!preview;$('host-notice').hidden=preview||!location.hostname.endsWith('.chatgpt.site');$('search').value='';$('collection-filter').value='all';applyLanguage();message(preview?'previewReady':'ready','success');
}
$('connect-form').addEventListener('submit',async event=>{
 event.preventDefault();if(busy)return;let next;working(true);message('connecting');
 try{next=new GitHubPortfolio($('repository').value.trim(),$('branch').value.trim(),$('access-key').value.trim());const saved=await next.load();client=next;enterWorkspace(saved,false);}catch(error){next?.disconnect();fail(error);}finally{$('access-key').value='';working(false);}
});
$('try-editor').addEventListener('click',()=>{if(busy)return;enterWorkspace(window.PORTFOLIO,true);});
$('disconnect').addEventListener('click',()=>{
 if(busy||dirty&&!confirm(t('discard')))return;client?.disconnect();client=null;clearImages();data=null;dirty=false;preview=false;$('workspace').hidden=true;$('connection').hidden=false;$('disconnect').hidden=true;$('photo-list').replaceChildren();$('status').textContent='';statusKey='';$('access-key').value='';
});
$('reload').addEventListener('click',async()=>{
 if(busy||dirty&&!confirm(t('discard')))return;
 if(preview){clearImages();enterWorkspace(window.PORTFOLIO,true);return;}
 working(true);message('connecting');try{const saved=await client.load();clearImages();enterWorkspace(saved,false);}catch(error){fail(error);}finally{working(false);}
});
$('publish').addEventListener('click',async()=>{
 if(busy||preview||!client||!dirty)return;
 working(true);message('saving');
 try{validatePortfolio(data);await client.save(data,uploads);dirty=false;clearImages();renderPhotos();message('saved','success');}catch(error){fail(error);}finally{working(false);}
});
async function optimise(file){
 if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>50*1024*1024)throw new EditorError('uploadError');
 const url=URL.createObjectURL(file),img=new Image();
 try{img.src=url;await img.decode();const scale=Math.min(1,1600/Math.max(img.naturalWidth,img.naturalHeight));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.naturalWidth*scale));canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.86));if(!blob||blob.type!=='image/webp')throw new EditorError('uploadError');return {blob,width:canvas.width,height:canvas.height};}catch{throw new EditorError('uploadError');}finally{URL.revokeObjectURL(url);}
}
$('upload').addEventListener('change',async()=>{
 if(busy)return;const files=[...$('upload').files];$('upload').value='';if(!files.length)return;if(files.length>20){message('uploadLimit','error');return;}working(true);message('uploading');let added=0;
 try{for(const file of files){const {blob,width,height}=await optimise(file);const id=Math.max(...data.photos.map(p=>p.id))+1;const src=`photos/photo-${crypto.randomUUID()}.webp`;uploads.set(src,blob);urls.set(src,URL.createObjectURL(blob));data.photos.unshift({id,src,width,height,alt:'',altCs:'',tags:$('collection-filter').value==='all'?[]:[$('collection-filter').value]});added++;dirty=true;}$('search').value='';renderPhotos();renderFeatured();message('uploadReady','success');}catch(error){fail(error);if(added){renderPhotos();renderFeatured();}}finally{working(false);}
});
$('search').addEventListener('input',()=>{limit=24;renderPhotos();});$('collection-filter').addEventListener('change',()=>{limit=24;renderPhotos();});
$('cancel-remove').addEventListener('click',()=>{$('remove-dialog').close();removeId=null;});
$('confirm-remove').addEventListener('click',()=>{
 if(removeId===null)return;const removed=data.photos.find(p=>p.id===removeId);data.photos=data.photos.filter(p=>p.id!==removeId);if(removed&&uploads.has(removed.src)){uploads.delete(removed.src);URL.revokeObjectURL(urls.get(removed.src));urls.delete(removed.src);}ensureFeatured();markDirty();renderPhotos();renderFeatured();$('remove-dialog').close();removeId=null;
});
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{if(busy)return;lang=button.dataset.lang;try{localStorage.setItem('portfolio-language',lang);}catch{}const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);applyLanguage();}));
window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
applyLanguage();

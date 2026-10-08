(() => {
  let lang=new URLSearchParams(location.search).get('lang');
  if(!['en','cs'].includes(lang)){try{lang=localStorage.getItem('portfolio-language');}catch{}}
  if(!['en','cs'].includes(lang))lang=navigator.language.startsWith('cs')?'cs':'en';
  function apply(){
    document.documentElement.lang=lang;
    document.getElementById('setup-en').hidden=lang!=='en';document.getElementById('setup-cs').hidden=lang!=='cs';
    document.getElementById('manager-link').textContent=lang==='cs'?'Správa fotografií':'Photo manager';
    const brand=lang==='cs'?'fotografie od Lenky':'photography by Lenka';
    document.title=(lang==='cs'?'Nastavení správce fotografií':'Photo manager setup')+' · '+brand.charAt(0).toUpperCase()+brand.slice(1);
    document.querySelectorAll('.wordmark').forEach(mark=>{mark.firstChild.textContent=brand;});
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
    document.querySelectorAll('a[href]').forEach(a=>{const url=new URL(a.getAttribute('href'),location.href);if(url.origin===location.origin){url.searchParams.set('lang',lang);a.href=url.href;}});
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('portfolio-language',lang);}catch{}const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);apply();}));
  apply();
})();

(() => {
  'use strict';
  const {config, photos} = window.PORTFOLIO;
  const {t, photo, count, shown} = window.PORTFOLIO_I18N;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('[data-instagram-link]').forEach(instagram => {
    instagram.hidden = !config.instagram;
    if (config.instagram) instagram.href = config.instagram;
  });
  document.querySelectorAll('[data-instagram-placeholder]').forEach(note => {
    note.hidden = Boolean(config.instagram);
  });
  const contactNote = document.getElementById('contact-placeholder');
  if (contactNote) contactNote.hidden = !config.placeholderContacts || Boolean(config.instagram);

  const featured = document.querySelector('.featured-grid');
  function renderFeatured() {
    if (!featured) return;
    const requested = config.featured || [83,52,96];
    const byId = new Map(photos.map(p => [p.id,p]));
    featured.replaceChildren();
    requested.forEach((id,index) => {
      const p = byId.get(id) || photos[index % photos.length];
      if (!p) return;
      const tag = p.tags.includes('film') ? 'film' : p.tags.includes('automotive') ? 'automotive' : p.tags[0];
      const link = document.createElement('a'); link.className = 'featured-photo';
      link.href = `portfolio.html?collection=${encodeURIComponent(tag)}&lang=${window.PORTFOLIO_I18N.getLanguage()}`;
      const image = document.createElement('img'); image.src = p.src; image.alt = photo(p); image.width = p.width; image.height = p.height; image.decoding = 'async';
      link.append(image); featured.append(link);
    });
  }
  renderFeatured();
  if (featured) document.addEventListener('portfolio:languagechange',renderFeatured);

  const gallery = document.getElementById('gallery');
  if (!gallery) return;
  const filters = document.getElementById('filters');
  const panel = document.getElementById('collection-panel');
  const more = document.getElementById('load-more');
  const viewer = document.getElementById('viewer');
  const viewerImage = document.getElementById('viewer-photo');
  let active = 'all', visible = 18, collection = photos, current = 0, opener = null;
  const labels = Object.fromEntries(config.categories.map(c => [c.id, c.label]));
  const labelFor = p => t(labels[p.tags.includes('film') ? 'film' : p.tags.includes('automotive') ? 'automotive' : p.tags[0]]);
  const initial = new URLSearchParams(location.search).get('collection');
  if (config.categories.some(c => c.id === initial)) active = initial;
  config.categories.forEach((c, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'filter'; b.id = `tab-${c.id}`;
    b.setAttribute('role','tab'); b.setAttribute('aria-controls','collection-panel');
    b.dataset.category = c.id;
    const name = document.createElement('span'); name.className = 'filter-label'; name.textContent = t(c.label); b.append(name);
    const tally = document.createElement('span'); tally.className = 'filter-count';
    tally.textContent = photos.filter(p => c.id === 'all' || p.tags.includes(c.id)).length;
    b.append(tally);
    b.addEventListener('click', () => selectCollection(c.id));
    b.addEventListener('keydown', e => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
      e.preventDefault();
      const n = e.key === 'Home' ? 0 : e.key === 'End' ? config.categories.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + config.categories.length) % config.categories.length;
      selectCollection(config.categories[n].id);
      document.getElementById(`tab-${config.categories[n].id}`).focus();
    });
    filters.append(b);
  });
  function selectCollection(id, changeUrl = true) {
    active = id; visible = 18;
    collection = photos.filter(p => active === 'all' || p.tags.includes(active));
    filters.querySelectorAll('button').forEach(b => {
      const selected = b.dataset.category === active;
      b.setAttribute('aria-selected', String(selected)); b.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', `tab-${active}`);
    document.getElementById('gallery-status').textContent = count(collection.length);
    if (changeUrl && location.protocol !== 'file:') {
      try {const url = new URL(location.href); active === 'all' ? url.searchParams.delete('collection') : url.searchParams.set('collection',active); history.replaceState(null,'',url);} catch (_) {}
    }
    render();
  }
  function render({append = false} = {}) {
    const start = append ? gallery.children.length : 0;
    if (!append) gallery.replaceChildren();
    collection.slice(start, visible).forEach((p, offset) => {
      const i = start + offset;
      const b = document.createElement('button'); b.type = 'button'; b.className = 'photo-card'; b.dataset.ratio = p.width / p.height;
      b.setAttribute('aria-label',`${t('View photograph:')} ${photo(p)}`);
      const img = document.createElement('img'); img.src = p.src; img.alt = photo(p); img.width = p.width; img.height = p.height; img.decoding = 'async'; img.loading = i < 6 ? 'eager' : 'lazy';
      const caption = document.createElement('span'); caption.className = 'photo-caption';
      const label = document.createElement('span'); label.textContent = labelFor(p);
      const number = document.createElement('span'); number.textContent = String(p.id).padStart(3,'0');
      caption.append(label,number); b.append(img,caption); b.addEventListener('click', () => openPhoto(i,b));
      img.addEventListener('error',()=>{label.textContent=t('Photograph unavailable');b.disabled=true;});
      gallery.append(b);
    });
    more.hidden = visible >= collection.length;
    document.getElementById('shown-count').textContent = shown(Math.min(visible,collection.length),collection.length);
    layout();
  }
  function layout() {
    gallery.querySelectorAll('.photo-card').forEach(card => {
      const w = card.getBoundingClientRect().width;
      const captionHeight = card.querySelector('.photo-caption').getBoundingClientRect().height;
      const padding = parseFloat(getComputedStyle(card).paddingBottom);
      const h = w / Number(card.dataset.ratio) + captionHeight + padding;
      card.style.gridRowEnd = `span ${Math.ceil(h / 8)}`;
    });
  }
  more.addEventListener('click', () => {
    const before = Math.min(visible, collection.length);
    visible += 18; render({append:true});
    const firstNew = gallery.children[before];
    if (firstNew) firstNew.focus({preventScroll:true});
  });
  const ro = new ResizeObserver(layout); ro.observe(gallery);
  function openPhoto(index, button) {
    current = index; opener = button;
    viewer.showModal(); document.body.style.overflow = 'hidden';
    updateViewer(); document.getElementById('close-viewer').focus();
  }
  function updateViewer() {
    const p = collection[current];
    viewerImage.src = p.src; viewerImage.alt = photo(p);
    document.getElementById('viewer-category').textContent = labelFor(p);
    document.getElementById('viewer-description').textContent = photo(p);
    document.getElementById('viewer-position').textContent = `${current+1} / ${collection.length}`;
    document.getElementById('previous-photo').disabled = collection.length < 2;
    document.getElementById('next-photo').disabled = collection.length < 2;
  }
  function step(amount) { current = (current + amount + collection.length) % collection.length; updateViewer(); }
  document.getElementById('close-viewer').addEventListener('click', () => viewer.close());
  document.getElementById('previous-photo').addEventListener('click', () => step(-1));
  document.getElementById('next-photo').addEventListener('click', () => step(1));
  viewer.addEventListener('close', () => {document.body.style.overflow=''; if (opener && opener.isConnected) opener.focus({preventScroll:true});});
  viewer.addEventListener('keydown', e => {if (e.key === 'ArrowRight') {e.preventDefault();step(1);} else if (e.key === 'ArrowLeft') {e.preventDefault();step(-1);}});
  let touchStart = null;
  viewerImage.addEventListener('touchstart', e => {touchStart = {x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};},{passive:true});
  viewerImage.addEventListener('touchend', e => {if(!touchStart)return; const x=e.changedTouches[0].clientX-touchStart.x,y=e.changedTouches[0].clientY-touchStart.y;if(Math.abs(x)>60 && Math.abs(x)>Math.abs(y)*1.5)step(x<0?1:-1);touchStart=null;},{passive:true});
  document.addEventListener('portfolio:languagechange', () => {
    config.categories.forEach(c => { document.querySelector(`#tab-${c.id} .filter-label`).textContent = t(c.label); });
    document.getElementById('gallery-status').textContent = count(collection.length);
    render();
    if (viewer.open) updateViewer();
  });
  selectCollection(active,false);
})();

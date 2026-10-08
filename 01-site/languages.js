(() => {
  'use strict';
  const translations = {
  "Skip to content": "Přejít k obsahu",
  "Main navigation": "Hlavní navigace",
  "Home": "Úvod",
  "Portfolio": "Portfolio",
  "About": "O mně",
  "Contact": "Kontakt",
  "Contacts": "Kontakty",
  "Photography by Lenka": "Fotografie od Lenky",
  "photography by Lenka": "fotografie od Lenky",
  "People. Places.<br><em>Everything between.</em>": "Lidé. Místa.<br><em>A všechno mezi tím.</em>",
  "A curious eye for the big adventures<br class=\"desktop-break\"> and the little moments.": "Zvědavé oko pro velká dobrodružství<br class=\"desktop-break\"> i malé okamžiky.",
  "Explore the photographs": "Prohlédnout fotografie",
  "Selected photographs": "Vybrané fotografie",
  "Portraits & people": "Portréty a lidé",
  "Nature & travel": "Příroda a cestování",
  "Street & everyday": "Ulice a každodennost",
  "View the full portfolio <span aria-hidden=\"true\">↗</span>": "Prohlédnout celé portfolio <span aria-hidden=\"true\">↗</span>",
  "The portfolio": "Portfolio",
  "A little of <em>everything.</em>": "Od každého <em>trochu.</em>",
  "People, places, and the details in between. Choose a collection and take a closer look.": "Lidé, místa a drobnosti mezi tím. Vyber si kolekci a podívej se zblízka.",
  "Photography portfolio": "Fotografické portfolio",
  "The collection": "Kolekce",
  "Photo collections": "Fotografické kolekce",
  "More photographs": "Další fotografie",
  "Please enable JavaScript to browse the collection. You can view every photograph in the photos folder.": "Pro prohlížení kolekce zapni JavaScript. Všechny fotografie najdeš také ve složce photos.",
  "Full-screen photograph viewer": "Prohlížeč fotografií na celou obrazovku",
  "Close <span aria-hidden=\"true\">×</span>": "Zavřít <span aria-hidden=\"true\">×</span>",
  "Previous": "Předchozí",
  "Next": "Další",
  "Previous photograph": "Předchozí fotografie",
  "Next photograph": "Další fotografie",
  "Behind the camera": "Za fotoaparátem",
  "Small things, worth noticing.": "Drobnosti, které stojí za pozornost.",
  "Hi, I’m Lenka.<br><em>Curiosity comes with me.</em>": "Ahoj, jsem Lenka.<br><em>Zvědavost mě provází.</em>",
  "I enjoy photographing a bit of everything: people, places, nature, and the everyday details that make me stop and look.": "Ráda fotím od všeho trochu: lidi, místa, přírodu i každodenní drobnosti, u kterých se musím zastavit a rozhlédnout.",
  "I love being outdoors, finding a new perspective, and spending time with the photographs afterwards. This is a collection of what catches my eye, on digital and on film.": "Miluju pobyt venku, hledání nových úhlů pohledu i následnou práci s fotkami. Tady najdeš to, co mě zaujalo — na digitálu i na filmu.",
  "Have something in mind? Let’s talk.": "Máš něco v hlavě? Ozvi se.",
  "Your next story": "Tvůj další příběh",
  "Let’s make<br><em>something worth keeping.</em>": "Pojďme zachytit<br><em>něco, co stojí za uchování.</em>",
  "A portrait, an event, something for your brand, or an idea that doesn’t fit in a box. Tell me what you’re thinking.": "Portrét, akce, něco pro tvou značku nebo nápad, který se do žádné škatulky nevejde. Napiš mi, co máš v hlavě.",
  "Find me on Instagram": "Najdeš mě na Instagramu",
  "Instagram link coming soon.": "Odkaz na Instagram už brzy.",
  "Instagram — coming soon": "Instagram — už brzy",
  "Have something in mind?": "Máš něco v hlavě?",
  "Let’s create <em>it.</em>": "Pojďme <em>to vytvořit.</em>",
  "Photographs by Lenka": "Fotografie od Lenky",
  "Get in touch": "Ozvi se",
  "All photographs": "Všechny fotografie",
  "Nature": "Příroda",
  "Travel": "Cestování",
  "Events": "Akce",
  "Products & brands": "Produkty a značky",
  "Automotive": "Auta",
  "On film": "Na filmu",
  "View photograph:": "Zobrazit fotografii:",
  "Photograph unavailable": "Fotografie není dostupná",
  "Photography enquiry": "Poptávka focení",
  "Photography by Lenka. Portraits, nature, travel and everyday moments.": "Fotografie od Lenky. Portréty, příroda, cestování a každodenní okamžiky.",
  "Explore Lenka’s photography by collection: portraits, nature, travel, events, brands, automotive and film.": "Prohlédni si Lenčiny fotografické kolekce: portréty, přírodu, cestování, akce, značky, auta a film.",
  "Meet Lenka, the curious eye behind the camera.": "Seznam se s Lenkou, zvědavým okem za fotoaparátem.",
  "Contact Lenka about a portrait, event, brand shoot or photography idea.": "Ozvi se Lence s nápadem na portrét, focení akce, značky nebo jiný fotografický projekt.",
  "Sunlight falling through the trees in a quiet forest": "Sluneční světlo mezi stromy v tichém lese",
  "Light and shadow on brick apartments": "Světlo a stín na cihlových domech",
  "Balconies on a brick building": "Balkony na cihlové budově",
  "Golden light in an alley": "Zlatavé světlo v uličce",
  "A quiet cobbled lane": "Tichá dlážděná ulička",
  "A vase behind an old window": "Váza za starým oknem",
  "Architecture, water and everyday moments on the road": "Architektura, voda a každodenní okamžiky na cestách",
  "Reflections in a church window": "Odrazy v kostelním okně",
  "Swan resting in the grass": "Labuť odpočívající v trávě",
  "An open field at dusk": "Otevřené pole za soumraku",
  "Still life on a softly lit shelf": "Zátiší na jemně osvětlené polici",
  "Close-up portrait outdoors": "Portrét zblízka v exteriéru",
  "Vintage bicycle details": "Detaily historického kola",
  "Bicycle under the trees": "Kolo pod stromy",
  "People at a fruit market": "Lidé na trhu s ovocem",
  "Hands and produce at a busy fruit market": "Ruce a ovoce na rušném trhu",
  "Layers of distant blue mountains": "Vrstvy vzdálených modrých hor",
  "Natural light, landscapes and small outdoor details": "Přirozené světlo, krajina a drobné detaily v přírodě",
  "Bird beside a mountain path": "Pták u horské stezky",
  "Chamois on a grassy mountain slope": "Kamzík na travnatém horském svahu",
  "A bee on a yellow flower": "Včela na žlutém květu",
  "Hiker overlooking a mountain lake": "Turista s výhledem na horské jezero",
  "Cat in warm evening light": "Kočka v teplém večerním světle",
  "A jetty above clear water": "Molo nad průzračnou vodou",
  "Colourful boats on the shore": "Barevné lodě na břehu",
  "Cat in a sunlit stone alley": "Kočka v prosluněné kamenné uličce",
  "Cat on stone steps": "Kočka na kamenných schodech",
  "Candid close-up portrait": "Momentka portrétu zblízka",
  "Dog swimming in the sea": "Pes plavající v moři",
  "A chair and book beside the water": "Židle a kniha u vody",
  "A person beside the sea": "Člověk u moře",
  "Ripples on the water": "Vlnky na vodě",
  "Coastal silhouette at sunset": "Silueta na pobřeží při západu slunce",
  "The sun above a quiet sea": "Slunce nad klidným mořem",
  "Two people overlooking the coast": "Dva lidé s výhledem na pobřeží",
  "Cat resting in the shade": "Kočka odpočívající ve stínu",
  "Cat beside a tree": "Kočka u stromu",
  "A swimmer in turquoise water": "Plavec v tyrkysové vodě",
  "Details inside a boat": "Detaily v interiéru lodi",
  "Boat captain at the helm": "Kapitán lodi u kormidla",
  "Light falling through a narrow street": "Světlo v úzké ulici",
  "Names carved into stone": "Jména vytesaná do kamene",
  "Bird among branches": "Pták mezi větvemi",
  "Pigeons on a stone wall": "Holubi na kamenné zdi",
  "Insect resting on a stem": "Hmyz odpočívající na stonku",
  "Pink flowers in the sunlight": "Růžové květy na slunci",
  "A person in evening light": "Člověk ve večerním světle",
  "Group portrait beside a historic building": "Skupinový portrét u historické budovy",
  "View through a car mirror": "Pohled přes zrcátko auta",
  "Countryside under a blue sky": "Krajina pod modrou oblohou",
  "Clouds above the treetops": "Mraky nad korunami stromů",
  "Clouds behind a garden fence": "Mraky za zahradním plotem",
  "Outdoor portrait in soft light": "Portrét venku v měkkém světle",
  "Candid portrait outdoors": "Portrétní momentka venku",
  "Sunlight in the forest": "Sluneční světlo v lese",
  "Porsche badge and bodywork": "Znak Porsche a karoserie",
  "Cars and people at a Porsche festival": "Auta a lidé na festivalu Porsche",
  "Porsche steering wheel and interior": "Volant a interiér Porsche",
  "Porsche badge on blue bodywork": "Znak Porsche na modré karoserii",
  "Yellow car bodywork in detail": "Detail žluté karoserie",
  "Details of a racing car": "Detaily závodního auta",
  "Colourful racing car cockpit": "Barevný kokpit závodního auta",
  "Racing crew at a car festival": "Závodní tým na automobilovém festivalu",
  "Racing car livery in detail": "Detail polepů závodního auta",
  "Red race car bodywork": "Karoserie červeného závodního auta",
  "Red race car window": "Okno červeného závodního auta",
  "Racing car on track": "Závodní auto na trati",
  "Racing car in motion": "Závodní auto v pohybu",
  "Pink racing car in motion": "Růžové závodní auto v pohybu",
  "White racing car on track": "Bílé závodní auto na trati",
  "Blue racing car on track": "Modré závodní auto na trati",
  "Statue beneath leafy branches on film": "Socha pod olistěnými větvemi na filmu",
  "People on a boat, photographed on film": "Lidé na lodi zachycení na filmu",
  "Small boats beside a pier on film": "Malé lodě u mola na filmu",
  "Sunset over the sea on film": "Západ slunce nad mořem na filmu",
  "A silhouette in a café on film": "Silueta v kavárně na filmu",
  "Quiet blue harbour on film": "Klidný modrý přístav na filmu",
  "Rocky coastline on film": "Skalnaté pobřeží na filmu",
  "Boats at anchor on film": "Kotvící lodě na filmu",
  "A stone statue beneath the trees on film": "Kamenná socha pod stromy na filmu",
  "Waterside architecture on film": "Architektura u vody na filmu",
  "Green coastline on film": "Zelené pobřeží na filmu",
  "A person walking beside the sea on film": "Člověk kráčející podél moře na filmu",
  "Birds beside old stone walls on film": "Ptáci u starých kamenných zdí na filmu",
  "An old town street on film": "Ulice starého města na filmu",
  "A gelato shop at night on film": "Zmrzlinárna v noci na filmu",
  "Coastal fortifications on film": "Pobřežní opevnění na filmu",
  "Friends walking through a square": "Přátelé procházející náměstím",
  "A photographer taking a picture": "Fotograf při focení",
  "Candid street portrait with a camera": "Portrétní momentka na ulici s fotoaparátem",
  "Portrait in a historic square": "Portrét na historickém náměstí",
  "Portrait on a city street": "Portrét v městské ulici",
  "Friends posing on a city street": "Přátelé pózující v městské ulici",
  "A lakeside church beneath mountains": "Kostel u jezera pod horami"
};
  const {config} = window.PORTFOLIO;
  const storedLanguage = () => { try { return localStorage.getItem('portfolio-language'); } catch (_) { return null; } };
  const requested = new URLSearchParams(location.search).get('lang');
  const saved = storedLanguage();
  let language = ['en','cs'].includes(requested) ? requested : ['en','cs'].includes(saved) ? saved : navigator.language.toLowerCase().startsWith('cs') ? 'cs' : 'en';
  const t = key => language === 'cs' ? translations[key] || key : key;
  const photo = p => language === 'cs' ? p.altCs || t(p.alt) : p.alt;
  const count = n => language === 'cs' ? `${n} ${n < 5 && n > 0 ? 'fotografie' : 'fotografií'}` : `${n} photograph${n === 1 ? '' : 's'}`;
  const shown = (n,total) => language === 'cs' ? `${n} ze ${count(total)}` : `${n} of ${count(total)}`;
  function applyLanguage() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    for (const attr of ['aria-label','alt','content']) {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => { el.setAttribute(attr,t(el.getAttribute(`data-i18n-${attr}`))); });
    }
    document.querySelectorAll('[data-language]').forEach(button => { button.setAttribute('aria-pressed',String(button.dataset.language === language)); });
    const pageNames = {portfolio:'Portfolio',about:'About',contact:'Contact'};
    const prefix = pageNames[document.body.dataset.page];
    const brand = t(config.brand);
    const titleBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
    const bylineText = t(config.byline);
    document.title = `${prefix ? t(prefix) + ' · ' : ''}${titleBrand}${brand.toLowerCase() === bylineText.toLowerCase() ? '' : ' — ' + bylineText}`;
    document.querySelectorAll('.wordmark').forEach(mark => { mark.firstChild.textContent = brand; });
    const byline = document.querySelector('.intro .eyebrow');
    if (byline) byline.textContent = t(config.byline);
    const homeLink = document.querySelector('.header .wordmark');
    if (homeLink) homeLink.setAttribute('aria-label',`${brand} — ${t('Home')}`);
    document.querySelectorAll('[data-email-link]').forEach(email => {
      const address = email.querySelector('[data-email-address]');
      if (address) address.textContent = config.email;
      else email.textContent = config.email;
      email.href = `mailto:${config.email}?subject=${encodeURIComponent(t('Photography enquiry'))}`;
    });
    // Carry the selected language into every internal page link, including collections.
    document.querySelectorAll('a[href]').forEach(link => {
      const raw = link.getAttribute('href');
      if (!/^[^:#?]*\.html(?:[?#]|$)/.test(raw)) return;
      const url = new URL(raw,location.href);
      url.searchParams.set('lang',language);
      link.setAttribute('href',url.pathname.split('/').pop() + url.search + url.hash);
    });
  }
  function chooseLanguage(next) {
    language = next;
    try { localStorage.setItem('portfolio-language',language); } catch (_) {}
    try { const url = new URL(location.href); url.searchParams.set('lang',language); history.replaceState(null,'',url); } catch (_) {}
    applyLanguage();
    document.dispatchEvent(new CustomEvent('portfolio:languagechange'));
  }
  window.PORTFOLIO_I18N = {t,photo,count,shown,getLanguage:()=>language};
  document.querySelectorAll('[data-language]').forEach(button => { button.addEventListener('click',()=>chooseLanguage(button.dataset.language)); });
  applyLanguage();
})();

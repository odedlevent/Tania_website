import fs from 'node:fs';
import content from './content.mjs';

const d = content();
const s = d.settings;
const esc = (x = '') => String(x).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const t = (he, en, tag = 'span') => {
  if (!he && !en) return '';
  if (!en || en === he) return `<${tag} class="both">${esc(he)}</${tag}>`;
  if (!he) return `<${tag} class="both">${esc(en)}</${tag}>`;
  return `<${tag} class="he">${esc(he)}</${tag}><${tag} class="en">${esc(en)}</${tag}>`;
};
const paras = (txt) => String(txt).split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join('');
const fmtDate = (iso) => { const [y, m, dd] = iso.split('-'); return `${dd}.${m}.${y.slice(2)}`; };
const icons = {
  facebook: 'M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3z',
  instagram: 'M12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM17 6.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 1.6A2.9 2.9 0 0 0 4.6 7.5v9a2.9 2.9 0 0 0 2.9 2.9h9a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9h-9z',
  youtube: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z',
  tiktok: 'M16.6 3h-3v12.3a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.8 5.6V9a6.4 6.4 0 0 0 3.7 1.2V7.2A3.8 3.8 0 0 1 16.6 3z',
  spotify: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.7.7 0 0 1-1 .2c-2.6-1.6-5.8-1.9-9.6-1a.7.7 0 1 1-.3-1.4c4.2-1 7.8-.6 10.7 1.2.3.2.4.7.2 1zm1.2-2.7a.9.9 0 0 1-1.2.3c-3-1.8-7.5-2.4-11-1.3a.9.9 0 0 1-.5-1.7c4-1.2 9-.6 12.4 1.5.4.2.5.8.3 1.2zm.1-2.8C14.3 8.8 8.600 8.600 5.300 9.600a1.100 1.100 0 1 1-.6-2.100c3.800-1.100 10.100-.9 14 1.400a1.100 1.100 0 0 1-1.100 1.900z',
  apple: 'M16.4 12.7c0-2.300 1.900-3.400 2-3.500-1.100-1.600-2.800-1.800-3.400-1.800-1.400-.1-2.800.9-3.500.9s-1.800-.8-3-.8C6.900 7.500 5.400 8.400 4.600 9.800c-1.700 2.900-.4 7.200 1.200 9.600.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8s1.800.8 3.100.7c1.300 0 2.100-1.200 2.900-2.300.9-1.300 1.300-2.600 1.300-2.700-.1 0-2.800-1-2.800-4zM14.100 5.800c.600-.8 1.100-1.900.9-3-.9 0-2.100.6-2.700 1.400-.6.700-1.100 1.800-.9 2.900 1 .1 2.100-.5 2.700-1.300z',
};
const icon = (k) => s[k] ? `<a href="${esc(s[k])}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[k]}"/></svg></a>` : '';
const socials = ['facebook', 'youtube', 'spotify', 'instagram', 'tiktok', 'apple'].map(icon).join('');

const statusLabel = {
  tickets: ['לרכישת כרטיסים', 'Tickets'], soon: ['כרטיסים בקרוב', 'Tickets Soon'],
  soldout: ['אזלו הכרטיסים', 'Sold Out'], none: null,
};
const shows = d.shows.filter(x => x.published).sort((a, b) => a.date.localeCompare(b.date)).map(x => {
  const st = statusLabel[x.status];
  const btn = !st ? '' : x.status === 'tickets' && x.ticketUrl
    ? `<a class="btn" href="${esc(x.ticketUrl)}" target="_blank" rel="noopener">${t(st[0], st[1])}</a>`
    : `<span class="btn off">${t(st[0], st[1])}</span>`;
  return `<article class="show" data-date="${x.date}">
    <div class="when"><b>${fmtDate(x.date)}</b><span>${esc(x.time)}</span></div>
    <div class="what"><h3>${t(x.titleHe, x.titleEn)}</h3>${x.notesHe || x.notesEn ? `<p>${t(x.notesHe, x.notesEn)}</p>` : ''}<p class="venue">${t(x.venueHe, x.venueEn)}</p></div>
    <div class="act">${btn}</div></article>`;
}).join('\n');

const vid = (v) => `<button class="vid" data-id="${esc(v.youtubeId)}" aria-label="${esc(v.title)}">
  <img loading="lazy" src="https://i.ytimg.com/vi/${esc(v.youtubeId)}/hqdefault.jpg" alt="">
  <span class="play"></span><span class="cap">${esc(v.title)}</span></button>`;
const featured = d.videos.find(v => v.section === 'featured');
const main = d.videos.filter(v => v.section === 'main').map(vid).join('');
const special = d.videos.filter(v => v.section === 'special').map(vid).join('');
const gallery = d.gallery.map(g => `<figure><a href="${esc(g.image)}" class="zoom"><img loading="lazy" src="${esc(g.image)}" alt="${esc(g.caption)}"></a><figcaption>${esc(g.caption)}${g.credit ? `<small>${esc(g.credit)}</small>` : ''}</figcaption></figure>`).join('');
const introHtml = s.introEn ? `<div class="he">${paras(s.introHe)}</div><div class="en">${paras(s.introEn)}</div>` : `<div class="both">${paras(s.introHe)}</div>`;
const spId = (s.spotify.match(/artist\/(\w+)/) || [])[1];

const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(s.seoTitle)}</title>
<meta name="description" content="${esc(s.seoDescription)}">
<meta property="og:title" content="${esc(s.seoTitle)}"><meta property="og:description" content="${esc(s.seoDescription)}"><meta property="og:image" content="/img/hero.jpg">
<link rel="stylesheet" href="/css/site.css">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Tania Vinokur', jobTitle: 'Violinist', sameAs: [s.facebook, s.instagram, s.youtube, s.spotify, s.wikipedia].filter(Boolean) })}</script>
</head>
<body>
<header class="top"><nav>
  <a href="#shows">${t('לוח הופעות', 'Shows')}</a><a href="#about">${t('אודות', 'About')}</a><a href="#music">${t('מוזיקה', 'Music')}</a><a href="#videos">${t('סרטונים', 'Videos')}</a><a href="#contact">${t('צרו קשר', 'Contact')}</a>
</nav>
<div class="tools"><button id="lang" aria-label="Language">EN</button><a class="pill" href="#shows">${t('לרכישת כרטיסים', 'Tickets')}</a></div></header>

<section class="hero">
  <img class="figure" src="/img/figure.png" alt="Tania Vinokur">
  <div class="brand"><img src="/img/logo.png" alt="Tania Violin"><p>${esc(s.heroSubtitle)}</p><div class="social">${socials}</div></div>
</section>

<section class="banner"><img src="/img/hero.jpg" alt="Tania Vinokur live"></section>

<section id="shows" class="wrap"><h2>${t('לוח הופעות', 'Upcoming Shows')}</h2>
  <div class="shows">${shows}</div><p class="empty" hidden>${t('אין הופעות קרובות כרגע – עקבו אחרינו ברשתות!', 'No upcoming shows right now – follow us on social media!')}</p></section>

<section class="wrap intro"><h2>${t(s.introTitleHe, s.introTitleEn)}</h2><div class="text">${introHtml}</div></section>

${featured ? `<section class="wrap featured"><h2>${esc(featured.title)}</h2>${vid(featured)}</section>` : ''}

<section id="about" class="wrap about"><h2>${t('אודות', 'About')}</h2><div class="text">${paras(s.aboutHe)}</div>
  <p class="links">${s.wikipedia ? `<a href="${esc(s.wikipedia)}" target="_blank" rel="noopener">${t('ויקיפדיה', 'Wikipedia')}</a>` : ''}${s.apple ? `<a href="${esc(s.apple)}" target="_blank" rel="noopener">${t('לערוץ באפל מיוזיק', 'Apple Music')}</a>` : ''}</p></section>

<section id="music" class="wrap"><h2>${t('מוזיקה', 'Music')}</h2>
  ${spId ? `<iframe class="spotify" loading="lazy" src="https://open.spotify.com/embed/artist/${spId}" allow="encrypted-media" title="Spotify"></iframe>` : ''}
  <p class="links">${['spotify', 'apple', 'amazon'].filter(k => s[k]).map(k => `<a href="${esc(s[k])}" target="_blank" rel="noopener">${{ spotify: 'Spotify', apple: 'Apple Music', amazon: 'Amazon' }[k]}</a>`).join('')}</p></section>

<section id="videos" class="wrap"><h2>${t('סרטונים', 'Videos')}</h2><div class="grid">${main}</div>
  ${special ? `<h3 class="sub">${t('הופעות מיוחדות', 'Special Performances')}</h3><div class="grid">${special}</div>` : ''}</section>

<section class="wrap"><h2>${t('גלריה', 'Gallery')}</h2><div class="gallery">${gallery}</div></section>

<section id="contact" class="wrap contact"><h2>${t('צרו קשר', 'Contact')}</h2>
  <div class="cbtns">
    ${s.whatsapp ? `<a class="btn" href="${esc(s.whatsapp)}" target="_blank" rel="noopener">${t('כתבו לוואטסאפ', 'WhatsApp')}</a>` : ''}
    ${s.whatsappGroup ? `<a class="btn" href="${esc(s.whatsappGroup)}" target="_blank" rel="noopener">${t('הצטרפו לקבוצת החברים', 'Join our group')}</a>` : ''}
    ${s.email ? `<a class="btn" href="mailto:${esc(s.email)}">${t('כתבו במייל', 'Email')}</a>` : ''}
  </div>
  <p class="line"><a href="mailto:${esc(s.email)}">${esc(s.email)}</a> · <a href="tel:${esc(s.phone)}" dir="ltr">${esc(s.phone)}</a></p>
  ${s.supportUrl ? `<p><a class="btn alt" href="${esc(s.supportUrl)}" target="_blank" rel="noopener">Support the artist</a></p>` : ''}
  <div class="social big">${socials}</div></section>

<footer>${esc(s.footer)}</footer>
<div id="lightbox" hidden><img alt=""></div>
<script src="/js/site.js"></script>
</body></html>`;

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/index.html', html);
console.log('built public/index.html', html.length, 'bytes');

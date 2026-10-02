import { mkdir, rm, writeFile, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const base = (process.env.SITE_BASE || '').replace(/\/$/, '');
const siteUrl = (process.env.SITE_URL || `https://jhjuyel1000-del.github.io${base || ''}`).replace(/\/$/, '');
const pageUrl = (path) => `${base}${path}`;
const canonical = (path) => `${siteUrl}${path}`;

const pages = [
  {
    slug: '/',
    title: 'Router Login Help: IP, Admin Access and Troubleshooting | RouterGuide',
    description: 'Simple router login help for 192.168.1.1, 192.168.0.1, 10.0.0.1, router IP discovery and common admin access problems.',
    label: 'A clearer way to reach your router',
    h1: 'Find your router login page',
    intro: 'Enter a router IP, brand, model, or problem and get a short, practical next step without the clutter.',
    home: true,
    body: `
      <section class="section"><div class="section-head"><div><span class="eyebrow">Start here</span><h2>Popular router login addresses</h2><p class="section-intro">Use these links only while connected to your own router or home network. They open a local address in your browser.</p></div></div><div class="grid">
        ${ipCard('192.168.1.1','Common router admin address — start with the login guide','/router-login/')}
        ${ipCard('192.168.0.1','Common router admin address — use the login guide','/router-login/')}
        ${ipCard('10.0.0.1','Common gateway address — find yours first','/find-router-ip/')}
        ${ipCard('192.168.8.1','Selected mobile routers — check your gateway','/find-router-ip/')}
        ${ipCard('Find your IP','Use your device settings','/find-router-ip/')}
        ${ipCard('Login problem','Fix an admin page that will not open','/router-login-not-working/')}
      </div></section>
      <section class="section quick"><div class="section-head"><div><span class="eyebrow">Three quick steps</span><h2>Get to the right screen</h2></div></div><div class="quick-grid">
        <div class="quick-step"><span class="step-no">1</span><div><h3>Connect locally</h3><p>Join your router’s Wi-Fi or connect by Ethernet before opening a local IP.</p></div></div>
        <div class="quick-step"><span class="step-no">2</span><div><h3>Use the address bar</h3><p>Type the IP into your browser’s address bar, not into a search engine.</p></div></div>
        <div class="quick-step"><span class="step-no">3</span><div><h3>Try the next fix</h3><p>If the page does not open, check your gateway before resetting anything.</p></div></div>
      </div></section>
      <section class="section"><div class="notice"><strong>Local access reminder:</strong> RouterGuide does not ask for your router password. A local admin address works only from the network that owns the router.</div></section>`
  },
  {
    slug: '/router-login/', title: 'Router Admin Login: Access Your Router Control Panel | RouterGuide', description: 'Learn how to open a router admin panel using a local IP address and what to do when the login screen does not appear.', label: 'Router admin access', h1: 'Router admin login made simple', intro: 'Open your router control panel from your own local network. No password is entered on this site.', body: `
      <div class="action-row"><a class="button" href="http://192.168.1.1/">Open 192.168.1.1</a><a class="button secondary" href="${pageUrl('/find-router-ip/')}">Find my router IP</a></div>
      <div class="notice"><strong>Before you start:</strong> Connect to your own router by Wi-Fi or Ethernet. Type the address into the browser address bar.</div>
      <h2>How to open the admin panel</h2><ol><li>Connect your phone or computer to the router network.</li><li>Open a browser and type a local address such as <strong>192.168.1.1</strong>.</li><li>Press Enter and use the credentials printed on your router label or setup material.</li><li>After signing in, change any default password and save your settings carefully.</li></ol>
      <h2>Try another common address</h2><div class="grid"><div class="card"><span class="ip-chip">192.168.0.1</span><p>Try the login guide while connected to your own network.</p><a href="${pageUrl('/router-login/')}">Open login steps →</a></div><div class="card"><span class="ip-chip">10.0.0.1</span><p>Find the exact gateway shown by your device.</p><a href="${pageUrl('/find-router-ip/')}">Find your gateway →</a></div></div>
      <h2>Do not enter your password here</h2><p>RouterGuide is an information site. It never receives, stores, or processes router credentials. If you are unsure which address belongs to your router, use the gateway instructions instead of guessing repeatedly.</p><div class="action-row"><a class="button ghost" href="${pageUrl('/router-login-not-working/')}">Login is not working</a></div>`
  },
  {
    slug: '/find-router-ip/', title: 'Find Your Router IP Address and Default Gateway | RouterGuide', description: 'Find the router IP or default gateway on Windows, macOS, Android, iPhone, iPad and Linux with simple steps.', label: 'Find the right local address', h1: 'How to find your router IP address', intro: 'The correct gateway shown by your device is more reliable than guessing a common IP.', body: `
      <h2>Windows</h2><ol><li>Open Command Prompt.</li><li>Run <code>ipconfig</code>.</li><li>Look for <strong>Default Gateway</strong> under the connected adapter.</li></ol><h2>macOS</h2><ol><li>Open System Settings and choose your connected network.</li><li>Open network details and look for Router.</li></ol><h2>Android and iPhone</h2><p>Open the details for the Wi-Fi network you are currently using. Look for Gateway, Router, or similar wording. The label varies by device and version.</p><h2>Linux</h2><p>Open a terminal and check the default route with your network tools. The address after <strong>default via</strong> is normally the gateway.</p><div class="warning"><strong>Important:</strong> The gateway may be different from the popular examples. Use the value shown for your current network.</div><div class="action-row"><a class="button" href="${pageUrl('/router-login/')}">Open the login guide</a><a class="button secondary" href="${pageUrl('/router-login-not-working/')}">Need another fix?</a></div>`
  },
  {
    slug: '/router-login-not-working/', title: 'Router Login Not Working: Fix the Admin Page | RouterGuide', description: 'Fix a router login page that will not open. Check your connection, gateway, browser, and reset options step by step.', label: 'Troubleshooting', h1: 'Router login is not working', intro: 'Work through these checks in order before considering a factory reset.', body: `
      <div class="checklist"><div class="check"><span class="step-no">1</span><div><strong>Check the connection</strong><span>Make sure your device is connected to the router’s Wi-Fi or Ethernet network.</span></div></div><div class="check"><span class="step-no">2</span><div><strong>Check the address</strong><span>Use your device’s Default Gateway instead of guessing an IP.</span></div></div><div class="check"><span class="step-no">3</span><div><strong>Use the address bar</strong><span>Type the local address directly into the browser address bar.</span></div></div><div class="check"><span class="step-no">4</span><div><strong>Try another browser</strong><span>Disable a VPN temporarily and test a private window if appropriate.</span></div></div></div><h2>Still cannot open it?</h2><p>Restart the router and wait for it to finish starting. Check the label or setup information for the correct local address. A factory reset can erase your network settings, so do not use it as the first fix.</p><div class="warning"><strong>Reset warning:</strong> Only reset a router when you understand that the Wi-Fi name, password, ISP settings, and custom rules may be removed.</div><div class="action-row"><a class="button" href="${pageUrl('/find-router-ip/')}">Find the gateway</a><a class="button secondary" href="${pageUrl('/factory-reset-router/')}">Understand reset first</a></div>`
  },
  {
    slug: '/forgot-router-password/', title: 'Forgot Router Admin Password? Safe Recovery Steps | RouterGuide', description: 'Forgot your router admin password? Learn the difference between admin and Wi-Fi passwords and the safest next steps.', label: 'Password recovery', h1: 'Forgot your router admin password?', intro: 'First identify which password you forgot. The admin password and Wi-Fi password are often different.', body: `
      <h2>Admin password or Wi-Fi password?</h2><p>The admin password opens the router settings page. The Wi-Fi password connects a device to the network. Changing one does not always change the other.</p><h2>Try the safe options first</h2><ol><li>Check the router label or setup record.</li><li>Ask the person who configured the router.</li><li>Use the router’s documented recovery flow if one exists.</li><li>Back up settings before making a change.</li></ol><div class="warning"><strong>Before resetting:</strong> A factory reset may erase ISP settings, Wi-Fi names, passwords, port rules, and parental controls.</div><h2>After a reset</h2><p>Reconnect using the setup instructions for your model, create a new strong admin password, and change the default Wi-Fi password.</p><div class="action-row"><a class="button" href="${pageUrl('/factory-reset-router/')}">Read reset warnings</a><a class="button secondary" href="${pageUrl('/router-login/')}">Return to login steps</a></div>`
  },
  {
    slug: '/change-wifi-password/', title: 'How to Change Your Wi-Fi Password Safely | RouterGuide', description: 'Change your Wi-Fi password from a router admin page with a simple, safe checklist.', label: 'Wi-Fi settings', h1: 'Change your Wi-Fi password', intro: 'Use the router settings page on your own network, then reconnect your devices with the new password.', body: `
      <h2>General steps</h2><ol><li>Connect to your router network.</li><li>Open the router admin page using its local IP.</li><li>Sign in with the router’s admin credentials.</li><li>Open Wireless, Wi-Fi, WLAN, or Security settings.</li><li>Choose a strong new password and save.</li><li>Reconnect phones, computers, TVs, and other devices.</li></ol><h2>Choose a safer password</h2><p>Use a long, unique password that is not your name, address, phone number, or router brand. Do not reuse a sensitive account password.</p><div class="notice"><strong>Connection note:</strong> Saving wireless settings may disconnect the device briefly. Reconnect using the new password.</div><div class="action-row"><a class="button" href="${pageUrl('/router-login/')}">Open login steps</a><a class="button secondary" href="${pageUrl('/router-login-not-working/')}">Need login help?</a></div>`
  },
  {
    slug: '/factory-reset-router/', title: 'How to Factory Reset a Router: Warnings and Next Steps | RouterGuide', description: 'Understand what a router factory reset removes, when to use it, and what to prepare before pressing reset.', label: 'Use with care', h1: 'Factory reset a router carefully', intro: 'A factory reset is a last-resort action that can remove your network configuration.', body: `
      <div class="warning"><strong>Do not reset first.</strong> A reset can erase your Wi-Fi name, Wi-Fi password, ISP configuration, admin password, port forwarding, and custom rules.</div><h2>Before pressing reset</h2><ul><li>Find the model and setup information.</li><li>Record settings you will need again.</li><li>Check whether a simple restart or gateway correction solves the problem.</li><li>Make sure you know how to set up the connection afterward.</li></ul><h2>General reset process</h2><ol><li>Keep the router powered on.</li><li>Use the reset control specified for your model.</li><li>Hold it only for the documented duration.</li><li>Wait for the router to restart fully.</li><li>Run the initial setup and create new passwords.</li></ol><p>The exact reset method differs by model. Do not use a random timing rule when you are unsure.</p><div class="action-row"><a class="button secondary" href="${pageUrl('/router-login-not-working/')}">Try login fixes first</a><a class="button" href="${pageUrl('/find-router-ip/')}">Find the gateway</a></div>`
  },
  {
    slug: '/ip/192-168-1-1/', title: '192.168.1.1 Login: Router Admin Access and Troubleshooting | RouterGuide', description: 'Open 192.168.1.1 router admin login, avoid 192.168.l.l typos, find your gateway, and fix common access problems.', label: 'Most searched router IP', h1: '192.168.1.1 router login', intro: 'Use this local address from your own router network. Type it into the browser address bar, not a search engine.', body: `
      <div class="action-row"><a class="button" href="http://192.168.1.1/">Open 192.168.1.1</a><a class="button secondary" href="${pageUrl('/find-router-ip/')}">Find my gateway</a></div><div class="notice"><strong>Correct address:</strong> <span class="ip-large">192.168.1.1</span>. Common typing mistakes include 192.168.l.l, 192.168.1.1. and 19216811.</div><h2>How to log in</h2><ol><li>Connect your device to the router’s Wi-Fi or Ethernet network.</li><li>Type <strong>192.168.1.1</strong> in the browser address bar.</li><li>Press Enter and wait for the router login screen.</li><li>Use the credentials printed on your router label or setup information.</li><li>After signing in, change the default admin password if the router still uses one.</li></ol><h2>If 192.168.1.1 does not open</h2><ul><li>Confirm that your device is connected to the correct router.</li><li>Find the Default Gateway shown by your device instead of guessing.</li><li>Temporarily check VPN or browser issues.</li><li>Do not factory-reset the router as the first step.</li></ul><div class="warning"><strong>Credential safety:</strong> RouterGuide never asks for or stores your router username or password. Default credentials vary by model and firmware.</div><h2>Private address, not a public website</h2><p>192.168.1.1 is normally a local network address. It works only when your device can reach the router that uses it. If your gateway is different, use the address shown by your device.</p><div class="action-row"><a class="button ghost" href="${pageUrl('/router-login-not-working/')}">Login is not working</a><a class="button secondary" href="${pageUrl('/factory-reset-router/')}">Read reset warning</a></div>`
  }
];

function ipCard(label, text, href){ return `<div class="card"><span class="ip-chip">${label}</span><p>${text}</p><a href="${pageUrl(href)}">View the guide →</a></div>`; }
function escapeHtml(value){ return value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function header(){ return `<header class="site-header"><nav class="nav" aria-label="Primary navigation"><a class="brand" href="${pageUrl('/')}" aria-label="RouterGuide home"><img src="${pageUrl('/assets/logo.svg')}" alt="RouterGuide" width="172" height="50"></a><button class="nav-toggle" aria-expanded="false" aria-controls="primary-links">Menu</button><div id="primary-links" class="nav-links"><a href="${pageUrl('/router-login/')}">Router Login</a><a href="${pageUrl('/ip/192-168-1-1/')}">192.168.1.1</a><a href="${pageUrl('/find-router-ip/')}">Find IP</a><a href="${pageUrl('/router-login-not-working/')}">Login Help</a></div></nav></header>`; }
function footer(){ return `<footer class="site-footer"><div class="footer-inner"><div><a class="brand" href="${pageUrl('/')}" aria-label="RouterGuide home"><img src="${pageUrl('/assets/logo.svg')}" alt="RouterGuide" width="172" height="50"></a><p>Simple, safety-first help for router IP addresses, admin access, and home-network problems.</p></div><div><strong>Start here</strong><p><a href="${pageUrl('/router-login/')}">Router login</a><br><a href="${pageUrl('/find-router-ip/')}">Find router IP</a><br><a href="${pageUrl('/router-login-not-working/')}">Login troubleshooting</a></p></div><div><strong>Phase 1 information</strong><p>More brand, model and policy pages are added only after each phase is reviewed.</p></div></div></footer>`; }
function searchBox(){ return `<div class="search-wrap"><form class="search-shell" id="site-search"><label class="sr-only" for="search-input">Search router help</label><input id="search-input" autocomplete="off" placeholder="Try 192.168.1.1 or router login problem"><button class="button" type="submit">Search</button></form><div id="search-results" class="search-results" aria-live="polite"></div></div>`; }
function layout(page){
  const hero = page.home ? `<section class="hero"><div class="hero-inner"><div><span class="eyebrow">${page.label}</span><h1>${page.h1}</h1><p>${page.intro}</p>${searchBox()}</div><div class="hero-art" aria-label="Illustration of a router connecting devices"><div class="network-card"><div class="router">LOCAL ROUTER</div><div class="nodes"><span class="node">⌂</span><span class="node">◎</span><span class="node">▣</span></div><div class="signal"></div><div style="text-align:center;color:#60708c;font-size:.9rem">Private network • clear next step</div></div></div></div></section>` : `<section class="page-hero"><div class="page-hero-inner"><div class="breadcrumbs"><a href="${pageUrl('/')}">Home</a> / Router help</div><span class="eyebrow">${page.label}</span><h1>${page.h1}</h1><p>${page.intro}</p></div></section>`;
  const main = page.home ? page.body : `<main class="content-layout"><article class="prose">${page.body}</article><aside class="side-card"><h3>Quick actions</h3><ul><li><a href="http://192.168.1.1/">Open 192.168.1.1</a></li><li><a href="${pageUrl('/find-router-ip/')}">Find your router IP</a></li><li><a href="${pageUrl('/router-login-not-working/')}">Fix login problems</a></li><li><a href="${pageUrl('/factory-reset-router/')}">Read reset warning</a></li></ul></aside></main>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${page.title}</title><meta name="description" content="${page.description}"><meta name="theme-color" content="#2f6fed"><link rel="canonical" href="${canonical(page.slug)}"><link rel="icon" href="${pageUrl('/assets/favicon.svg')}" type="image/svg+xml"><link rel="stylesheet" href="${pageUrl('/assets/style.css')}"><meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.description}"><meta property="og:url" content="${canonical(page.slug)}"><meta property="og:type" content="website"><script type="application/ld+json">${JSON.stringify({ '@context':'https://schema.org','@type':page.home?'WebSite':'WebPage',name:page.title,url:canonical(page.slug),description:page.description})}</script></head><body><a class="skip-link" href="#main">Skip to content</a>${header()}${hero}<div id="main">${main}</div>${footer()}<script src="${pageUrl('/assets/app.js')}" defer></script></body></html>`;
}

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, 'assets'), { recursive: true });
await mkdir(join(dist, 'assets'), { recursive: true });
for (const asset of ['style.css','logo.svg','favicon.svg']) await copyFile(join(root,'public/assets',asset), join(dist,'assets',asset));
const searchIndex = pages.map(p => ({ title:p.h1, description:p.description, path:pageUrl(p.slug), keywords:[p.h1, p.label, p.slug.replaceAll('/',' ').replaceAll('-',' ')] }));
const appJs = `(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const form = document.querySelector('#site-search');
  const input = document.querySelector('#search-input');
  const results = document.querySelector('#search-results');
  if (form && input && results) {
    let index = [];
    fetch('${pageUrl('/search-index.json')}').then(r => r.json()).then(x => { index = x; }).catch(() => {});
    const show = () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { results.style.display = 'none'; results.innerHTML = ''; return; }
      const hits = index.filter(item => (item.title + ' ' + item.description + ' ' + item.keywords.join(' ')).toLowerCase().includes(q)).slice(0, 6);
      results.innerHTML = hits.length ? hits.map(x => '<a href="' + x.path + '"><strong>' + x.title + '</strong><small>' + x.description + '</small></a>').join('') : '<div style="padding:14px;color:#60708c">No matching guide yet. Try a common router IP.</div>';
      results.style.display = 'block';
    };
    input.addEventListener('input', show);
    form.addEventListener('submit', e => { e.preventDefault(); const first = results.querySelector('a'); if (first) location.href = first.href; else show(); });
  }
})();`;
await writeFile(join(dist, 'assets/app.js'), appJs);
await writeFile(join(dist, 'search-index.json'), JSON.stringify(searchIndex, null, 2));
for (const page of pages) { const file = page.slug === '/' ? join(dist,'index.html') : join(dist,page.slug.replace(/^\//,'') ,'index.html'); await mkdir(dirname(file), {recursive:true}); await writeFile(file, layout(page)); }
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p=>`  <url><loc>${canonical(p.slug)}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(join(dist,'sitemap.xml'), sitemap);
await writeFile(join(dist,'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${canonical('/sitemap.xml')}\n`);
await writeFile(join(dist,'manus-routes.json'), JSON.stringify({routes:pages.map(p=>({path:pageUrl(p.slug),title:p.h1}))}, null, 2));
await writeFile(join(dist,'404.html'), layout({slug:'/404.html',title:'Page Not Found | RouterGuide',description:'The router guide page could not be found.',label:'Not found',h1:'That page is not here',intro:'Try a popular router login guide instead.',body:`<main class="content-layout"><article class="prose"><h2>Try a common guide</h2><p><a href="${pageUrl('/router-login/')}">Router admin login</a> or <a href="${pageUrl('/find-router-ip/')}">find your router IP</a>.</p></article></main>`}));
console.log(`Built ${pages.length} pages at ${dist}`);

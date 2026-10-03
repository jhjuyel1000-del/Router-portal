# Router Portal — Phase 5–8 Audit ও Deployment Report

তারিখ: ৪ অক্টোবর ২০২৬

## ১. চূড়ান্ত অবস্থা

- মোট page: **১০৬টি**
- নতুন page: **৬টি exact-model guide**
- XML sitemap URL: **১০৬টি**
- TXT sitemap URL: **১০৬টি**
- XML sitemap-এ duplicate URL: **নেই**
- Robots file: **সঠিকভাবে sitemap.xml ও sitemap.txt নির্দেশ করছে**
- Google verification tag: **homepage-এ আছে**
- Cloudflare Pages production deployment: **সফল**
- Custom domain: **https://routerportals.xyz**
- GitHub-এর সর্বশেষ commit: **dd82993**

## ২. Duplicate audit-এর সিদ্ধান্ত

আগের ১০০টি page পরীক্ষা করে দেখা হয়েছে। IP, brand, login help, tools, security, guide এবং policy cluster-এর মধ্যে একই search intent পুনরায় page বানানোর মতো gap পাওয়া যায়নি। তাই অকারণে একই বিষয়ের page যোগ করা হয়নি। এতে thin content, keyword cannibalization এবং duplicate intent-এর ঝুঁকি কমেছে।

## ৩. নতুন ছয়টি model guide

নিচের page-গুলো আলাদা model-specific search intent পূরণ করে:

1. `/model/tp-link/archer-c6/`
2. `/model/netgear/r7000/`
3. `/model/d-link/dir-615/`
4. `/model/tenda/ac10/`
5. `/model/huawei/b535/`
6. `/model/asus/rt-ac68u/`

প্রতিটি page-এ আছে:

- exact model পরিচয় যাচাই
- সম্ভাব্য local address, তবে universal দাবি নয়
- বর্তমান Default Gateway যাচাই
- নিরাপদ login ধাপ
- admin password ও Wi-Fi password-এর পার্থক্য
- login-এর পর নিরাপত্তা checklist
- login না খুললে troubleshooting
- factory reset-এর সতর্কতা
- brand, IP, gateway এবং security page-এর internal link

## ৪. SEO ও technical verification

Local production build-এ যাচাই করা হয়েছে:

- `npm ci` সফল
- `npm run build` সফল
- `node --check scripts/build.mjs` সফল
- `node --check scripts/model-pages.mjs` সফল
- ১০৬টি HTML page তৈরি
- ১০৬টি unique sitemap URL তৈরি
- sitemap.txt-এ ১০৬টি URL
- robots.txt-এ XML ও TXT দুই sitemap-ই আছে
- homepage-এ Google verification tag আছে

## ৫. Build system-এর একটি সমস্যা ঠিক করা হয়েছে

GitHub Actions workflow-এ dependency install ধাপ ছিল না। ফলে পরিষ্কার checkout-এ `qrcode-generator` না পাওয়ার সম্ভাবনা ছিল। এখন workflow-এ lockfile-ভিত্তিক `npm ci` যোগ করা হয়েছে। এতে fallback build reproducible হয়েছে।

GitHub Actions workflow বর্তমানে GitHub Pages enable না থাকায় `configure-pages` ধাপে ব্যর্থ হতে পারে। এটি মূল hosting-এর সমস্যা নয়, কারণ Cloudflare Pages আলাদা ভাবে GitHub repository থেকে সফলভাবে build ও deploy করছে।

## ৬. Cloudflare production যাচাই

Cloudflare Pages project-এর production build:

- source: GitHub `jhjuyel1000-del/Router-portal`
- branch: `main`
- build command: `npm run build`
- output directory: `dist`
- সর্বশেষ production commit: `dd82993`
- build stage: সফল
- deploy stage: সফল
- custom domain alias: `routerportals.xyz`

Live যাচাই:

- `https://routerportals.xyz/sitemap.xml` — HTTP 200
- `https://routerportals.xyz/model/tp-link/archer-c6/` — HTTP 200
- `https://routerportals.xyz/model/huawei/b535/` — HTTP 200

## ৭. Google Search Console-এর জন্য পরবর্তী কাজ

Deployment সফল হওয়ার পর Search Console-এ একবার sitemap refresh করা ভালো:

- `https://routerportals.xyz/sitemap.xml`
- `https://routerportals.xyz/sitemap.txt`

নতুন ৬টি page দ্রুত আবিষ্কারের জন্য প্রতিটি URL-এর URL Inspection ব্যবহার করে indexing request করা যেতে পারে। একসঙ্গে অস্বাভাবিক সংখ্যক request না করে ধাপে ধাপে করা নিরাপদ। Index হওয়া বা ranking-এর নির্দিষ্ট সময়ের নিশ্চয়তা কেউ দিতে পারে না; sitemap, internal link, crawlability এবং original helpful content-এর মাধ্যমে সম্ভাবনা বাড়ানো হয়েছে।

## ৮. বর্তমান সিদ্ধান্ত

Phase 5–8-এ এখনই আরও অসংখ্য page যোগ করা হচ্ছে না, কারণ আগের ১০০টি page-এর সঙ্গে অনেক topic overlap তৈরি হতো। বর্তমান ৬টি model page হলো প্রকৃত missing intent-এর জন্য যুক্ত page। পরবর্তী উন্নতি page সংখ্যা বাড়ানো নয়; বরং Search Console data দেখে যেসব page-এ impression আছে কিন্তু click কম, সেগুলোর title, introduction, internal link এবং FAQ উন্নত করা।

# Router Portal — দ্বিতীয় Version পরিকল্পনা

## লক্ষ্য

দ্বিতীয় version-এর উদ্দেশ্য শুধু আরও page তৈরি করা নয়। লক্ষ্য হবে Router Portal-কে এমন একটি নিরাপদ, দ্রুত ও ব্যবহারযোগ্য router-help hub বানানো যেখানে visitor তার router-এর IP খুঁজবে, login সমস্যা সমাধান করবে, model-specific নির্দেশনা পাবে এবং প্রয়োজনে আবার ফিরে আসবে। নতুন page কেবল আলাদা search intent থাকলেই তৈরি হবে; একই বিষয়ের page বাড়ানো হবে না।

## বর্তমান ভিত্তি

বর্তমানে site-এ ১০৬টি static page, XML ও TXT sitemap, robots.txt, custom domain, brand/IP/login cluster, internal search এবং ছয়টি model-specific guide আছে। দ্বিতীয় version এই static architecture-এর ওপরেই তৈরি হবে। প্রথম পর্যায়ে D1 database দরকার নেই; database না ব্যবহার করলে site দ্রুত, cache-friendly এবং maintenance সহজ থাকবে।

## নকশার দিকনির্দেশনা

দ্বিতীয় version-এর নকশা হবে “calm network control room” ধরনের। ব্যবহারকারীকে technical jargon দিয়ে ভয় দেখানো হবে না; প্রতিটি page-এ প্রথমে সরাসরি উত্তর, তারপর নিরাপদ ধাপ, তারপর বিস্তারিত ব্যাখ্যা থাকবে। রঙে বর্তমান পরিষ্কার router-themed palette রাখা হবে। বড় action button, mobile-friendly card, progress indicator এবং সতর্কতামূলক notice হবে প্রধান visual pattern।

## অগ্রাধিকার ০: ভিত্তি শক্ত করা

প্রথমে existing ১০৬টি page-এর Search Console performance দেখে কাজ করতে হবে। যেসব page-এ impression আছে কিন্তু click কম, সেগুলোর title, description, opening answer, FAQ এবং internal link উন্নত করা হবে। যেসব page-এ click আছে কিন্তু user দ্রুত চলে যায়, সেগুলোতে পরিষ্কার next-step card, related guide এবং troubleshooting flow যোগ করা হবে।

প্রতিটি public page-এ route-specific title, description, canonical, Open Graph metadata, social preview image, breadcrumb এবং প্রয়োজন অনুযায়ী FAQ বা HowTo structured data যোগ করা হবে। 404 page-কে সত্যিকারের 404 status দিতে হবে এবং sitemap-এ কেবল indexable page রাখা হবে।

## অগ্রাধিকার ১: visitor-কে বারবার ফিরিয়ে আনার tools

### ১. Router IP Finder

Visitor operating system বেছে নিয়ে Windows, Android, iPhone এবং macOS-এ Default Gateway বের করার ধাপ পাবে। কোনো private IP, password বা network data server-এ পাঠানো হবে না।

### ২. Local Router Address Checker

Visitor একটি address লিখলে browser-side validation দেখাবে address-টি valid IPv4 কি না, private range-এর মধ্যে পড়ে কি না, এবং address bar-এ কীভাবে খুলতে হবে। এটি কোনো remote port scan করবে না এবং কোনো credential চাইবে না।

### ৩. Subnet ও Private IP Calculator

Network address, usable host range, subnet mask এবং CIDR বোঝার জন্য সহজ calculator থাকবে। এটি advanced user-দের জন্য utility value তৈরি করবে এবং router IP cluster-এর সঙ্গে internal link পাবে।

### ৪. Wi-Fi Security Checklist

WPA2/WPA3, administrator password, firmware, remote management, WPS, guest network, UPnP এবং firmware backup নিয়ে interactive checklist থাকবে। সম্পূর্ণ কাজ browser-এ হবে; visitor-এর router credential সংরক্ষণ করা হবে না।

### ৫. Router Reset Decision Helper

Reset করার আগে কী কী হারাতে পারে, ISP তথ্য কোথায় লাগতে পারে, backup কখন নিতে হবে—এগুলো নিয়ে yes/no decision flow থাকবে। লক্ষ্য হবে ভুল করে factory reset কমানো।

### ৬. Browser-side Password Strength Helper

শুধু locally typed sample-এর শক্তি যাচাই করবে। কোনো password সংরক্ষণ বা upload করবে না। Page-এ স্পষ্ট privacy notice থাকবে।

## অগ্রাধিকার ২: নতুন page cluster

প্রথম batch-এ সর্বোচ্চ ১৮–২৪টি নতুন page তৈরি করা হবে। একসঙ্গে শত page নয়; প্রত্যেক page-এর আলাদা keyword ও user intent থাকতে হবে।

### Router setup cluster — ৬টি page

1. নতুন router প্রথমবার setup করার নিরাপদ ধাপ
2. ISP modem ও router আলাদা হলে কীভাবে সংযোগ করতে হয়
3. Ethernet দিয়ে router admin panel খোলার guide
4. Wi-Fi password ভুলে গেলে নিরাপদ recovery options
5. router firmware update-এর আগে checklist
6. router বদলানোর সময় পুরোনো settings কীভাবে নথিভুক্ত করতে হয়

### Troubleshooting cluster — ৬টি page

1. Wi-Fi connected কিন্তু internet নেই
2. router login page আসে কিন্তু password গ্রহণ করে না
3. 192.168.1.1 কাজ না করলে সম্পূর্ণ decision tree
4. router admin page মোবাইলে না খুললে করণীয়
5. DNS, gateway ও IP conflict সহজ ভাষায়
6. ISP-এর কারণে router admin access সীমিত হলে কী বোঝায়

### Security cluster — ৪টি page

1. router administrator password পরিবর্তনের নিরাপদ নিয়ম
2. remote administration বন্ধ করার guide
3. guest network কখন ব্যবহার করবেন
4. router compromise-এর সাধারণ লক্ষণ ও নিরাপদ পদক্ষেপ

### Model ও ISP cluster — ৬–৮টি page

Search Console, keyword data এবং বাস্তব impression দেখে কেবল high-demand model page তৈরি হবে। সম্ভাব্য বিষয় হতে পারে আরও জনপ্রিয় router model, 4G/5G gateway এবং ISP-branded gateway। Model page-এ কখনও universal username/password দাবি করা হবে না; hardware revision ও firmware পার্থক্য স্পষ্ট থাকবে।

## অগ্রাধিকার ৩: interface feature

### Guided search

বর্তমান search box-এর পাশাপাশি “আমি কী করতে চাই?” ভিত্তিক option থাকবে:

- Login করতে চাই
- Router IP খুঁজতে চাই
- Password পরিবর্তন করতে চাই
- Wi-Fi কাজ করছে না
- Router reset করার আগে জানতে চাই

### Router profile bookmark

Browser local storage ব্যবহার করে visitor পছন্দের model বা IP guide bookmark করতে পারবে। কোনো account বা server-side profile থাকবে না।

### Recently viewed guide

সর্বশেষ দেখা ৩–৫টি guide browser-এর local storage-এ দেখানো হবে। এটি privacy-friendly হবে এবং clear button থাকবে।

### Progress indicator

দীর্ঘ guide-এ “ধাপ ১ of ৫” ধরনের indicator থাকবে, যাতে mobile visitor বুঝতে পারে কতটুকু বাকি।

### Print ও share view

প্রতিটি গুরুত্বপূর্ণ guide-এ print-friendly view এবং পরিষ্কার share button থাকবে। Share URL canonical route-এই থাকবে; tracking-heavy URL তৈরি করা হবে না।

## SEO পরিকল্পনা

দ্বিতীয় version-এ page সংখ্যা নয়, topical coverage ও internal link equity অগ্রাধিকার পাবে। Home page থেকে IP, brand, tools, login help এবং security cluster-এ পরিষ্কার link থাকবে। Brand page থেকে সংশ্লিষ্ট model page, IP page থেকে troubleshooting page এবং tool page থেকে guide page-এ দুইমুখী internal link থাকবে।

প্রতিটি নতুন page-এর জন্য আলাদা keyword intent, title, meta description, H1, opening answer, FAQ এবং related links নির্ধারণ করা হবে। একই keyword-এ একাধিক page তৈরি করা হবে না। Sitemap build script থেকেই স্বয়ংক্রিয়ভাবে XML ও TXT দুটিতে নতুন URL যোগ হবে।

প্রয়োজন অনুযায়ী JSON-LD ব্যবহার করা হবে, তবে কেবল page-এর দৃশ্যমান তথ্যের সঙ্গে মিল থাকা FAQ, HowTo, Breadcrumb বা WebSite data দেওয়া হবে। অদৃশ্য বা বানানো review, rating, author বা organization claim যোগ করা হবে না।

## Trust ও safety

সব tool client-side হবে, যদি আলাদা server দরকার না হয়। Site কখনো router password, Wi-Fi key, MAC address, serial বা private screenshot চাইবে না। “নিজের বা অনুমোদিত network-এ ব্যবহার করুন” notice প্রতিটি sensitive guide-এ থাকবে। Reset, firmware update এবং remote management নিয়ে সতর্কতা আলাদা callout হিসেবে থাকবে।

## কর্মপর্যায়

### Version 2A — ভিত্তি ও নিরাপত্তা

প্রথমে Search Console data অনুযায়ী title ও internal link refresh, Open Graph, breadcrumb, structured data, 404 status এবং accessibility উন্নত করা হবে। তারপর Router IP Finder, address checker, security checklist এবং reset decision helper তৈরি হবে।

### Version 2B — troubleshooting hub

এরপর guided search, login decision tree, Wi-Fi troubleshooting, DNS/gateway explanation এবং print/share view তৈরি হবে। এই পর্যায়ে নতুন page-এর সঙ্গে existing page-এর overlap আবার পরীক্ষা করা হবে।

### Version 2C — model ও retention

শেষে data-supported model guide, local bookmark, recently viewed guide, subnet calculator এবং model-specific comparison card যুক্ত হবে। পর্যাপ্ত search demand না থাকলে সম্ভাব্য model page তৈরি করা হবে না।

## যা এখনই করা হবে না

- D1 database, login account বা visitor profile
- router credential সংগ্রহকারী কোনো form
- remote router control
- port scanning বা security scanning service
- অপ্রমাণিত universal username/password list
- শুধু keyword বাড়ানোর জন্য একই বিষয়ের অসংখ্য page
- ভারী third-party script, auto-play video বা intrusive বিজ্ঞাপন

## সফলতার মাপকাঠি

দ্বিতীয় version সফল ধরা হবে যখন নতুন tool-গুলো mobile ও desktop-এ দ্রুত কাজ করবে, visitor কোনো sensitive data না দিয়েই কাজ শেষ করতে পারবে, নতুন page-গুলোর আলাদা search intent থাকবে, existing page-এর click-through rate উন্নত হবে, sitemap ও canonical সঠিক থাকবে এবং Search Console-এ impressions থেকে clicks-এর উন্নতি দেখা যাবে।

## চূড়ান্ত সুপারিশ

প্রথমে ১৮–২৪টি page একসঙ্গে না বানিয়ে Version 2A-এর চারটি tool ও technical SEO improvement দিয়ে শুরু করা উচিত। এগুলো ব্যবহারকারীর বাস্তব সমস্যা সমাধান করবে, existing ১০৬টি page-এর সঙ্গে শক্তিশালী internal link তৈরি করবে এবং নতুন content যোগ করার আগে site-এর utility value বাড়াবে।

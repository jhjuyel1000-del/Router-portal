# Router Portal — ৫০টি Pilot Page Report

তারিখ: ৫ অক্টোবর ২০২৬

## Pilot-এর উদ্দেশ্য

এই pilot-এ ৫০টি page যোগ করা হয়েছে। লক্ষ্য ছিল keyword বা IP address বদলে thin page বানানো নয়; বরং **আলাদা user intent, official source, safety limit, internal link এবং model/OS/ISP scope**-সহ indexable content তৈরি করা।

## Page family ও sample

| Family | Sample page | কী প্রশ্নের উত্তর দেয় |
|---|---|---|
| Network troubleshooting | [DHCP Server Not Responding](https://routerportals.xyz/network/dhcp-server-not-responding/) | DHCP ব্যর্থতা client, VLAN, router নাকি upstream—কীভাবে আলাদা করবেন |
| Wi-Fi compatibility | [Wi-Fi 6E 6 GHz Network Not Visible](https://routerportals.xyz/wifi/6ghz-network-not-visible/) | Router, client, OS, WPA3 ও region-এর কোন শর্ত না থাকলে 6 GHz দেখা যায় না |
| Device-specific | [Windows 11 Router IP and Gateway](https://routerportals.xyz/device/router-ip-gateway-windows-11/) | Windows 11-এ active adapter-এর Default Gateway কোথায় পাওয়া যায় |
| ISP gateway | [Xfinity Gateway Bridge Mode](https://routerportals.xyz/isp/xfinity-bridge-mode/) | Bridge mode চালু করলে routing, Wi-Fi ও provider feature-এ কী পরিবর্তন হতে পারে |
| Exact model | [TP-Link Deco X55](https://routerportals.xyz/models/tp-link-deco-x55/) | X55 model, hardware revision, router/AP mode, node setup ও official support |

## সম্পূর্ণ pilot composition

- **24টি** network, Wi-Fi ও security troubleshooting/decision page
- **8টি** device/OS/console gateway page
- **8টি** ISP gateway, bridge, fiber ও fixed-wireless page
- **10টি** verified router/mesh/modem/5G model page

## প্রতিটি page-এ যা আছে

- আলাদা title, H1 ও meta description
- Self-referencing canonical URL
- `Article` JSON-LD ও BreadcrumbList
- Crawler-visible HTML; JavaScript ছাড়াই মূল content দেখা যায়
- Quick answer
- Step-by-step workflow
- Decision table
- Limits and verification section
- Official source links
- Router Portal-এর related internal links
- Safety warning: credential, private IP, MAC, serial বা screenshot পাঠাতে নিষেধ
- Model, firmware, OS, ISP এবং region-specific limitation

## Validation result

- Build output: **৫৮৮টি total static page**
- Pilot addition: **৫০টি নতুন route**
- প্রতিটি pilot page-এ H1: **হ্যাঁ**
- প্রতিটি pilot page-এ description: **হ্যাঁ**
- প্রতিটি pilot page-এ canonical: **হ্যাঁ**
- Duplicate pilot title: **০**
- ১,০০০ characters-এর কম body: **০**
- Pilot body text range: **প্রায় ২,৫৫৭–৩,০২২ characters**
- Sitemap ও route manifest নতুন routes-সহ rebuild হয়েছে
- `robots.txt` canonical domain-এ `Allow: /` ও sitemap reference রাখে

## গুরুত্বপূর্ণ সীমা

এই pilot-এর model/ISP page-গুলো current official documentation-এর ওপর ভিত্তি করে তৈরি, কিন্তু firmware, provider UI, carrier policy, OS menu, hardware revision এবং country rules পরিবর্তন হতে পারে। তাই এগুলোকে live database বা চিরস্থায়ী compatibility guarantee হিসেবে লেখা হয়নি। পরের ধাপে update date, reviewer এবং source-refresh workflow যোগ করা উচিত।

## পরবর্তী ধাপ

Pilot live quality, Search Console indexing এবং user query দেখে পরের batch বাছাই করা উচিত। একই intent-এর duplicate page তৈরি না করে source-backed, reviewed page-ই কেবল পরবর্তী batch-এ যোগ করা হবে।

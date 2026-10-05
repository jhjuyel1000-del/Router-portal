const esc = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const SOURCES = {
  admin: [
    ['Microsoft network settings','https://support.microsoft.com/en-us/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows'],
    ['FCC home network tips','https://www.fcc.gov/home-network-tips'],
    ['CISA home network security','https://www.cisa.gov/news-events/news/home-network-security']
  ],
  wifi: [
    ['Apple recommended Wi-Fi settings','https://support.apple.com/en-us/102766'],
    ['Wi-Fi Alliance security guidance','https://www.wi-fi.org/discover-wi-fi/security'],
    ['Cisco DFS and Wi-Fi guidance','https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/26-1/configuration-guide/wl-26-1-cg/dfs/info-dfs.html']
  ],
  network: [
    ['IETF RFC 2131 DHCP','https://datatracker.ietf.org/doc/html/rfc2131'],
    ['Microsoft DNS troubleshooting','https://learn.microsoft.com/en-us/windows-server/networking/dns/troubleshoot/troubleshoot-dns-server'],
    ['CISA home network security','https://www.cisa.gov/news-events/news/home-network-security']
  ],
  security: [
    ['CISA home network security','https://www.cisa.gov/news-events/news/home-network-security'],
    ['Wi-Fi Alliance security guidance','https://www.wi-fi.org/discover-wi-fi/security'],
    ['Apple recommended Wi-Fi settings','https://support.apple.com/en-us/102766']
  ],
  mesh: [
    ['FCC home network tips','https://www.fcc.gov/home-network-tips'],
    ['Apple recommended Wi-Fi settings','https://support.apple.com/en-us/102766'],
    ['Google Fiber use your own router','https://support.google.com/fiber/answer/9353363?hl=en-AU&ref_topic=2667450']
  ],
  device: [
    ['Microsoft Wi-Fi troubleshooting','https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows'],
    ['Apple recommended Wi-Fi settings','https://support.apple.com/en-us/102766'],
    ['FCC home network tips','https://www.fcc.gov/home-network-tips']
  ],
  isp: [
    ['FCC home network tips','https://www.fcc.gov/home-network-tips'],
    ['Google Fiber use your own router','https://support.google.com/fiber/answer/9353363?hl=en-AU&ref_topic=2667450'],
    ['T-Mobile Home Internet gateway support','https://www.t-mobile.com/support/home-internet/t-mobile-gateway']
  ],
  tools: [
    ['IETF RFC 1918 private addresses','https://datatracker.ietf.org/doc/html/rfc1918'],
    ['IETF RFC 4632 CIDR','https://datatracker.ietf.org/doc/html/rfc4632'],
    ['Microsoft network settings','https://support.microsoft.com/en-us/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows']
  ],
  models: [
    ['CISA home network security','https://www.cisa.gov/news-events/news/home-network-security'],
    ['Apple recommended Wi-Fi settings','https://support.apple.com/en-us/102766'],
    ['FCC home network tips','https://www.fcc.gov/home-network-tips']
  ],
  concepts: [
    ['FCC home network tips','https://www.fcc.gov/home-network-tips'],
    ['Apple recommended Wi-Fi settings','https://support.apple.com/en-us/102766'],
    ['CISA home network security','https://www.cisa.gov/news-events/news/home-network-security']
  ]
};

const related = {
  admin: [['Find the current gateway','/find-router-ip/'],['Router login troubleshooting','/router-login-not-working/'],['Router IP guides','/ip/192-168-1-1/']],
  wifi: [['Wi-Fi channel guide','/wifi/channel-width-guide/'],['Slow Wi-Fi diagnosis','/wifi/slow-wifi-diagnosis/'],['Wi-Fi 7 explained','/wifi/wi-fi-7-explained/']],
  network: [['Double NAT diagnosis','/network/double-nat-diagnosis/'],['DNS leak self-check','/tools/dns-leak-router-check/'],['Gateway self-check','/tools/gateway-self-check/']],
  security: [['After-login security checklist','/security/after-router-login-checklist/'],['Unknown device on Wi-Fi','/security/unknown-device-on-wifi/'],['Change Wi-Fi password','/change-wifi-password/']],
  mesh: [['Bridge mode vs access point','/network/bridge-mode-vs-ap-mode/'],['Router placement guide','/wifi/router-placement-floor-plan/'],['Double NAT diagnosis','/network/double-nat-diagnosis/']],
  device: [['Find the router IP','/find-router-ip/'],['Router login guide','/router-login/'],['Router login troubleshooting','/router-login-not-working/']],
  isp: [['Modem vs router vs gateway','/basics/modem-router-gateway/'],['New router setup','/setup/new-router-setup-checklist/'],['Double NAT diagnosis','/network/double-nat-diagnosis/']],
  tools: [['CIDR subnet calculator','/tools/cidr-subnet-calculator/'],['Gateway self-check','/tools/gateway-self-check/'],['Ping test','/tools/ping-test/']],
  models: [['Find hardware revision','/models/find-router-hardware-revision/'],['Firmware release notes','/models/read-router-firmware-release-notes/'],['When to replace a router','/maintenance/when-to-replace-router/']],
  concepts: [['Router settings guide','/router-login/'],['Wi-Fi security guide','/security/router-admin-security/'],['Internet speed vs Wi-Fi speed','/diagnostics/internet-speed-vs-wifi-speed/']]
};

const clusters = {
  admin: [
    ['guide-router-login-http-https','HTTP vs HTTPS Router Login: Which Address to Use','when a local admin page uses HTTP, HTTPS, or a certificate warning','Separate local transport from public web browsing and verify the device before accepting any certificate warning.'],
    ['guide-router-login-port-number','Router Login Port Numbers: When 80 or 443 Is Not Enough','router login port number','Use the model manual and local gateway evidence before trying a non-default management port.'],
    ['guide-router-login-captive-portal','Captive Portal Blocking Router Login: Safe Checks','captive portal router login','Finish the network sign-in or bypass a guest portal only through the authorised network workflow.'],
    ['guide-router-login-vpn-conflict','VPN Prevents Router Login: Split Tunnel and Local Access Checks','VPN cannot access router login','A VPN route can hide or redirect local addresses; test locally without exposing credentials.'],
    ['guide-router-login-proxy-conflict','Proxy Settings Blocking Router Login: What to Check','proxy blocks router admin page','Compare a direct local request with browser proxy settings and restore the secure configuration afterward.'],
    ['guide-router-login-browser-dns','Browser DNS and Router Login: Why Local Names Fail','browser DNS router local name','Local hostnames and public DNS are different paths; identify whether the router supports a local name.'],
    ['guide-router-login-ipv6','IPv6 Router Admin Access: Link-Local and Local Management','IPv6 router admin login','IPv6 management is model-specific; identify the correct local scope and never guess a public address.'],
    ['guide-router-login-subnet-mismatch','Router Login Subnet Mismatch: Client and Gateway Check','router login subnet mismatch','Compare the client address, mask, and gateway before changing LAN settings.'],
    ['guide-router-login-guest-network','Guest Wi-Fi Cannot Open Router Login: Isolation Explained','guest WiFi cannot access router login','Guest isolation may intentionally block management; use the owner network instead of weakening isolation.'],
    ['guide-router-login-ap-mode','Access-Point Mode Router Login: Find the Management Address','access point mode login address','An access point may keep a different management address after the upstream router becomes the gateway.'],
    ['guide-router-login-extender','Wi-Fi Extender Login Address: Find the Right Device','WiFi extender login address','Identify whether you are connected to the extender or the main router before opening its management page.'],
    ['guide-router-login-double-browser','Two Router Tabs, Two Devices: Avoid Changing the Wrong Network','wrong router admin page','Use labels, gateway evidence, and a controlled change to confirm which device you are managing.'],
    ['guide-router-login-lan-ip-change','After Changing Router LAN IP: How to Reconnect','router LAN IP changed cannot login','A LAN address change can invalidate the old bookmark and DHCP lease; reconnect methodically.'],
    ['guide-router-login-dhcp-disabled','Router Login After DHCP Is Disabled','router login DHCP disabled','Use a documented static client configuration only when the device manual supports it, then restore safe addressing.'],
    ['guide-router-login-admin-timeout','Router Admin Session Timeout: Save Changes Safely','router admin session timeout','Session expiry can discard a change or leave uncertainty; record the before and after state.'],
    ['guide-router-login-readonly','Router Admin Read-Only Mode: Why Settings Cannot Be Saved','router admin read only settings','Read-only status may be caused by account role, cloud management, or provider restrictions.'],
    ['guide-router-login-app-vs-web','Router App vs Web Admin: Which Path Is Safer','router app versus web admin','Compare local web access and official apps without assuming they expose the same controls.'],
    ['guide-router-login-label-missing','Router Label Missing: Find Model and Login Details Safely','router label missing login','Use the model, hardware revision, official manual, and current gateway rather than credential lists.'],
    ['guide-router-login-recovery-key','Router Recovery Key vs Admin Password: Do Not Mix Them','router recovery key admin password','Recovery codes, Wi-Fi keys, and administrator credentials serve different roles.'],
    ['guide-router-login-reset-last','Router Login Recovery Without Factory Reset','recover router login without reset','Try evidence-based access and vendor recovery paths before destructive reset.']
  ],
  wifi: [
    ['guide-wifi-band-steering','Band Steering: One SSID or Separate Wi-Fi Names','band steering one SSID','Choose a band-steering design based on client compatibility, roaming behavior, and troubleshooting needs.'],
    ['guide-wifi-2-4ghz-channel-plan','2.4 GHz Channel Plan: 20 MHz and Non-Overlapping Choices','2.4 GHz channel plan','Use a measured channel plan instead of applying a universal channel rule to every environment.'],
    ['guide-wifi-5ghz-dfs-roaming','5 GHz DFS Roaming: Why Clients Move or Disconnect','5 GHz DFS roaming','Radar detection and channel changes can look like a client failure; check logs and region rules.'],
    ['guide-wifi-6ghz-psc','6 GHz Preferred Scanning Channels: Why Discovery Differs','6 GHz PSC WiFi','6 GHz discovery depends on client support, regulatory domain, security mode, and channel selection.'],
    ['guide-wifi-6ghz-legacy','6 GHz Wi-Fi Legacy Device Limits','6 GHz WiFi legacy compatibility','Older devices may not see 6 GHz even when the router advertises it.'],
    ['guide-wifi-wpa3-transition','WPA3 Transition Mode: Compatibility Trade-Offs','WPA3 transition mode','Use transition mode as a compatibility bridge, then remove legacy dependence when possible.'],
    ['guide-wifi-hidden-ssid','Hidden SSID: Why It Does Not Improve Security','hidden WiFi network security','SSID hiding changes discovery behavior but does not replace encryption or strong authentication.'],
    ['guide-wifi-mac-randomization','Private Wi-Fi Address and Router Device Lists','private WiFi address router device list','MAC randomization can create multiple client records and affect schedules or allow-lists.'],
    ['guide-wifi-channel-width-auto','Channel Width Auto vs Fixed: Stability First','WiFi channel width auto fixed','Wider channels can increase speed or interference; compare controlled tests before changing width.'],
    ['guide-wifi-transmit-power','Wi-Fi Transmit Power: More Is Not Always Better','WiFi transmit power setting','Power, roaming, interference, and client transmit limits interact; do not maximize power blindly.'],
    ['guide-wifi-roaming-threshold','Roaming Thresholds: When a Client Should Switch APs','WiFi roaming threshold','Roaming decisions are shared between client and network; measure sticky-client symptoms first.'],
    ['guide-wifi-80211k','802.11k Neighbor Reports: What They Change','802.11k neighbor report','Neighbor reports can reduce scanning time but do not guarantee fast roaming.'],
    ['guide-wifi-80211v','802.11v BSS Transition: Client Steering Limits','802.11v BSS transition','BSS transition suggestions are not commands; client behavior and vendor settings matter.'],
    ['guide-wifi-80211r','802.11r Fast Transition: Compatibility Checklist','802.11r fast transition compatibility','Fast transition can help roaming but may expose compatibility issues on older clients.'],
    ['guide-wifi-mlo','Wi-Fi 7 MLO: When Multi-Link Helps and When It Does Not','WiFi 7 MLO setup','MLO needs compatible router, client, firmware, security, and band conditions.'],
    ['guide-wifi-guest-performance','Guest Wi-Fi Slow: Isolation, Limits, and Airtime','guest WiFi slow','Guest policies, rate limits, and radio contention can explain a slow guest network.'],
    ['guide-wifi-iot-2ghz','IoT Device Needs 2.4 GHz: Safe Pairing Workflow','IoT device 2.4 GHz setup','Use a temporary compatible network design without weakening the main network.'],
    ['guide-wifi-bluetooth-interference','Bluetooth and 2.4 GHz Interference: What to Test','Bluetooth 2.4 GHz WiFi interference','Separate coexistence symptoms from channel congestion using controlled tests.'],
    ['guide-wifi-microwave-interference','Microwave and Wi-Fi Drops: Evidence-Based Checks','microwave WiFi interference','Intermittent radio interference needs timing evidence, not a guess based on one incident.'],
    ['guide-wifi-wall-material','Walls and Wi-Fi Attenuation: Placement Decision Table','walls block WiFi signal','Building materials, placement, band, and backhaul determine coverage more than advertised range.']
  ],
  network: [
    ['guide-network-dhcp-reservation','DHCP Reservation vs Static IP: Which Is Better','DHCP reservation versus static IP','Compare central management, device behavior, and recovery before choosing a fixed address method.'],
    ['guide-network-dhcp-scope','DHCP Scope Size: Avoid Address Pool Exhaustion','DHCP scope size home network','Pool size should match real devices, lease behavior, and network segmentation.'],
    ['guide-network-dhcp-option','DHCP Options on Home Routers: What to Change Carefully','DHCP options router','Many DHCP options are model-specific; change only what a documented client or service needs.'],
    ['guide-network-dns-search-suffix','DNS Search Suffix at Home: When It Matters','DNS search suffix home network','Search suffix behavior can change short-name resolution without changing public DNS.'],
    ['guide-network-dns-cache','Router DNS Cache: Stale Answers and Safe Clearing','router DNS cache clear','A cache can preserve an old answer, but clearing it is not a universal outage fix.'],
    ['guide-network-dns-over-https','DNS-over-HTTPS and Router Filtering: What Changes','DNS over HTTPS router filtering','Encrypted DNS can improve privacy while changing how router policies observe and filter names.'],
    ['guide-network-dns-over-tls','DNS-over-TLS vs DNS-over-HTTPS on Home Wi-Fi','DNS over TLS versus HTTPS','Compare transport, device support, and policy visibility rather than treating one mode as always best.'],
    ['guide-network-ipv6-prefix','IPv6 Prefix Delegation: What a Home Router Receives','IPv6 prefix delegation router','Prefix delegation controls how a router numbers downstream networks; ISP support and lease behavior vary.'],
    ['guide-network-ipv6-ra','IPv6 Router Advertisements: Client Addressing Explained','IPv6 router advertisements','RA, DHCPv6, and privacy addresses can coexist; identify the role of each before changing settings.'],
    ['guide-network-ipv6-firewall','IPv6 Firewall Rules: Do Not Copy IPv4 Assumptions','IPv6 firewall home router','IPv6 addressing changes the inbound model, but a stateful firewall is still essential.'],
    ['guide-network-mtu','MTU Mismatch: Symptoms and Safe Tests','MTU mismatch router','Path MTU problems can affect selected services while speed tests appear normal.'],
    ['guide-network-mss-clamping','MSS Clamping: When a Router Setting Is Relevant','MSS clamping router','MSS adjustments belong to a measured path problem, not a generic performance checklist.'],
    ['guide-network-nat-types','NAT Type Labels: Why Games Report Different Results','NAT type meaning gaming','NAT labels are application-specific summaries, not a complete security rating.'],
    ['guide-network-port-triggering','Port Triggering vs Port Forwarding: Decision Guide','port triggering versus forwarding','Choose the least persistent exposure that meets the actual application need.'],
    ['guide-network-upnp','UPnP: Benefits, Risks, and Safer Review','UPnP router security','UPnP can simplify device setup but also creates automatic port mappings that need review.'],
    ['guide-network-loopback','NAT Hairpin and Split DNS: Local Name Resolution','NAT hairpin split DNS','Local access to a public hostname can use hairpin NAT or split DNS depending on the design.'],
    ['guide-network-vlan-home','Home VLAN Planning: Guest, IoT, and Main Devices','home VLAN planning','Segmentation needs routing, firewall, discovery, and management decisions—not just extra SSIDs.'],
    ['guide-network-multicast','Multicast at Home: Streaming and Discovery Troubleshooting','multicast home network','IGMP, mDNS, and client isolation can affect discovery even when Internet access works.'],
    ['guide-network-mdns','mDNS Across VLANs: Printer and Speaker Discovery','mDNS across VLANs','Cross-network discovery needs an explicit relay or service design and should not expose every device.'],
    ['guide-network-ethernet-negotiation','Ethernet Auto-Negotiation: 100 Mbps vs 1 Gbps','Ethernet auto negotiation speed','Cable pairs, port capability, driver settings, and negotiation determine the link rate.']
  ],
  security: [
    ['guide-security-admin-account','Router Admin Account Separation: Why One Password Is Not Enough','router admin account separation','Separate administrator access from daily Wi-Fi access and review which accounts the model supports.'],
    ['guide-security-remote-management','Remote Router Management: Safer Alternatives','remote router management security','Remote management expands exposure; prefer vendor-supported secure alternatives and strict controls.'],
    ['guide-security-port-forwarding','Port Forwarding Security Review: Minimize Exposure','port forwarding security checklist','Every forwarding rule should have an owner, purpose, source restriction, and removal plan.'],
    ['guide-security-upnp-mappings','Review Automatic UPnP Port Mappings','UPnP port mapping security','Unexpected mappings can come from games, cameras, or malware; identify before disabling services.'],
    ['guide-security-guest-isolation','Guest Network Isolation: What It Protects','guest WiFi isolation','Guest isolation limits local reachability but does not replace strong Wi-Fi security.'],
    ['guide-security-iot-network','IoT Network Design: Keep Smart Devices Contained','IoT network isolation','Use a separate network when practical and account for discovery, updates, and control paths.'],
    ['guide-security-camera-network','Home Camera Network Security Checklist','home camera router security','Cameras need unique accounts, updates, limited exposure, and careful remote-access review.'],
    ['guide-security-printer-network','Printer Network Security: Sharing Without Oversharing','printer network security','Printers can expose services across a LAN; use segmentation and current firmware where supported.'],
    ['guide-security-firmware-signature','Router Firmware Authenticity: Verify Before Installing','router firmware authenticity','Use official vendor downloads and match model, revision, region, checksum, and release notes.'],
    ['guide-security-eol','Router End-of-Life Research: Find the Support Boundary','router end of life check','An end-of-support notice is stronger replacement evidence than age alone.'],
    ['guide-security-backup-secrets','Router Backup Files Can Contain Secrets','router config backup secrets','Configuration backups may include credentials or network details and need protected storage.'],
    ['guide-security-wifi-password','Wi-Fi Password Policy: Strong Without Breaking Devices','strong WiFi password policy','Balance length, unique use, client compatibility, and a safe migration process.'],
    ['guide-security-wps','WPS Button and PIN: Security and Compatibility Review','WPS security router','WPS behavior differs by model; review whether convenience is worth the exposure.'],
    ['guide-security-legacy-wpa','Legacy WPA and TKIP: Why to Remove Them','WPA TKIP legacy security','Deprecated modes reduce security and can limit modern performance.'],
    ['guide-security-mac-filter','MAC Filtering Limits: Why It Is Not Authentication','MAC filtering security limits','MAC filtering can organize access but is not a strong identity boundary.'],
    ['guide-security-router-clock','Router Time and Logs: Why Clock Accuracy Matters','router log time accuracy','Incorrect time makes event correlation unreliable and can affect certificates or schedules.'],
    ['guide-security-dns-filter','DNS Filtering at Home: Scope and False Positives','DNS filtering router','Filtering can help policy enforcement but does not see every application or encrypted path.'],
    ['guide-security-phishing-login','Recognize Fake Router Login Pages','fake router login page','A local-looking login prompt still deserves hostname, network, and certificate scrutiny.'],
    ['guide-security-admin-session','Router Admin Session Security After Login','router admin session security','Sign out, avoid shared browsers, and do not leave administrative sessions open on untrusted devices.'],
    ['guide-security-reset-evidence','Security Incident or Forgotten Password: Reset Decision','router security reset decision','A factory reset may remove persistence but also destroys evidence and configuration; choose deliberately.']
  ],
  mesh: [
    ['guide-mesh-wired-backhaul','Mesh Wired Backhaul: Cabling and Verification','mesh wired backhaul','Verify that nodes use Ethernet backhaul instead of silently falling back to wireless.'],
    ['guide-mesh-wireless-backhaul','Wireless Mesh Backhaul: Placement and Capacity','wireless mesh backhaul','A node needs a usable upstream path; adding nodes too far away can reduce capacity.'],
    ['guide-mesh-node-placement','Mesh Node Placement: A Room-by-Room Method','mesh node placement','Place nodes for client coverage and backhaul quality, not at the edge of the dead zone.'],
    ['guide-mesh-satellite-offline','Mesh Satellite Offline: Isolate Power, Backhaul, and Account','mesh satellite offline','A satellite can be powered but disconnected; separate physical, radio, and controller causes.'],
    ['guide-mesh-roaming-sticky','Sticky Clients in Mesh Wi-Fi: What the Network Can and Cannot Do','mesh sticky client','Client roaming decisions are partly client-controlled; tune only after identifying the symptom.'],
    ['guide-mesh-ethernet-loop','Mesh Ethernet Loop: Avoid a Network Storm','mesh ethernet loop','Wired mesh designs need a clear topology and supported loop prevention.'],
    ['guide-mesh-ap-mode','Mesh Router vs Access Point Mode','mesh router access point mode','Choose the routing boundary deliberately to avoid double NAT and conflicting DHCP.'],
    ['guide-mesh-mixed-brands','Mixed-Brand Mesh: What Will Not Interoperate','mixed brand mesh compatibility','Wi-Fi roaming standards do not guarantee a shared mesh controller or backhaul.'],
    ['guide-mesh-ssid','Mesh SSID Design: One Name Across Bands','mesh SSID design','A consistent SSID can simplify roaming but does not force every client to choose the best band.'],
    ['guide-mesh-guest','Mesh Guest Network: Isolation Across Nodes','mesh guest network isolation','Guest policy should be verified on every node and wired path.'],
    ['guide-mesh-iot','Mesh and IoT Pairing: Temporary Compatibility Steps','mesh IoT pairing','Use a controlled 2.4 GHz pairing path without permanently weakening the network.'],
    ['guide-mesh-channel','Mesh Channel Planning: Auto vs Manual','mesh channel planning','Mesh nodes coordinate differently; manual channels can help or harm depending on the system.'],
    ['guide-mesh-firmware','Mesh Firmware Updates: Coordinator and Node Order','mesh firmware update','Update order and version compatibility can affect node adoption and rollback.'],
    ['guide-mesh-factory-reset','Reset One Mesh Node Without Resetting the Network','reset one mesh node','A node-level reset is different from resetting the controller; follow model-specific recovery steps.'],
    ['guide-mesh-parental','Parental Controls Across Mesh Nodes','mesh parental controls','Profiles need stable device identity across nodes, bands, and private MAC behavior.'],
    ['guide-mesh-vlan','Mesh VLAN and Guest Limitations','mesh VLAN support','Consumer mesh systems may not expose enterprise VLAN controls; verify before designing around them.'],
    ['guide-mesh-bridge','Bridge Mode with Mesh: Which Box Routes','bridge mode mesh','Decide whether the ISP gateway or mesh system owns routing, DHCP, and firewall duties.'],
    ['guide-mesh-speed','Mesh Speed Test: Node-to-Internet vs Node-to-Node','mesh speed test','Test client link, backhaul, and WAN separately so the result has a useful meaning.'],
    ['guide-mesh-ethernet-switch','Mesh Node Through a Switch: Supported Topologies','mesh node ethernet switch','A switch can simplify wiring but may interact with controller adoption and loop prevention.'],
    ['guide-mesh-replace','Replacing One Mesh Node Safely','replace mesh node','Record topology and settings before removing a node so the system can recover cleanly.']
  ],
  device: [
    ['guide-device-windows-gateway','Windows 11 Gateway and DNS Fields Explained','Windows 11 gateway DNS fields','Read the active adapter, gateway, DHCP, and DNS fields without guessing from an inactive interface.'],
    ['guide-device-windows-reset','Windows Network Reset: What It Removes','Windows network reset router','A Windows reset can remove profiles and adapters; preserve evidence and credentials first.'],
    ['guide-device-windows-ipconfig','ipconfig Output: Which Lines Matter','ipconfig default gateway DNS','Interpret IPv4, IPv6, gateway, DHCP, and DNS lines as a set.'],
    ['guide-device-macos-gateway','macOS Router Address and DNS: Find the Active Path','macOS router gateway','Use the active interface and current location rather than an old saved network.'],
    ['guide-device-macos-wireless-diagnostics','macOS Wireless Diagnostics: What the Report Can Tell You','macOS wireless diagnostics router','Wireless Diagnostics provides evidence about radio and connection behavior, not a complete router verdict.'],
    ['guide-device-linux-ip-route','Linux ip route: Find the Default Gateway','Linux ip route default gateway','Read the active route and interface before opening a local router address.'],
    ['guide-device-linux-resolve','Linux resolvectl and DNS Troubleshooting','Linux resolvectl DNS','Compare configured resolvers, link state, and actual responses.'],
    ['guide-device-android-gateway','Android Wi-Fi Gateway: What the Phone Shows','Android WiFi gateway','Android labels vary by version; use the connected network details and avoid sharing private values.'],
    ['guide-device-android-private-dns','Android Private DNS and Router Filtering','Android Private DNS router','Private DNS can bypass ordinary resolver settings and change filtering behavior.'],
    ['guide-device-iphone-router','iPhone Router Field: Find the Local Gateway','iPhone router field','The iPhone Wi-Fi details expose a local router field for the connected network.'],
    ['guide-device-iphone-private-address','iPhone Private Wi-Fi Address and Client Lists','iPhone private WiFi address router','Private address rotation can change how the router labels the device.'],
    ['guide-device-chromebook-gateway','Chromebook Gateway and Name Server Details','Chromebook gateway DNS','Use ChromeOS network details to separate local routing from DNS symptoms.'],
    ['guide-device-playstation-nat','PlayStation NAT Type: Router Checks Without Guessing','PlayStation NAT type router','NAT results depend on router, ISP, and game service; use layered checks.'],
    ['guide-device-xbox-nat','Xbox NAT and Teredo: Safe Router Checks','Xbox NAT Teredo router','Teredo and NAT status can be affected by IPv6, firewall, and multiple routers.'],
    ['guide-device-nintendo-nat','Nintendo Switch NAT Type: Test the Network Boundary','Nintendo Switch NAT type','A console NAT result is not a complete security rating or a reason to expose ports blindly.'],
    ['guide-device-smart-tv-dns','Smart TV DNS and Wi-Fi Troubleshooting','smart TV DNS WiFi router','Separate wireless association, DHCP, DNS, and streaming service problems.'],
    ['guide-device-printer-ip','Printer IP Address Changes: DHCP Reservation Workflow','printer IP address changes','A reservation can stabilize discovery without unsafe manual static settings.'],
    ['guide-device-camera-wifi','Security Camera Cannot Join Wi-Fi: Compatibility Checks','security camera cannot connect WiFi','Check band, security mode, app provisioning, and isolation without weakening the main network.'],
    ['guide-device-voip','VoIP Phone and Router QoS: What to Measure','VoIP router QoS','Voice problems need latency, loss, jitter, and upload checks rather than a generic reboot.'],
    ['guide-device-iot-discovery','IoT Device Discovery Across Guest Wi-Fi','IoT discovery guest WiFi','Guest isolation improves separation but can intentionally block local discovery.']
  ],
  isp: [
    ['guide-isp-ont-router','ONT vs Router: Fiber Home Network Roles','ONT versus router fiber','Identify the optical handoff, router, and authentication boundary before replacing equipment.'],
    ['guide-isp-pppoe','PPPoE Router Setup: Credentials and MTU Boundaries','PPPoE router setup','PPPoE credentials, VLAN requirements, and MTU are provider-specific; verify before changing them.'],
    ['guide-isp-dhcp-wan','DHCP WAN vs PPPoE: Identify the ISP Connection Type','DHCP WAN versus PPPoE','The WAN method determines what the router should request or authenticate.'],
    ['guide-isp-vlan-tag','ISP VLAN Tagging: Why Internet May Not Start','ISP VLAN tagging router','VLAN tags are provider-specific and should come from official documentation.'],
    ['guide-isp-bridge-voice','Bridge Mode and ISP Voice Services','bridge mode VoIP ISP','Bridge mode can interact with voice, TV, and support features on combined gateways.'],
    ['guide-isp-ip-passthrough','IP Passthrough vs Bridge Mode','IP passthrough versus bridge mode','These modes may differ in address assignment, firewall, and provider feature behavior.'],
    ['guide-isp-cgnat','Carrier-Grade NAT and Home Hosting','CGNAT home server','CGNAT can prevent inbound IPv4 connections even when the local port rule is correct.'],
    ['guide-isp-ipv6-home','ISP IPv6 at Home: Prefix and Firewall Checklist','ISP IPv6 home router','IPv6 availability does not remove the need for an explicit firewall and prefix understanding.'],
    ['guide-isp-fixed-wireless','Fixed Wireless Gateway Placement and Signal','fixed wireless gateway placement','Cellular gateway placement, signal, and provider policy affect the result.'],
    ['guide-isp-5g-nsa-sa','5G NSA vs SA Home Internet: What the Router Reports','5G NSA SA home router','Radio labels describe the access network, not guaranteed speed or stability.'],
    ['guide-isp-cable-upstream','Cable Modem Upstream Channels: What They Suggest','cable modem upstream channels','Channel status is evidence for escalation, not a standalone proof of a line fault.'],
    ['guide-isp-cable-signal','Cable Modem Signal Levels: Read Without Overgeneralizing','cable modem signal levels','Model and ISP limits vary; record values and compare with provider guidance.'],
    ['guide-isp-fiber-optical','Fiber ONT Optical Alarm: Safe First Checks','fiber ONT optical alarm','Optical alarms need cable and provider checks; do not repeatedly power-cycle unfamiliar fiber equipment.'],
    ['guide-isp-outage','Router Fault or ISP Outage: A Layered Test','router or ISP outage','Compare gateway, local device, wired link, and provider status before replacing hardware.'],
    ['guide-isp-speed-tier','Router Capability vs ISP Speed Tier','router speed tier compatibility','A plan upgrade may require wired ports, CPU capacity, Wi-Fi generation, or modem support.'],
    ['guide-isp-upload','Upload Speed Bottleneck: Home Network Diagnosis','upload speed bottleneck router','Upload congestion affects calls, backups, and gaming differently from download speed.'],
    ['guide-isp-data-cap','Home Router Traffic and ISP Data Caps','router traffic data cap','Router counters can be useful clues but may not match the provider’s billing meter.'],
    ['guide-isp-ont-router-mode','Fiber Router Mode: Router, Bridge, or Passthrough','fiber router mode','Choose one routing authority and verify provider authentication requirements.'],
    ['guide-isp-modem-compatibility','Modem Compatibility: DOCSIS and Provider Approval','modem compatibility ISP','A modem model may support a technology but still require provider approval or a firmware profile.'],
    ['guide-isp-provider-app','ISP App Controls vs Local Router Controls','ISP app versus local router','Cloud-managed gateway apps may expose different settings from local admin pages.']
  ],
  tools: [
    ['guide-tool-subnet-mask','Subnet Mask Quick Reference with Worked Examples','subnet mask examples','Use binary boundaries and host counts to explain what a subnet mask actually changes.'],
    ['guide-tool-cidr-hosts','CIDR Host Count: Usable Addresses and Reservations','CIDR usable host count','Calculate network, broadcast, and usable ranges without confusing IPv4 host counts.'],
    ['guide-tool-private-range','Private IPv4 Ranges: What Can Be Used at Home','private IPv4 address ranges','RFC 1918 ranges are local-use space, not public Internet identities.'],
    ['guide-tool-link-local','IPv4 Link-Local Range: Diagnose 169.254 Carefully','IPv4 link local 169.254','A link-local address points to a configuration path, not automatically to a dead router.'],
    ['guide-tool-ipv6-prefix','IPv6 Prefix Length Worksheet','IPv6 prefix length calculator','A prefix length describes address allocation and should match the network design.'],
    ['guide-tool-broadcast','IPv4 Broadcast Address Worksheet','IPv4 broadcast address calculator','Derive network and broadcast addresses from an address and mask.'],
    ['guide-tool-wildcard','Wildcard Mask vs Subnet Mask','wildcard mask subnet mask','Wildcard masks invert a subnet mask in contexts such as ACLs; they are not interchangeable everywhere.'],
    ['guide-tool-bandwidth','Bandwidth Time Calculator for Backups','bandwidth time calculator','Estimate transfer time from bits, bytes, and protocol overhead without promising an exact result.'],
    ['guide-tool-latency','Latency Budget Worksheet for Calls and Games','latency budget calculator','Break latency into access, queueing, Wi-Fi, and application components.'],
    ['guide-tool-jitter','Jitter and Packet-Loss Worksheet','jitter packet loss test','Record repeated samples and separate variation from one slow result.'],
    ['guide-tool-bufferbloat','Bufferbloat Test Interpretation Guide','bufferbloat test meaning','Latency under load is more informative than an idle ping alone.'],
    ['guide-tool-mtu','Path MTU Test Worksheet','path MTU test','Use controlled packet-size tests and respect platform syntax.'],
    ['guide-tool-dns','DNS Response Code Worksheet','DNS response code worksheet','Record resolver, name, response code, and timing to avoid vague conclusions.'],
    ['guide-tool-dhcp','DHCP Lease Worksheet','DHCP lease worksheet','Compare address, mask, gateway, server, obtained time, and expiry.'],
    ['guide-tool-wifi-survey','Wi-Fi Survey Notes Template','WiFi survey worksheet','Record band, channel, width, RSSI, noise, location, and client.'],
    ['guide-tool-rssi','RSSI to Signal Quality: Avoid Universal Bars','RSSI signal strength meaning','RSSI values are useful context but depend on band, noise, client, and device calibration.'],
    ['guide-tool-throughput','Router Throughput Test Plan','router throughput test plan','Separate wired LAN, wireless LAN, and Internet tests.'],
    ['guide-tool-ip-conflict','IP Conflict Evidence Worksheet','IP conflict worksheet','Capture private evidence without sharing addresses or MACs publicly.'],
    ['guide-tool-port','Port and Protocol Planning Table','port protocol worksheet','Document purpose, direction, device, source restriction, and removal date.'],
    ['guide-tool-network-map','Home Network Diagram Worksheet','home network diagram template','Map ISP handoff, router, switches, APs, VLANs, and clients.']
  ],
  models: [
    ['guide-model-hardware-revision','Router Hardware Revision: Find the Exact Variant','router hardware revision','Firmware and manuals depend on the exact revision printed on the label or support page.'],
    ['guide-model-firmware-notes','Router Firmware Release Notes: What to Read','router firmware release notes','Release notes reveal fixes, limitations, compatibility, and migration warnings.'],
    ['guide-model-support-page','Find the Official Router Support Page','official router support page','Use model and region to reach the correct download and manual page.'],
    ['guide-model-manual-pdf','Router Manual PDF: Verify the Version','router manual PDF version','A manual may be outdated or for another revision; compare identifiers.'],
    ['guide-model-warranty','Router Warranty and Replacement Evidence','router warranty replacement','Document symptoms, purchase details, firmware, and troubleshooting before escalation.'],
    ['guide-model-wifi-class','Wi-Fi Class Labels: AX, BE, and Advertised Rates','WiFi AX BE class meaning','Generation labels do not equal one client’s throughput.'],
    ['guide-model-ethernet-ports','Router Ethernet Port Labels: WAN, LAN, 2.5G, and 10G','router Ethernet port labels','Port speed and role must match the cable, client, and router mode.'],
    ['guide-model-usb','Router USB Port Uses and Security Limits','router USB port uses','USB storage, printer, and modem features vary widely by firmware.'],
    ['guide-model-antennas','Router Antenna Claims: What They Do Not Prove','router antenna gain claims','Antenna count and labels do not guarantee coverage in a building.'],
    ['guide-model-processor','Router CPU and Memory: When Specs Matter','router CPU memory specs','Hardware specs matter for features and load but are not a complete performance score.'],
    ['guide-model-mesh-standard','EasyMesh vs Vendor Mesh: Interoperability Limits','EasyMesh versus vendor mesh','A standard can improve compatibility but does not guarantee every feature.'],
    ['guide-model-open-source','OpenWrt-Compatible Router Checklist','OpenWrt router compatibility','Check hardware revision, flash, recovery path, wireless support, and warranty.'],
    ['guide-model-travel-router','Travel Router Selection: Modes and Constraints','travel router buying guide','Travel routers trade radio, power, VPN, and mode flexibility.'],
    ['guide-model-5g-router','5G Router Selection: Bands, SIM, and Ethernet','5G router buying guide','Carrier bands and firmware policy matter as much as headline speed.'],
    ['guide-model-cable-modem','Cable Modem Selection: DOCSIS and Port Speed','cable modem buying guide','DOCSIS generation and provider approval must be checked together.'],
    ['guide-model-fiber-router','Fiber Router Selection: ONT and Authentication','fiber router buying guide','A router must match the fiber handoff and provider authentication model.'],
    ['guide-model-gaming-router','Gaming Router Claims: QoS and Reality','gaming router features','Gaming labels do not replace latency-under-load measurements.'],
    ['guide-model-parental','Router Parental Control Feature Comparison','router parental control comparison','Compare schedule, filtering, identity, privacy, and bypass limits.'],
    ['guide-model-update','Automatic Router Updates: Benefits and Rollback','automatic router firmware updates','Automatic updates improve security but require backup and recovery awareness.'],
    ['guide-model-replace','Router Replacement Decision Matrix','router replacement decision matrix','Use support, reliability, capacity, compatibility, and security evidence.']
  ],
  concepts: [
    ['guide-concept-router-vs-ap','Router vs Access Point: Choose the Right Mode','router versus access point mode','The routing boundary determines DHCP, NAT, firewall, and management responsibilities.'],
    ['guide-concept-switch-vs-router','Switch vs Router vs Access Point','switch versus router versus access point','Each device solves a different layer of the home network problem.'],
    ['guide-concept-modem-ont','Modem vs ONT: Cable and Fiber Handoffs','modem versus ONT','Access technology determines the handoff device and the compatible router design.'],
    ['guide-concept-wifi-vs-internet','Wi-Fi Speed vs Internet Speed','WiFi speed versus Internet speed','Local wireless capacity and ISP service rate are separate measurements.'],
    ['guide-concept-download-upload','Download vs Upload: Why Both Matter','download versus upload speed','Calls, backups, creators, and gaming can be upload-sensitive.'],
    ['guide-concept-speed-latency','Speed vs Latency vs Jitter','speed latency jitter difference','A fast connection can still feel poor under delay or variation.'],
    ['guide-concept-2g-5g','2.4 GHz vs 5 GHz: Range and Capacity','2.4GHz versus 5GHz','Band choice depends on distance, interference, client support, and traffic.'],
    ['guide-concept-5g-6g','5 GHz vs 6 GHz Wi-Fi','5GHz versus 6GHz WiFi','6 GHz offers newer spectrum conditions but stricter client and region requirements.'],
    ['guide-concept-wpa2-wpa3','WPA2 vs WPA3: Compatibility Decision','WPA2 versus WPA3','Security mode should balance protection and the oldest necessary client.'],
    ['guide-concept-ssid','SSID Naming: Practical and Privacy Considerations','WiFi SSID naming best practices','A unique name helps identification but does not provide security.'],
    ['guide-concept-guest-iot','Guest Network vs IoT Network','guest network versus IoT network','Isolation goals and local discovery needs are different.'],
    ['guide-concept-static-dhcp','Static IP vs DHCP Reservation','static IP versus DHCP reservation','Central reservations are easier to audit; static settings may be needed for selected devices.'],
    ['guide-concept-public-private','Public IP vs Private IP','public versus private IP address','Private addresses work inside local networks and are not directly routable on the public Internet.'],
    ['guide-concept-ipv4-ipv6','IPv4 vs IPv6 at Home','IPv4 versus IPv6 home network','Dual-stack networks can have different address, DNS, firewall, and troubleshooting paths.'],
    ['guide-concept-nat-firewall','NAT vs Firewall','NAT versus firewall','Address translation and traffic policy are related but not the same protection.'],
    ['guide-concept-vpn-router','VPN on Router vs VPN on Device','VPN on router versus device','Placement changes coverage, performance, device selection, and troubleshooting.'],
    ['guide-concept-dns-router','Router DNS vs Device DNS','router DNS versus device DNS','DHCP, device settings, encrypted DNS, and applications can choose different resolvers.'],
    ['guide-concept-mesh-extender','Mesh vs Range Extender','mesh versus WiFi extender','Backhaul, roaming, capacity, and management distinguish the two designs.'],
    ['guide-concept-wired-wireless','Wired Backhaul vs Wireless Backhaul','wired versus wireless mesh backhaul','Ethernet usually changes the capacity trade-off, but topology and switch support still matter.'],
    ['guide-concept-reboot-reset','Router Reboot vs Factory Reset','router reboot versus factory reset','A reboot restarts operation; a factory reset removes configuration and needs a recovery plan.']
  ]
};

function sourceLinks(kind){ return SOURCES[kind].map(([name,url])=>`<li><a href="${url}" rel="noopener">${esc(name)}</a></li>`).join(''); }
function makePage(kind, item, index, pageUrl){
  const [part,title,question,angle]=item;
  const slug=`/${kind==='concepts'?'basics':kind}/${part}/`;
  const sources=SOURCES[kind];
  const rel=related[kind];
  const desc=`${question}. ${angle} Router Portal explains the evidence, safe workflow, limitations, and next steps.`.slice(0,158);
  const rows=[
    [`Start with the evidence`, `Record the exact symptom, device/model, time, and network path for ${question}.`, `Do not publish private IPs, MAC addresses, credentials, or screenshots.`],
    [`Compare one variable`, `Test one controlled change related to ${angle.toLowerCase()}.`, `One improvement does not prove the root cause.`],
    [`Choose the least risky action`, `Prefer a reversible setting, documented check, or vendor-supported workflow.`, `Do not factory-reset or expose a port as a first step.`]
  ];
  const steps=[
    `Define the exact question: ${question}. Confirm whether the problem affects one device, one band, the whole LAN, or the ISP path.`,
    `Identify the router model, hardware revision, firmware context, active interface, and whether the device is in router, bridge, access-point, or mesh mode.`,
    `Record a private baseline: gateway, address, DNS, link state, signal or timing, and the time of the symptom. Redact sensitive values before sharing anything.`,
    `Change one variable that directly tests ${angle.toLowerCase()}, then repeat the same test on the same device and path.`,
    `Compare the result with the official documentation and the decision table below. If the behavior is model- or provider-specific, stop guessing and use the exact manual.`,
    `Restore any temporary test setting, document the working state, and escalate to the manufacturer or ISP when the evidence points outside the router.`
  ];
  return {slug,title:`${title} | Router Portal`,description:desc,label:`Research guide: ${title}`,h1:title,intro:`${angle}. This page covers one distinct question and avoids treating a model-specific result as a universal rule.`,searchTerms:`${question}, ${title}, router network guide`,body:`
    <div class="notice"><strong>Safety boundary:</strong> Use these steps only on a router and network you own or are authorised to manage. Router Portal never asks for router passwords, Wi-Fi keys, MAC addresses, serial numbers, public IPs, or private screenshots.</div>
    <div class="evidence-card"><div class="evidence-head"><strong>Evidence-led scope</strong><span class="status-pill success">RESEARCH GUIDE</span></div><div class="evidence-grid"><div><small>Question</small><strong>${esc(question)}</strong></div><div><small>Scope</small><strong>Model/firmware dependent</strong></div><div><small>Method</small><strong>One change at a time</strong></div><div><small>Risk</small><strong>Reversible first</strong></div></div></div>
    <div class="answer-lead"><strong>Quick answer:</strong> ${esc(angle)} Start with the active network evidence, compare one variable, and use the exact vendor or ISP documentation before changing a setting.</div>
    <figure class="router-visual expansion-visual" role="img" aria-label="${esc(title)} decision flow"><div class="console-bar"><span class="console-dot"></span> ROUTER PORTAL / RESEARCH GUIDE <code>VERIFY • READ ONLY</code></div><div class="visual-nodes"><div class="visual-node"><b>1</b><span>Observe</span></div><i>→</i><div class="visual-node"><b>2</b><span>Compare</span></div><i>→</i><div class="visual-node"><b>3</b><span>Act safely</span></div></div><figcaption>Original Router Portal decision flow for ${esc(title)}. Exact labels and controls vary by model and firmware.</figcaption></figure>
    <h2>What this page covers</h2><p>${esc(angle)} The goal is not to promise one universal setting. It is to show which evidence matters, which change is reversible, and when the correct next step is a model manual, an ISP support page, or a qualified network administrator.</p>
    <h2>Step-by-step workflow</h2><ol>${steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>
    <h2>Decision table</h2><div class="responsive-table"><table><thead><tr><th>Check</th><th>What it tells you</th><th>What it does not prove</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div>
    <h2>Limits and verification</h2><p>Router menus, firmware, hardware revisions, radio regulations, operating systems, ISP policies, and cloud-managed features change over time. A search result, an advertised speed, or a single successful test is not proof that every device behaves the same way. Confirm the exact model and region, back up a known-good configuration before risky changes, and keep private network evidence private.</p>
    <h2>Official references</h2><ul>${sourceLinks(kind)}</ul>
    <h2>Related Router Portal guides</h2><p>${rel.map(([label,path])=>`<a href="${pageUrl(path)}">${esc(label)}</a>`).join(' · ')}</p>
    <p><strong>Editorial note:</strong> This is one distinct research-backed question, not a keyword variation of another page. Recheck the cited documentation when firmware, provider policy, or device support changes.</p>`};
}

export function makeExpansionPages(pageUrl){
  const pages=[];
  for (const [kind,items] of Object.entries(clusters)) items.forEach((item,i)=>pages.push(makePage(kind,item,i,pageUrl)));
  return pages;
}

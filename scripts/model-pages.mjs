const safe = `<div class="notice"><strong>নিরাপত্তা:</strong> এই guide শুধু নিজের বা অনুমোদিত router-এর জন্য ব্যবহার করুন। Router Portal-এ কোনো admin password, Wi‑Fi password, serial, MAC বা private network screenshot পাঠাবেন না।</div>`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const models = [
  {brand:'TP-Link', model:'Archer C6', slug:'tp-link/archer-c6', addresses:'192.168.0.1, 192.168.1.1 বা model/firmware অনুযায়ী local hostname', brandPath:'/brand/tp-link/', ip:'/ip/192-168-0-1/', terms:'TP-Link Archer C6 login, Archer C6 router admin, Archer C6 IP, Archer C6 Wi-Fi password'},
  {brand:'NETGEAR', model:'R7000', slug:'netgear/r7000', addresses:'192.168.1.1, 192.168.0.1 বা model documentation-এ দেওয়া local hostname', brandPath:'/brand/netgear/', ip:'/ip/192-168-1-1/', terms:'NETGEAR R7000 login, R7000 router admin, R7000 IP, Nighthawk R7000 setup'},
  {brand:'D-Link', model:'DIR-615', slug:'d-link/dir-615', addresses:'192.168.0.1 বা hardware revision/firmware অনুযায়ী আলাদা local address', brandPath:'/brand/d-link/', ip:'/ip/192-168-0-1/', terms:'D-Link DIR-615 login, DIR-615 admin, DIR-615 IP, DIR-615 Wi-Fi password'},
  {brand:'Tenda', model:'AC10', slug:'tenda/ac10', addresses:'192.168.0.1 বা model/firmware অনুযায়ী local setup address', brandPath:'/brand/tenda/', ip:'/ip/192-168-0-1/', terms:'Tenda AC10 login, AC10 router admin, AC10 IP, Tenda AC10 setup'},
  {brand:'Huawei', model:'B535', slug:'huawei/b535', addresses:'192.168.8.1 বা exact firmware/ISP configuration অনুযায়ী address', brandPath:'/brand/huawei/', ip:'/ip/192-168-8-1/', terms:'Huawei B535 login, B535 admin, Huawei B535 IP, B535 4G router setup'},
  {brand:'ASUS', model:'RT-AC68U', slug:'asus/rt-ac68u', addresses:'192.168.1.1 বা model documentation-এ দেওয়া local hostname', brandPath:'/brand/asus/', ip:'/ip/192-168-1-1/', terms:'ASUS RT-AC68U login, RT-AC68U admin, RT-AC68U IP, ASUS Wi-Fi setup'}
];

export function makeModelPages(pageUrl){
  return models.map(x => ({
    slug:`/model/${x.slug}/`,
    title:`${x.brand} ${x.model} Login, IP and Setup | Router Portal`,
    description:`Find safe ${x.brand} ${x.model} login steps, address checks, password guidance, Wi-Fi settings and model-specific troubleshooting.`,
    label:`${x.brand} ${x.model} guide`,
    h1:`${x.brand} ${x.model} router login`,
    searchTerms:x.terms,
    intro:`A model-specific starting point for ${x.brand} ${x.model}; confirm hardware revision, firmware and current gateway before changing settings.`,
    body:`${safe}
      <div class="answer-lead"><strong>Quick answer:</strong> Connect to your own ${esc(x.brand)} ${esc(x.model)} network, read the current Default Gateway, open the address in the browser bar, and use the credential created for this exact device.</div>
      <div class="action-row"><a class="button" href="${pageUrl(x.ip)}">Open matching IP guide</a><a class="button secondary" href="${pageUrl(x.brandPath)}">Open ${esc(x.brand)} guide</a><a class="button ghost" href="${pageUrl('/find-router-ip/')}">Find current gateway</a></div>
      <h2>Model identity comes first</h2><p>Match the full model name and hardware revision on the device label. The same product family can have different firmware, regional menus, ISP variants and reset behaviour. Do not apply a guide just because the brand name looks similar.</p>
      <h2>Possible local login address</h2><p><strong>${esc(x.addresses)}</strong>. This is a starting point, not a guarantee. Your connected device's current Default Gateway is more reliable than a generic model list.</p>
      <h2>Safe login steps</h2><ol><li>Connect to the exact ${esc(x.brand)} ${esc(x.model)} Wi-Fi or Ethernet network.</li><li>Temporarily avoid another active Wi-Fi, VPN or proxy while testing.</li><li>Open the browser address bar, not Google search.</li><li>Use the dotted local address or documented hostname for your revision.</li><li>Use the credential printed on the label, created during setup, supplied by the ISP, or privately saved by the owner.</li></ol>
      <h2>Admin password and Wi-Fi password are different</h2><p>The administrator credential opens the control panel; the Wi-Fi key joins the wireless network. Some devices show a label-generated value, while others require first-run setup. There is no universal password that is safe to claim for every revision.</p>
      <h2>Useful settings after login</h2><ul><li>Change a weak administrator credential.</li><li>Review Wi-Fi name and security mode.</li><li>Check firmware only for the exact hardware and region.</li><li>Review remote management, WPS, UPnP and guest access.</li><li>Record important ISP or LAN settings before a reset.</li></ul>
      <h2>If the page does not open</h2><p>Use ${pageUrl('/find-router-ip/') ? `<a href="${pageUrl('/find-router-ip/')}">the current gateway guide</a>` : ''}, then check power, network connection, browser address-bar entry, VPN/proxy interference and the exact hardware revision. A factory reset can erase ISP, Wi-Fi, LAN and security settings; treat it as a last resort.</p>
      <h2>Related help</h2><p><a href="${pageUrl('/router-login-not-working/')}">Router login troubleshooting</a> · <a href="${pageUrl('/change-router-admin-password/')}">Change admin password</a> · <a href="${pageUrl('/security/after-router-login-checklist/')}">After-login security checklist</a> · <a href="${pageUrl('/models/router-manuals-and-support/')}">Find exact model support information</a></p>
      <div class="notice"><strong>Scope:</strong> This page explains a safe model-specific workflow. It does not claim one IP, username or password works for every hardware revision, ISP variant or firmware.</div>`
  }));
}

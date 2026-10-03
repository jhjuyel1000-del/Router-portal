const make = (pageUrl, m) => ({
  slug:m.slug,
  title:`${m.model}: Firmware & Support | Router Portal`,
  description:`Evidence-aware ${m.model} router guide: identify the exact revision, find the official manual and firmware page, and troubleshoot safely.`,
  label:'Model evidence guide',
  h1:`${m.model} router guide`,
  intro:`Use the exact hardware revision and regional support page before applying a login, firmware or reset instruction to ${m.model}.`,
  searchTerms:`${m.model}, ${m.brand} router, ${m.model} login, ${m.model} firmware, router support`,
  schemaType:'Article',
  body:`
    <div class="answer-lead"><strong>Quick answer:</strong> Confirm the label, hardware revision and region first. Then use the manufacturer’s official manual and download page for ${m.model}; a model family name alone is not enough.</div>
    <div class="admin-console"><div><span class="status-pill">MODEL EVIDENCE</span><span class="status-pill muted">READ ONLY</span></div><small>Router Portal • no credential collection</small></div>
    <div class="action-row"><a class="button" href="${pageUrl('/models/find-router-hardware-revision/')}">Find hardware revision</a><a class="button secondary" href="${pageUrl('/models/read-router-firmware-release-notes/')}">Read release notes</a></div>
    <div class="notice"><strong>Source boundary:</strong> ${m.note} Do not apply a firmware image from a similar-looking model or another region.</div>
    <figure class="router-visual check-visual" role="img" aria-label="Model evidence workflow"><div class="console-bar"><span class="console-dot"></span> ROUTER PORTAL / MODEL CARD <code>${m.model}</code></div><div class="visual-nodes"><div class="visual-node"><b>1</b><span>Label and revision</span></div><i>→</i><div class="visual-node"><b>2</b><span>Official support page</span></div><i>→</i><div class="visual-node"><b>3</b><span>Firmware and reset check</span></div></div><figcaption>Original evidence workflow. Verify the exact device before changing settings.</figcaption></figure>
    <h2>What to verify on the device</h2><div class="checklist"><div class="check"><span class="step-no">1</span><div><strong>Model and hardware revision</strong><span>Read the bottom label or official web interface. Keep private serial numbers out of screenshots.</span></div></div><div class="check"><span class="step-no">2</span><div><strong>Region and ISP variant</strong><span>Provider firmware and regional radio rules can change menus, defaults and firmware availability.</span></div></div><div class="check"><span class="step-no">3</span><div><strong>Official manual and firmware</strong><span>Use the manufacturer support portal, not an unverified mirror or a file for a similar model.</span></div></div></div>
    <h2>Login and credentials</h2><p>Use the credential printed on the device, supplied by the ISP, or created during setup. Router Portal does not publish a universal password guarantee and never asks you to enter credentials here. If access is lost, use the documented recovery path and understand reset consequences first.</p>
    <h2>Firmware and reset cautions</h2><ul><li>Read the exact release notes and compatibility list.</li><li>Back up settings only when the vendor supports it and store the file privately.</li><li>Use a wired connection for a documented firmware recovery where possible.</li><li>Never interrupt a firmware flash or use an image from another revision.</li></ul>
    <h2>Evidence table</h2><div class="responsive-table"><table><thead><tr><th>Evidence</th><th>Use</th><th>Limit</th></tr></thead><tbody><tr><td><strong>Label</strong></td><td>Identifies model/revision</td><td>Does not prove current firmware</td></tr><tr><td><strong>Official support page</strong></td><td>Manuals and downloads</td><td>Region and date may matter</td></tr><tr><td><strong>Release notes</strong></td><td>Shows changes and fixes</td><td>Does not guarantee security by itself</td></tr></tbody></table></div>
    <h2>Related guides</h2><p><a href="${pageUrl('/router-model-login/')}">Model login overview</a> · <a href="${pageUrl('/default-router-passwords/')}">Credential safety directory</a> · <a href="${pageUrl('/maintenance/router-firmware-recovery/')}">Firmware recovery</a> · <a href="${pageUrl('/models/router-model-evidence-card/')}">Evidence card method</a></p>`
});
export function makeLegacyModelPages(pageUrl){return [
  {slug:'/model/tp-link/archer-c6/',model:'TP-Link Archer C6',brand:'TP-Link',note:'Archer C6 hardware revisions can have different firmware files and menus.'},
  {slug:'/model/netgear/r7000/',model:'NETGEAR R7000',brand:'NETGEAR',note:'R7000 and similar Nighthawk names are not interchangeable firmware targets.'},
  {slug:'/model/d-link/dir-615/',model:'D-Link DIR-615',brand:'D-Link',note:'DIR-615 revisions and regions can differ substantially.'},
  {slug:'/model/tenda/ac10/',model:'Tenda AC10',brand:'Tenda',note:'AC10 variants and ISP firmware may change the support path.'},
  {slug:'/model/huawei/b535/',model:'Huawei B535',brand:'Huawei',note:'Mobile-router carrier variants may expose different management options.'},
  {slug:'/model/asus/rt-ac68u/',model:'ASUS RT-AC68U',brand:'ASUS',note:'Hardware revision and firmware branch should be confirmed in ASUS support.'}
].map(m=>make(pageUrl,m));}

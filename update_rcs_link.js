const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    if (file === 'index.html') continue;
    let content = fs.readFileSync(file, 'utf8');

    // Currently it is:
    // <a href="#" class="sidebar-item block px-3 py-2 rounded-lg text-xs text-gray-500 hover:bg-gray-50">Campaign</a>
    // inside the rcs-submenu.
    
    // We want to replace it, but ONLY the one inside rcs-submenu.
    const rcsSubmenuRegex = /(<div class="[^"]*" id="rcs-submenu">[\s\S]*?)<a href="#"([^>]*?)>Campaign<\/a>/;
    
    const isRcsCampaign = file === 'rcs-campaign.html';
    const newClass = isRcsCampaign ? 'sidebar-item block px-3 py-2 rounded-lg text-xs font-bold text-blue-600 bg-blue-50' : 'sidebar-item block px-3 py-2 rounded-lg text-xs text-gray-500 hover:bg-gray-50';
    
    if (rcsSubmenuRegex.test(content)) {
        content = content.replace(rcsSubmenuRegex, `$1<a href="rcs-campaign.html" class="${newClass}">Campaign</a>`);
        fs.writeFileSync(file, content);
    }
}

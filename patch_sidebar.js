const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const toggleScript = `
<script>
    function toggleSubmenu(event, submenuId, iconId) {
        event.preventDefault();
        const submenu = document.getElementById(submenuId);
        const icon = document.getElementById(iconId);
        if (submenu) {
            if (submenu.classList.contains('hidden')) {
                submenu.classList.remove('hidden');
                if(icon) icon.style.transform = 'rotate(180deg)';
            } else {
                submenu.classList.add('hidden');
                if(icon) icon.style.transform = 'rotate(0deg)';
            }
        }
    }
</script>
`;

for (const file of files) {
    if (file === 'index.html') continue;
    
    let content = fs.readFileSync(file, 'utf8');

    // 1. Identify the SMS <a> tag.
    // It looks like:
    // <a href="#" class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-blue-600 font-medium bg-blue-50/50">
    //    <div class="flex items-center">
    //        <i class="fa-solid fa-comment-dots w-6 text-center text-blue-500"></i>
    //        <span>SMS</span>
    //    </div>
    //    <i class="fa-solid fa-chevron-down text-xs"></i>
    // </a>
    // Wait, the class might be slightly different depending on the active state of the page!
    
    // Let's use a very safe regex that finds the <a> containing <span>SMS</span> and the following <div>.
    content = content.replace(/<a href="#"([^>]*?)>\s*<div class="flex items-center">\s*<i class="fa-solid fa-comment-dots w-6 text-center text-blue-500"><\/i>\s*<span>SMS<\/span>\s*<\/div>\s*<i class="fa-solid fa-chevron-down text-xs([^"]*)"><\/i>\s*<\/a>\s*<div class="ml-7 mt-1 space-y-0\.5 border-l border-gray-100 pl-2">/, 
    `<a href="#" $1 onclick="toggleSubmenu(event, 'sms-submenu', 'sms-icon')">
                    <div class="flex items-center">
                        <i class="fa-solid fa-comment-dots w-6 text-center text-blue-500"></i>
                        <span>SMS</span>
                    </div>
                    <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" id="sms-icon" style="transform: rotate(180deg);"></i>
                </a>
                <div class="ml-7 mt-1 space-y-0.5 border-l border-gray-100 pl-2 overflow-hidden" id="sms-submenu">`);
                
    // Wait, what if the color of the SMS icon is gray because it's not active?
    // Let's make the regex more flexible.
    content = content.replace(/<a href="#"([^>]*?)>\s*<div class="flex items-center">\s*<i class="fa-solid fa-comment-dots([^>]*)"><\/i>\s*<span>SMS<\/span>\s*<\/div>\s*<i class="fa-solid fa-chevron-down([^>]*)"><\/i>\s*<\/a>\s*<div class="ml-7 mt-1 space-y-0\.5 border-l border-gray-100 pl-2">/, 
    `<a href="#" $1 onclick="toggleSubmenu(event, 'sms-submenu', 'sms-icon')">
                    <div class="flex items-center">
                        <i class="fa-solid fa-comment-dots$2"></i>
                        <span>SMS</span>
                    </div>
                    <i class="fa-solid fa-chevron-down$3 transition-transform duration-200" id="sms-icon" style="transform: rotate(180deg);"></i>
                </a>
                <div class="ml-7 mt-1 space-y-0.5 border-l border-gray-100 pl-2 overflow-hidden" id="sms-submenu">`);

    // Ensure the toggle script is at the end of the body
    if (!content.includes('function toggleSubmenu')) {
        content = content.replace(/<\/body>/, toggleScript + '\n</body>');
    }

    fs.writeFileSync(file, content);
}

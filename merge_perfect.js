const fs = require('fs');

const dashboard = fs.readFileSync('dashboard.html', 'utf8');
const sendsms = fs.readFileSync('send-sms.html', 'utf8');

// Grab layout from dashboard
const match = dashboard.match(/([\s\S]*?)<!-- Page Title/);
let layoutTop = match[1];

// Fix sidebar active classes
layoutTop = layoutTop.replace(/class="([^"]*)sidebar-item([^"]*)active([^"]*)"/g, 'class="$1sidebar-item$2$3"');
layoutTop = layoutTop.replace(/class="([^"]*)sidebar-item([^"]*)text-blue-600 bg-blue-50 font-bold([^"]*)"/g, 'class="$1sidebar-item$2text-gray-600 hover:bg-gray-50$3"');
layoutTop = layoutTop.replace(/<a href="dashboard\.html" class="sidebar-item active/g, '<a href="dashboard.html" class="sidebar-item');
layoutTop = layoutTop.replace(/<a href="send-sms\.html" class="sidebar-item([^"]*)">/g, '<a href="send-sms.html" class="sidebar-item block px-3 py-2 rounded-lg text-xs font-bold text-blue-600 bg-blue-50">');
layoutTop = layoutTop.replace(/<div class="ml-7 mt-1 space-y-0.5 border-l border-gray-100 pl-2 hidden" id="sms-submenu">/g, '<div class="ml-7 mt-1 space-y-0.5 border-l border-gray-100 pl-2" id="sms-submenu">');

// Grab content from send-sms
let bodyContent = sendsms.match(/<!-- Page Title & Top Actions -->[\s\S]*/)[0];

let newHtml = layoutTop + bodyContent;
fs.writeFileSync('send-sms.html', newHtml);

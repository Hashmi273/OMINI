const fs = require('fs');
let html = fs.readFileSync('rcs-campaign.html', 'utf8');

// Replace Step 1 entirely
const step1Regex = /<!-- Step 1: Campaign Details -->[\s\S]*?<!-- Step 2: Settings -->/;

const newStep1 = `<!-- Step 1: RCS Campaign Details -->
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
    <div class="flex items-start mb-6">
        <div class="h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</div>
        <div>
            <h3 class="text-base font-bold text-gray-900 leading-none mt-1">RCS Campaign Details</h3>
            <p class="text-xs text-gray-500 mt-1">Configure your rich media bot campaign.</p>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
            <label class="block text-xs font-bold text-gray-700 mb-1.5">Campaign Name <span class="text-red-500">*</span></label>
            <input type="text" placeholder="e.g. Diwali Mega Sale" class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
        </div>
        <div>
            <label class="block text-xs font-bold text-gray-700 mb-1.5">Bot (RCS Agent) <span class="text-red-500">*</span></label>
            <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white">
                <option>Zion_Official_Bot</option>
                <option>Zion_Alerts</option>
            </select>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
            <label class="block text-xs font-bold text-gray-700 mb-1.5">Template Type <span class="text-red-500">*</span></label>
            <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white">
                <option>Normal Card (Text only)</option>
                <option>Rich Card (Image/Video + Buttons)</option>
                <option>Carousel (Multiple Rich Cards)</option>
            </select>
        </div>
        <div>
            <label class="block text-xs font-bold text-gray-700 mb-1.5">Approved RCS Template <span class="text-red-500">*</span></label>
            <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white">
                <option>Select Template</option>
                <option>Diwali Promo (Rich Card)</option>
                <option>Welcome Alert (Normal Card)</option>
            </select>
        </div>
    </div>

    <div class="mb-5 relative">
        <label class="block text-xs font-bold text-gray-700 mb-1.5">Recipients <span class="text-red-500">*</span></label>
        
        <!-- Recipient Method Tabs -->
        <div class="flex gap-2 mb-3 border-b border-gray-100 pb-2">
            <button type="button" onclick="switchRecipient('group')" class="px-3 py-1 text-xs text-purple-600 font-bold border-b-2 border-purple-600 transition-colors tab-recip" id="tab-group">
                <i class="fa-solid fa-users mr-1"></i> Select Group
            </button>
            <button type="button" onclick="switchRecipient('paste')" class="px-3 py-1 text-xs text-gray-500 transition-colors tab-recip" id="tab-paste">
                <i class="fa-solid fa-paste mr-1"></i> Paste Numbers
            </button>
            <button type="button" onclick="switchRecipient('upload')" class="px-3 py-1 text-xs text-gray-500 transition-colors tab-recip" id="tab-upload">
                <i class="fa-solid fa-file-upload mr-1"></i> Upload File
            </button>
        </div>

        <!-- Select Group -->
        <div id="div-group" class="recip-content block animate-fade-in-up">
            <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50">
                <option value="">-- Choose a Saved Group --</option>
                <option>Diwali VIP Customers (45,210 contacts)</option>
            </select>
            <p class="text-[10px] text-gray-500 mt-1.5"><a href="groups.html" class="text-purple-600 font-bold hover:underline">Manage Contacts & Groups &rarr;</a></p>
        </div>

        <!-- Paste Numbers -->
        <div id="div-paste" class="recip-content hidden animate-fade-in-up">
            <textarea rows="3" placeholder="919876543210&#10;919876543211" class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50 resize-y font-mono text-gray-600"></textarea>
            <p class="text-[10px] text-gray-400 mt-1">Comma or line separated numbers.</p>
        </div>

        <!-- Upload File -->
        <div id="div-upload" class="recip-content hidden animate-fade-in-up">
            <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex flex-col items-center">
                <i class="fa-solid fa-file-csv text-xl text-gray-400 mb-1"></i>
                <span class="text-xs font-bold text-gray-700">Browse or drop CSV/TXT</span>
                <input type="file" class="hidden">
            </div>
        </div>
        
        <script>
            function switchRecipient(mode) {
                document.querySelectorAll('.recip-content').forEach(el => el.classList.add('hidden'));
                document.querySelectorAll('.tab-recip').forEach(el => {
                    el.className = 'px-3 py-1 text-xs text-gray-500 transition-colors tab-recip';
                });
                document.getElementById('div-' + mode).classList.remove('hidden');
                document.getElementById('tab-' + mode).className = 'px-3 py-1 text-xs text-purple-600 font-bold border-b-2 border-purple-600 transition-colors tab-recip';
            }
        </script>
    </div>

    <!-- Additional Settings (Duplicate, Schedule) -->
    <div class="flex flex-wrap items-center gap-6 mb-5 pt-3 border-t border-gray-100">
        <label class="flex items-center cursor-pointer group">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500" checked>
            <span class="ml-2 text-xs font-bold text-gray-700 group-hover:text-purple-600 transition-colors">Remove Duplicate Numbers</span>
        </label>
        
        <label class="flex items-center cursor-pointer group">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500" id="scheduleToggle" onchange="document.getElementById('scheduleDiv').classList.toggle('hidden', !this.checked)">
            <span class="ml-2 text-xs font-bold text-gray-700 group-hover:text-purple-600 transition-colors">Schedule Campaign</span>
        </label>
    </div>
    
    <!-- Schedule DateTime Picker (Hidden by default) -->
    <div id="scheduleDiv" class="hidden mb-5 p-4 bg-purple-50 border border-purple-100 rounded-lg animate-fade-in-up shadow-inner">
        <label class="block text-xs font-bold text-purple-900 mb-2">Select Date & Time <span class="text-red-500">*</span></label>
        <div class="flex gap-3">
            <input type="date" class="block w-full px-3 py-2 border border-purple-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white text-purple-800">
            <input type="time" class="block w-full px-3 py-2 border border-purple-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white text-purple-800">
        </div>
    </div>

    <div class="mb-2">
        <div class="flex justify-between items-end mb-1.5">
            <label class="block text-xs font-bold text-gray-700">Variable Values <span class="text-gray-400 font-normal">(If required by RCS template)</span></label>
        </div>
        <textarea rows="3" placeholder="e.g. {#var1#} = John, {#var2#} = 50%" class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 resize-y bg-gray-50 font-mono"></textarea>
    </div>
</div>

<!-- Step 2: Settings -->`;

if (step1Regex.test(html)) {
    html = html.replace(step1Regex, newStep1);
    console.log("Successfully replaced Step 1");
} else {
    console.log("Failed to match Step 1 regex!");
}

// Ensure the Step 2 circle is purple
html = html.replace(/<div class="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">2<\/div>/, '<div class="h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</div>');

// Replace Fallback Step Content to include variables input.
// Let's use a simpler match that we know works. The fallback is inside the `Fallback Journey (Optional)` section.
// Wait, the fallback is in "Step 3" inside the fallback container. Let's just find the SMS fallback div.
const smsFallbackRegex = /<h4 class="text-xs font-bold text-gray-900 mb-2">Configure SMS Fallback<\/h4>[\s\S]*?<\/div>\s*<\/div>\s*<!-- Step 3/;

const newFallback = `<h4 class="text-xs font-bold text-gray-900 mb-2">Configure Fallback Channel</h4>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-[11px] font-bold text-gray-600 mb-1">Select Fallback Route</label>
                                <select class="block w-full px-2 py-1.5 border border-gray-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-purple-500">
                                    <option>SMS (Transactional)</option>
                                    <option>WhatsApp Business API</option>
                                    <option>OBD Voice Call</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-600 mb-1">Select Fallback Template</label>
                                <div class="flex gap-2">
                                    <select class="block w-full px-2 py-1.5 border border-gray-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-purple-500">
                                        <option>Select Approved Template...</option>
                                        <option>Diwali SMS Text Only</option>
                                        <option>WhatsApp Promo Template</option>
                                    </select>
                                    <button class="bg-gray-100 text-gray-600 px-3 rounded text-xs hover:bg-gray-200"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-600 mb-1">Fallback Template Variables</label>
                                <textarea rows="2" placeholder="e.g. {#var1#} = Customer" class="block w-full px-2 py-1.5 border border-gray-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 font-mono"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Step 3`;

if (smsFallbackRegex.test(html)) {
    html = html.replace(smsFallbackRegex, newFallback);
    console.log("Successfully replaced Fallback block");
} else {
    console.log("Failed to match Fallback regex!");
}

// Also change the blue buttons to purple on the rest of the page if there are any left.
// Note: Only replace specific color names in class attributes so we don't accidentally break things.
html = html.replace(/bg-blue-600/g, 'bg-purple-600');
html = html.replace(/hover:bg-blue-700/g, 'hover:bg-purple-700');
html = html.replace(/text-blue-500/g, 'text-purple-500');
html = html.replace(/text-blue-600/g, 'text-purple-600');
html = html.replace(/bg-blue-50/g, 'bg-purple-50');
html = html.replace(/hover:bg-blue-100/g, 'hover:bg-purple-100');
html = html.replace(/border-blue-200/g, 'border-purple-200');
html = html.replace(/ring-blue-500/g, 'ring-purple-500');

fs.writeFileSync('rcs-campaign.html', html);

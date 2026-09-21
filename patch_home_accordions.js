const fs = require('fs');
let html = fs.readFileSync('home.html', 'utf8');

const rcsChecklist = `
<!-- RCS Document Checklist -->
<div class="bg-white rounded-2xl border border-gray-200 mb-8 shadow-sm overflow-hidden">
    <!-- Accordion Header -->
    <div class="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors" onclick="document.getElementById('rcs-docs-content').classList.toggle('hidden'); document.getElementById('rcs-chevron').classList.toggle('rotate-180')">
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xl mr-4 shrink-0">
                <i class="fa-brands fa-google"></i>
            </div>
            <div>
                <h2 class="text-lg font-bold text-gray-900 mb-0.5">Required list of documents to apply for RCS</h2>
                <p class="text-xs text-gray-500">Click to view the mandatory requirements for Google RCS Business Messaging.</p>
            </div>
        </div>
        <div class="mt-4 md:mt-0 flex items-center shrink-0">
            <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-300" id="rcs-chevron"></i>
        </div>
    </div>

    <!-- Accordion Content (Hidden by default) -->
    <div id="rcs-docs-content" class="hidden border-t border-gray-100 p-6 bg-gray-50/30 animate-fade-in-up">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <!-- Doc 1 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-purple-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                    <i class="fa-solid fa-briefcase"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Brand Name & Use Case</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed">The exact Display Name for your RCS Bot, and a detailed description of how the bot will be used to interact with customers.</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-briefcase"></i>
                </div>
            </div>

            <!-- Doc 2 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-purple-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                    <i class="fa-solid fa-globe"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Brand Website</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed">A live, functioning website representing your brand that matches the requested RCS Display Name.</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-globe"></i>
                </div>
            </div>

            <!-- Doc 3 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-purple-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                    <i class="fa-solid fa-link"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Privacy & ToS URLs</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed">Active links to your brand's official Privacy Policy and Terms of Service (must be hosted on your website).</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-link"></i>
                </div>
            </div>

            <!-- Doc 4 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-purple-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                    <i class="fa-solid fa-envelope-circle-check"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Authorized Contact</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed">The Full Name, Title, Email Address (company domain preferred), and Phone Number of your brand representative.</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-envelope-circle-check"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- WhatsApp Document Checklist -->
<div class="bg-white rounded-2xl border border-gray-200 mb-8 shadow-sm overflow-hidden">
    <!-- Accordion Header -->
    <div class="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors" onclick="document.getElementById('wa-docs-content').classList.toggle('hidden'); document.getElementById('wa-chevron').classList.toggle('rotate-180')">
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-green-50 text-[#25D366] flex items-center justify-center text-xl mr-4 shrink-0">
                <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div>
                <h2 class="text-lg font-bold text-gray-900 mb-0.5">Required list of documents to apply for Meta WhatsApp</h2>
                <p class="text-xs text-gray-500">Click to view the mandatory requirements for official WhatsApp Business API verification.</p>
            </div>
        </div>
        <div class="mt-4 md:mt-0 flex items-center shrink-0">
            <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-300" id="wa-chevron"></i>
        </div>
    </div>

    <!-- Accordion Content (Hidden by default) -->
    <div id="wa-docs-content" class="hidden border-t border-gray-100 p-6 bg-gray-50/30 animate-fade-in-up">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <!-- Doc 1 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-green-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-green-50 text-[#25D366] flex items-center justify-center text-lg mb-4">
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Facebook Business Manager (FBM)</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed">An active FBM account. To send high-volume campaigns, the FBM must be officially verified by Meta.</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-brands fa-facebook"></i>
                </div>
            </div>

            <!-- Doc 2 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-green-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-green-50 text-[#25D366] flex items-center justify-center text-lg mb-4">
                    <i class="fa-solid fa-file-invoice"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Meta Verification Document</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed">Certificate of Incorporation, GST, or a Utility Bill that exactly matches the legal business name and address in FBM.</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-file-invoice"></i>
                </div>
            </div>

            <!-- Doc 3 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-green-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-green-50 text-[#25D366] flex items-center justify-center text-lg mb-4">
                    <i class="fa-solid fa-phone-slash"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Unregistered Phone Number</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed mb-3">A valid phone number that is capable of receiving OTPs and is NOT currently active on the WhatsApp consumer app.</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-phone-slash"></i>
                </div>
            </div>

            <!-- Doc 4 -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 flex flex-col relative overflow-hidden group hover:border-green-300 transition-colors shadow-sm">
                <div class="w-10 h-10 rounded-full bg-green-50 text-[#25D366] flex items-center justify-center text-lg mb-4">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mb-1">Display Name Proof</h3>
                <p class="text-xs text-gray-500 flex-1 leading-relaxed">The requested Display Name must have a clear relationship to your business and match your FBM legal name or website branding.</p>
                <div class="absolute -bottom-4 -right-4 text-gray-100 text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// Inject right after the DLT Accordion
// The DLT accordion ends with:
// </div>
// </div>
// </main> (Wait, it's followed by </main>)
// Actually, let's find the specific closing div of the DLT accordion.

// The DLT Checklist HTML structure ends like this:
//         <div class="mt-5 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
//             <i class="fa-solid fa-circle-info text-blue-500 mt-0.5 mr-3"></i>
//             <p class="text-[11px] text-blue-800 font-medium leading-relaxed">After gathering these documents, you need to register on any of the telecom operator DLT portals (Jio, Airtel, Vi, BSNL, Videocon). Once approved, you will receive a unique Principal Entity (PE) ID, which you must register in the ZION DLT Dashboard.</p>
//         </div>
//     </div>
// </div>

const injectRegex = /(<p class="text-\[11px\] text-blue-800 font-medium leading-relaxed">After gathering these documents.*?<\/div>\s*<\/div>\s*<\/div>)/;

if (injectRegex.test(html)) {
    html = html.replace(injectRegex, '$1\n\n' + rcsChecklist);
    fs.writeFileSync('home.html', html);
    console.log("Success");
} else {
    console.log("Failed to match injection point");
}

const fs = require('fs');
let html = fs.readFileSync('home.html', 'utf8');

// The Modals have a body section ending in </div>\n    </div>\n</div> (Body -> Modal Content -> Modal Wrapper)
// Let's find the info box or the grid end in each modal and inject the footer.

// 1. DLT Modal
// Finds the closing div of the info box inside dlt-modal
html = html.replace(
    /(<div class="mt-5 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">[\s\S]*?<\/div>)\s*(<\/div>\s*<\/div>\s*<\/div>\s*<!-- RCS Modal -->)/,
    `$1\n            <div class="mt-6 pt-5 border-t border-gray-100 flex justify-end">\n                <a href="https://wa.me/918858674541?text=Hi,%20I%20have%20the%20documents%20ready%20and%20would%20like%20to%20apply%20for%20DLT%20Registration." target="_blank" class="bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center">\n                    <i class="fa-brands fa-whatsapp mr-2 text-lg"></i> Apply Now via WhatsApp\n                </a>\n            </div>\n$2`
);

// 2. RCS Modal
// RCS Modal doesn't have an info box, it just ends with the grid's closing div.
html = html.replace(
    /(<div id="rcs-modal"[\s\S]*?<div class="grid grid-cols-1 md:grid-cols-2 gap-5">[\s\S]*?<\/div>\s*<\/div>)\s*(<\/div>\s*<\/div>\s*<\/div>\s*<!-- WA Modal -->)/,
    `$1\n            <div class="mt-6 pt-5 border-t border-gray-100 flex justify-end">\n                <a href="https://wa.me/918858674541?text=Hi,%20I%20have%20the%20documents%20ready%20and%20would%20like%20to%20apply%20for%20RCS%20Business%20Messaging." target="_blank" class="bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center">\n                    <i class="fa-brands fa-whatsapp mr-2 text-lg"></i> Apply Now via WhatsApp\n                </a>\n            </div>\n$2`
);

// 3. WA Modal
html = html.replace(
    /(<div id="wa-modal"[\s\S]*?<div class="grid grid-cols-1 md:grid-cols-2 gap-5">[\s\S]*?<\/div>\s*<\/div>)\s*(<\/div>\s*<\/div>\s*<\/div>\s*<\/body>)/,
    `$1\n            <div class="mt-6 pt-5 border-t border-gray-100 flex justify-end">\n                <a href="https://wa.me/918858674541?text=Hi,%20I%20have%20the%20documents%20ready%20and%20would%20like%20to%20apply%20for%20Meta%20WhatsApp%20API." target="_blank" class="bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center">\n                    <i class="fa-brands fa-whatsapp mr-2 text-lg"></i> Apply Now via WhatsApp\n                </a>\n            </div>\n$2`
);

fs.writeFileSync('home.html', html);
console.log("Success");

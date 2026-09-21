const fs = require('fs');

let html = fs.readFileSync('send-sms.html', 'utf8');

// 1. Add OBD to all options
html = html.replace(/<option value="wa">WhatsApp<\/option>/g, '<option value="wa">WhatsApp</option>\n                            <option value="obd">OBD (Voice)</option>');

// 2. Add Step 4
const step4 = `
                    <div class="hidden md:flex flex-col items-center text-gray-400 mt-8">
                        <span class="text-[9px] font-bold text-red-400 mb-1">If Failed</span>
                        <i class="fa-solid fa-arrow-right-long text-xl"></i>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex flex-col items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm w-full md:w-56 relative z-10 hover:border-blue-300 transition-colors h-full justify-start">
                        <div class="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex justify-center items-center shadow-inner mb-3" id="icon-step4">
                            <i class="fa-solid fa-plus text-lg"></i>
                        </div>
                        <select class="block w-full px-2 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold text-gray-700 text-center shadow-sm" onchange="autoSwitchPreview('step4', this.value)">
                            <option value="none">Select Step 4</option>
                            <option value="rcs">RCS Message</option>
                            <option value="wa">WhatsApp</option>
                            <option value="obd">OBD (Voice)</option>
                        </select>
                        <div id="template-step4" class="w-full mt-3 hidden animate-fade-in-up">
                            <label class="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Choose Template</label>
                            <button onclick="openTemplateModal('step4')" class="flex justify-between items-center w-full px-2 py-2 border border-gray-200 bg-white rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold text-gray-700 shadow-sm hover:border-blue-400 transition-colors"><span id="selected-template-step4">-- Browse Templates --</span><i class="fa-solid fa-magnifying-glass text-blue-500"></i></button>
                            <div id="vars-step4" class="w-full mt-2 hidden text-left animate-fade-in-up"></div>
                        </div>
                    </div>
`;

// Insert Step 4 before the closing of the flex row container
// The original code has:
//                              <div id="vars-step3" class="w-full mt-2 hidden text-left animate-fade-in-up"></div>
//                          </div>
//                      </div>
//
//                  </div>
//              </div>
//          </div>
//
//          <div class="flex justify-end gap-3 pb-6">
// So we insert it before the closing </div></div></div>
html = html.replace(/(<\/div>\s*<\/div>\s*<\/div>\s*)(<div class="flex justify-end gap-3 pb-6">)/, step4 + '\n$1$2');


// 3. Add OBD Mockup
const obdMockup = `
                    <div id="ui-obd" class="absolute inset-0 w-full h-full flex flex-col bg-gray-900 opacity-0 pointer-events-none transition-opacity duration-300">
                        <div class="flex justify-between items-center px-5 pt-2 text-[11px] font-medium text-white z-10">
                            <span>9:41</span>
                            <div class="flex space-x-1.5 items-center">
                                <i class="fa-solid fa-signal text-[9px]"></i><i class="fa-solid fa-wifi text-[9px]"></i><i class="fa-solid fa-battery-full text-[12px]"></i>
                            </div>
                        </div>
                        <div class="flex-1 flex flex-col items-center justify-center relative">
                            <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-80"></div>
                            <div class="z-10 flex flex-col items-center mt-[-40px]">
                                <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 border-2 border-gray-600 shadow-xl">
                                    <i class="fa-solid fa-user text-3xl text-gray-400"></i>
                                </div>
                                <h3 class="text-white font-medium text-lg mb-1">ZION Alert</h3>
                                <p class="text-gray-400 text-sm mb-8">00:14</p>
                                
                                <div class="flex gap-1 mb-12">
                                    <div class="w-1.5 h-6 bg-green-400 rounded-full animate-pulse"></div>
                                    <div class="w-1.5 h-10 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0.1s"></div>
                                    <div class="w-1.5 h-5 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                                    <div class="w-1.5 h-8 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0.3s"></div>
                                    <div class="w-1.5 h-4 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                                </div>
                            </div>
                        </div>
                    </div>
`;

// Insert obdMockup precisely at the end of ui-rcs, before the closing tags
html = html.replace(/(<\/div>\s*<\/div>\s*<\/div>\s*)(<div class="bg-blue-50 rounded-lg p-3 flex items-start border border-blue-100">)/, obdMockup + '\n$1$2');


// 4. Update the Templates selectors in Step 2 and 3
html = html.replace(/<select class="block w-full px-2 py-1.5 border border-gray-200 bg-gray-50 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium text-gray-700" onchange="handleTemplateVariables\('step2', this.value\)">[\s\S]*?<\/select>/, '<button onclick="openTemplateModal(\'step2\')" class="flex justify-between items-center w-full px-2 py-2 border border-gray-200 bg-white rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold text-gray-700 shadow-sm hover:border-blue-400 transition-colors"><span id="selected-template-step2">-- Browse Templates --</span><i class="fa-solid fa-magnifying-glass text-blue-500"></i></button>');
html = html.replace(/<select class="block w-full px-2 py-1.5 border border-gray-200 bg-gray-50 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium text-gray-700" onchange="handleTemplateVariables\('step3', this.value\)">[\s\S]*?<\/select>/, '<button onclick="openTemplateModal(\'step3\')" class="flex justify-between items-center w-full px-2 py-2 border border-gray-200 bg-white rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold text-gray-700 shadow-sm hover:border-blue-400 transition-colors"><span id="selected-template-step3">-- Browse Templates --</span><i class="fa-solid fa-magnifying-glass text-blue-500"></i></button>');

// 5. Fix onchange attributes
html = html.replace(/onchange="autoSwitchPreview\(this.value\); handleTemplateVariables\('step2', this.nextElementSibling.querySelector\('select'\).value\)"/g, 'onchange="autoSwitchPreview(\'step2\', this.value)"');
html = html.replace(/onchange="autoSwitchPreview\(this.value\); handleTemplateVariables\('step3', this.nextElementSibling.querySelector\('select'\).value\)"/g, 'onchange="autoSwitchPreview(\'step3\', this.value)"');
html = html.replace(/onchange="autoSwitchPreview\(this.value\)"/g, 'onchange="autoSwitchPreview(\'step2\', this.value)"');

// 6. Inject switchPreviewTab('obd') button
html = html.replace(/<button onclick="switchPreviewTab\('rcs'\)" id="tab-rcs"[^>]*>[\s\S]*?<\/button>/, `$&
                <button onclick="switchPreviewTab('obd')" id="tab-obd" class="px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-gray-100 text-gray-500 hover:bg-gray-200">
                    <i class="fa-solid fa-phone-volume mr-1"></i> OBD
                </button>`);

// 7. Inject JS and Modal BEFORE </body>
const jsBlock = `
<script>
    function updateAvailableOptions() {
        const i2 = document.querySelector('#icon-step2');
        const i3 = document.querySelector('#icon-step3');
        const i4 = document.querySelector('#icon-step4');
        const s2 = i2 ? i2.nextElementSibling : null;
        const s3 = i3 ? i3.nextElementSibling : null;
        const s4 = i4 ? i4.nextElementSibling : null;
        
        const selects = [s2, s3, s4].filter(s => s !== null);
        const selectedValues = selects.map(s => s.value).filter(v => v !== 'none');
        
        selects.forEach(select => {
            Array.from(select.options).forEach(option => {
                if(option.value !== 'none') {
                    if(selectedValues.includes(option.value) && select.value !== option.value) {
                        option.style.display = 'none';
                        option.disabled = true;
                    } else {
                        option.style.display = '';
                        option.disabled = false;
                    }
                }
            });
        });
    }

    function autoSwitchPreview(step, channel) {
        const iconDiv = document.getElementById('icon-' + step);
        const templateDiv = document.getElementById('template-' + step);
        
        if (iconDiv && channel !== 'none') {
            iconDiv.className = 'w-10 h-10 rounded-full flex justify-center items-center shadow-inner mb-3 ';
            if (channel === 'rcs') {
                iconDiv.className += 'bg-purple-50 text-purple-600';
                iconDiv.innerHTML = '<i class="fa-brands fa-google text-lg"></i>';
                templateDiv.classList.remove('hidden');
                switchPreviewTab('rcs');
            } else if (channel === 'wa') {
                iconDiv.className += 'bg-green-50 text-[#25D366]';
                iconDiv.innerHTML = '<i class="fa-brands fa-whatsapp text-xl"></i>';
                templateDiv.classList.remove('hidden');
                switchPreviewTab('wa');
            } else if (channel === 'obd') {
                iconDiv.className += 'bg-orange-50 text-orange-500';
                iconDiv.innerHTML = '<i class="fa-solid fa-phone-volume text-xl"></i>';
                templateDiv.classList.remove('hidden');
                switchPreviewTab('obd');
            }
        } else if (iconDiv && channel === 'none') {
            iconDiv.className = 'w-10 h-10 rounded-full flex justify-center items-center shadow-inner mb-3 bg-gray-50 text-gray-600';
            iconDiv.innerHTML = '<i class="fa-solid fa-plus text-lg"></i>';
            templateDiv.classList.add('hidden');
        }
    }

    function switchPreviewTab(channel) {
        ['sms', 'wa', 'rcs', 'obd'].forEach(c => {
            const btn = document.getElementById('tab-' + c);
            if(!btn) return;
            if(c === channel) {
                btn.className = 'px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-blue-100 text-blue-700 shadow-inner';
            } else {
                btn.className = 'px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-gray-100 text-gray-500 hover:bg-gray-200';
            }
        });

        ['sms', 'wa', 'rcs', 'obd'].forEach(c => {
            const ui = document.getElementById('ui-' + c);
            if(!ui) return;
            if(c === channel) {
                ui.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                ui.classList.add('opacity-0', 'pointer-events-none');
            }
        });
    }

    function handleTemplateVariables(step, templateId) {
        const varsContainer = document.getElementById('vars-' + step);
        if (!varsContainer) return;
        
        varsContainer.innerHTML = '';
        
        if (templateId === 't2') { 
            varsContainer.innerHTML = '\\n                <div class="bg-blue-50/70 border border-blue-100 rounded-lg p-2 shadow-sm">\\n                    <p class="text-[9px] font-bold text-blue-800 mb-1.5 border-b border-blue-100 pb-1">Fill Variables</p>\\n                    <div class="flex items-center gap-2 mb-1.5">\\n                        <span class="text-[9px] font-bold text-gray-500 w-6">v1</span>\\n                        <input type="text" placeholder="e.g. John" class="flex-1 text-[10px] px-1.5 py-1 border border-gray-200 rounded shadow-inner focus:outline-none focus:border-blue-400 bg-white">\\n                    </div>\\n                    <div class="flex items-center gap-2">\\n                        <span class="text-[9px] font-bold text-gray-500 w-6">v2</span>\\n                        <input type="text" placeholder="e.g. 4589" class="flex-1 text-[10px] px-1.5 py-1 border border-gray-200 rounded shadow-inner focus:outline-none focus:border-blue-400 bg-white">\\n                    </div>\\n                </div>\\n            ';
            varsContainer.classList.remove('hidden');
        } else if (templateId === 't3') { 
            varsContainer.innerHTML = '\\n                <div class="bg-blue-50/70 border border-blue-100 rounded-lg p-2 shadow-sm">\\n                    <p class="text-[9px] font-bold text-blue-800 mb-1.5 border-b border-blue-100 pb-1">Fill Variables</p>\\n                    <div class="flex items-center gap-2">\\n                        <span class="text-[9px] font-bold text-gray-500 w-6">v1</span>\\n                        <input type="text" placeholder="e.g. Server X" class="flex-1 text-[10px] px-1.5 py-1 border border-gray-200 rounded shadow-inner focus:outline-none focus:border-blue-400 bg-white">\\n                    </div>\\n                </div>\\n            ';
            varsContainer.classList.remove('hidden');
        } else {
            varsContainer.classList.add('hidden');
        }
    }

    let currentStepForTemplate = null;
    function openTemplateModal(step) {
        currentStepForTemplate = step;
        document.getElementById('templateModal').classList.remove('hidden');
    }
    function closeTemplateModal() {
        document.getElementById('templateModal').classList.add('hidden');
    }
    function selectTemplate(templateId, templateName) {
        if (!currentStepForTemplate) return;
        document.getElementById('selected-template-' + currentStepForTemplate).innerText = templateName;
        closeTemplateModal();
        handleTemplateVariables(currentStepForTemplate, templateId);
        updateAvailableOptions();
    }
    function filterTemplates(search) {
        search = search.toLowerCase();
        const cards = document.querySelectorAll('.template-card');
        cards.forEach(card => {
            const name = card.querySelector('.template-name').innerText.toLowerCase();
            if(name.includes(search)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const steps = ['step2', 'step3', 'step4'];
        steps.forEach(step => {
            const iconDiv = document.getElementById('icon-' + step);
            if (iconDiv) {
                const select = iconDiv.nextElementSibling;
                if (select && select.value && select.value !== 'none') {
                    autoSwitchPreview(step, select.value);
                }
            }
        });
        updateAvailableOptions();
    });
</script>
`;

const modalHTML = `
<!-- Template Gallery Modal -->
<div id="templateModal" class="hidden fixed inset-0 z-[110] flex items-center justify-center">
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onclick="closeTemplateModal()"></div>
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl z-10 flex flex-col h-[80vh] m-4 overflow-hidden animate-fade-in-up">
        
        <!-- Header -->
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <div>
                <h3 class="text-lg font-bold text-gray-900 flex items-center">
                    <i class="fa-solid fa-layer-group text-blue-600 mr-2"></i> Template Library
                </h3>
                <p class="text-[11px] text-gray-500 mt-0.5">Search and preview from 40+ approved templates</p>
            </div>
            <button onclick="closeTemplateModal()" class="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- Toolbar -->
        <div class="px-6 py-3 border-b border-gray-100 flex gap-4 items-center bg-white">
            <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                <input type="text" placeholder="Search by name or category..." onkeyup="filterTemplates(this.value)" class="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
            </div>
            <div class="flex gap-2">
                <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold cursor-pointer border border-blue-100">All</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold cursor-pointer hover:bg-gray-200">Promotional</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold cursor-pointer hover:bg-gray-200">Transactional</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold cursor-pointer hover:bg-gray-200">Alerts</span>
            </div>
        </div>

        <!-- Grid -->
        <div class="flex-1 overflow-y-auto p-6 bg-gray-50/50">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5" id="templateGrid">
                
                <!-- Template Card 1 -->
                <div class="template-card bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer" onclick="selectTemplate('t1', 'Diwali Promo')">
                    <div class="p-4 flex-1">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-bold text-gray-900 text-sm template-name">Diwali Promo</h4>
                            <span class="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">Approved</span>
                        </div>
                        <div class="mb-3 text-[10px] text-gray-500 font-medium">Category: Promotional</div>
                        <div class="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <p class="text-xs text-gray-600 leading-relaxed font-mono">Enjoy a flat 50% discount on all purchases over &#8377;1999. Use code DIWALI50.</p>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
                        <span class="text-[10px] font-bold text-gray-500 group-hover:text-blue-600">0 Variables</span>
                        <i class="fa-solid fa-arrow-right text-gray-400 group-hover:text-blue-600"></i>
                    </div>
                </div>

                <!-- Template Card 2 -->
                <div class="template-card bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer" onclick="selectTemplate('t2', 'OTP Auth')">
                    <div class="p-4 flex-1">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-bold text-gray-900 text-sm template-name">OTP Auth</h4>
                            <span class="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">Approved</span>
                        </div>
                        <div class="mb-3 text-[10px] text-gray-500 font-medium">Category: Transactional</div>
                        <div class="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <p class="text-xs text-gray-600 leading-relaxed font-mono">Hi {{v1}}, your OTP for login is {{v2}}. Do not share this with anyone.</p>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
                        <span class="text-[10px] font-bold text-purple-600 group-hover:text-blue-600"><i class="fa-solid fa-cube mr-1"></i> 2 Variables</span>
                        <i class="fa-solid fa-arrow-right text-gray-400 group-hover:text-blue-600"></i>
                    </div>
                </div>

                <!-- Template Card 3 -->
                <div class="template-card bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer" onclick="selectTemplate('t3', 'Alert Msg')">
                    <div class="p-4 flex-1">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-bold text-gray-900 text-sm template-name">Alert Msg</h4>
                            <span class="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">Approved</span>
                        </div>
                        <div class="mb-3 text-[10px] text-gray-500 font-medium">Category: Alerts</div>
                        <div class="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <p class="text-xs text-gray-600 leading-relaxed font-mono">Alert: {{v1}} is down. Please check immediately.</p>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
                        <span class="text-[10px] font-bold text-purple-600 group-hover:text-blue-600"><i class="fa-solid fa-cube mr-1"></i> 1 Variable</span>
                        <i class="fa-solid fa-arrow-right text-gray-400 group-hover:text-blue-600"></i>
                    </div>
                </div>
                
                <!-- Template Card 4 -->
                <div class="template-card bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col h-full cursor-pointer" onclick="selectTemplate('t4', 'Voice Call Alert')">
                    <div class="p-4 flex-1">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-bold text-gray-900 text-sm template-name">Voice Call Alert</h4>
                            <span class="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">Approved</span>
                        </div>
                        <div class="mb-3 text-[10px] text-gray-500 font-medium">Category: OBD Script</div>
                        <div class="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-center">
                            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                                <i class="fa-solid fa-play"></i>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
                        <span class="text-[10px] font-bold text-gray-500 group-hover:text-blue-600">0 Variables</span>
                        <i class="fa-solid fa-arrow-right text-gray-400 group-hover:text-blue-600"></i>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
`;

// Remove original old script and replace with our super script + modal
html = html.replace(/<script>[\s\S]*<\/script>/, jsBlock + '\n' + modalHTML);

fs.writeFileSync('send-sms.html', html);

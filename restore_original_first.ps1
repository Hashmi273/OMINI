$Layout = (Get-Content summary-report.html -TotalCount 106) -join "`n"

$SendSmsContent = @'
<!-- Page Title & Top Actions -->
<div class="mb-6 flex justify-between items-start">
    <div>
        <div class="flex items-center text-sm text-gray-500 mb-2">
            <a href="index.html" class="hover:text-blue-600">SMS</a>
            <i class="fa-solid fa-chevron-right text-[10px] mx-2"></i>
            <span class="text-blue-600 font-medium">Send SMS</span>
        </div>
        <h1 class="text-2xl font-bold text-gray-900 tracking-tight">Send SMS Campaign</h1>
        <p class="text-[13px] text-gray-500 mt-1">Create and send your SMS campaign in a few simple steps.</p>
    </div>
    
    <div class="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
        <div class="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
            <i class="fa-solid fa-wallet"></i>
        </div>
        <div>
            <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">SMS Balance</p>
            <p class="text-base font-bold text-gray-900 leading-tight">12,450</p>
        </div>
    </div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
    
    <!-- Left Column (Form) -->
    <div class="lg:col-span-2 space-y-6">
        
        <!-- Step 1: Campaign Details -->
        <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div class="flex items-start mb-6">
                <div class="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</div>
                <div>
                    <h3 class="text-base font-bold text-gray-900 leading-none mt-1">Campaign Details</h3>
                    <p class="text-xs text-gray-500 mt-1">Enter campaign information and message content.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                    <label class="block text-xs font-bold text-gray-700 mb-1.5">Campaign Name <span class="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter campaign name" class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 mb-1.5">Route <span class="text-red-500">*</span></label>
                    <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Transactional</option>
                        <option>Promotional</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 mb-1.5">Sender ID <span class="text-red-500">*</span></label>
                    <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Select Sender ID</option>
                        <option>ZIONXX</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                    <label class="block text-xs font-bold text-gray-700 mb-1.5">Template</label>
                    <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Select Template</option>
                        <option>OTP Auth</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 mb-1.5">Group</label>
                    <select class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Select Group</option>
                        <option>Customers</option>
                    </select>
                </div>
                <div class="flex items-end">
                    <button class="w-full px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded text-sm font-semibold hover:bg-blue-100 transition-colors flex items-center justify-center h-[38px]">
                        <i class="fa-solid fa-upload mr-2"></i> Upload File
                    </button>
                </div>
            </div>

            <div class="mb-5 relative">
                <label class="block text-xs font-bold text-gray-700 mb-1.5">Paste Numbers <span class="text-gray-400 font-normal">(comma or line separated)</span></label>
                <textarea rows="3" placeholder="e.g. 919876543210, 919876543211..." class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y"></textarea>
            </div>

            <div class="mb-2">
                <div class="flex justify-between items-end mb-1.5">
                    <label class="block text-xs font-bold text-gray-700">Message Text <span class="text-red-500">*</span></label>
                    <span class="text-[10px] text-gray-400 font-medium">0 / 160 characters | 0 SMS</span>
                </div>
                <textarea rows="4" placeholder="Type your message here..." class="block w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y"></textarea>
                
                <div class="flex justify-end mt-2">
                    <button class="text-[11px] text-gray-500 hover:text-blue-600 font-medium flex items-center">
                        Insert Variable <i class="fa-solid fa-chevron-down ml-1 text-[9px]"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Step 2: Settings -->
        <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div class="flex items-start mb-6">
                <div class="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</div>
                <div>
                    <h3 class="text-base font-bold text-gray-900 leading-none mt-1">Campaign Settings</h3>
                    <p class="text-xs text-gray-500 mt-1">Configure delivery settings for this campaign.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                
                <div class="flex items-start space-x-3">
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mt-0.5">
                        <input type="checkbox" name="toggle1" id="toggle1" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer checked:right-0 checked:border-blue-500"/>
                        <label for="toggle1" class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-800 leading-tight">Dynamic SMS</p>
                        <p class="text-[10px] text-gray-500">Enable variables</p>
                    </div>
                </div>
                
                <div class="flex items-start space-x-3">
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mt-0.5">
                        <input type="checkbox" name="toggle2" id="toggle2" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer checked:right-0 checked:border-blue-500"/>
                        <label for="toggle2" class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-800 leading-tight">Flash SMS</p>
                        <p class="text-[10px] text-gray-500">Deliver as flash</p>
                    </div>
                </div>

                <div class="flex items-start space-x-3">
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mt-0.5">
                        <input type="checkbox" name="toggle3" id="toggle3" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer checked:right-0 checked:border-blue-500"/>
                        <label for="toggle3" class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-800 leading-tight">Tiny Campaign</p>
                        <p class="text-[10px] text-gray-500">Send batches</p>
                    </div>
                </div>

                <div class="flex items-start space-x-3">
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mt-0.5">
                        <input type="checkbox" name="toggle4" id="toggle4" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer checked:right-0 checked:border-blue-500"/>
                        <label for="toggle4" class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-800 leading-tight">Schedule</p>
                        <p class="text-[10px] text-gray-500">Set date & time</p>
                    </div>
                </div>
                
                <div class="flex items-start space-x-3">
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mt-0.5">
                        <input type="checkbox" name="toggleFallback" id="toggleFallback" onchange="document.getElementById('fallback-journey-ui').classList.toggle('hidden')" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer checked:right-0 checked:border-blue-500"/>
                        <label for="toggleFallback" class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-blue-600 leading-tight">Fallback Journey</p>
                        <p class="text-[10px] text-gray-500">Route if fails</p>
                    </div>
                </div>

            </div>

            <!-- Fallback Journey UI -->
            <div id="fallback-journey-ui" class="hidden mt-6 pt-6 border-t border-gray-100 animate-fade-in-up">
                <h4 class="text-sm font-bold text-gray-800 mb-4 flex items-center">
                    <i class="fa-solid fa-route text-blue-600 mr-2"></i> Design Fallback Journey
                </h4>
                
                <div class="flex flex-col md:flex-row items-start justify-center gap-4 bg-gray-50/50 p-6 rounded-xl border border-gray-100 relative">
                    
                    <!-- Start Point -->
                    <div class="flex flex-col items-center bg-white p-4 rounded-xl border-2 border-blue-200 shadow-sm w-full md:w-40 relative z-10 h-full">
                        <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex justify-center items-center shadow-inner mb-2">
                            <i class="fa-solid fa-comment-sms text-lg"></i>
                        </div>
                        <span class="text-xs font-bold text-gray-800">Step 1: SMS</span>
                        <span class="text-[9px] text-gray-400 font-semibold mt-0.5 uppercase tracking-wider">Starting Point</span>
                    </div>
                    
                    <div class="hidden md:flex flex-col items-center text-gray-400 mt-8">
                        <span class="text-[9px] font-bold text-red-400 mb-1">If Failed</span>
                        <i class="fa-solid fa-arrow-right-long text-xl"></i>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex flex-col items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm w-full md:w-56 relative z-10 hover:border-blue-300 transition-colors h-full justify-start">
                        <div class="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex justify-center items-center shadow-inner mb-3" id="icon-step2">
                            <i class="fa-solid fa-plus text-lg"></i>
                        </div>
                        <select class="block w-full px-2 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold text-gray-700 text-center shadow-sm" onchange="autoSwitchPreview(this.value); handleTemplateVariables('step2', this.nextElementSibling.querySelector('select').value)">
                            <option value="none">Select Step 2</option>
                            <option value="rcs">RCS Message</option>
                            <option value="wa">WhatsApp</option>
                        </select>
                        <div id="template-step2" class="w-full mt-3 hidden animate-fade-in-up">
                            <label class="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Choose Template</label>
                            <select class="block w-full px-2 py-1.5 border border-gray-200 bg-gray-50 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium text-gray-700" onchange="handleTemplateVariables('step2', this.value)">
                                <option value="">-- Select Template --</option>
                                <option value="t1">Diwali Promo</option>
                                <option value="t2">OTP Auth (2 Vars)</option>
                                <option value="t3">Alert Msg (1 Var)</option>
                            </select>
                            <div id="vars-step2" class="w-full mt-2 hidden text-left animate-fade-in-up"></div>
                        </div>
                    </div>
                    
                    <div class="hidden md:flex flex-col items-center text-gray-400 mt-8">
                        <span class="text-[9px] font-bold text-red-400 mb-1">If Failed</span>
                        <i class="fa-solid fa-arrow-right-long text-xl"></i>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex flex-col items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm w-full md:w-56 relative z-10 hover:border-blue-300 transition-colors h-full justify-start">
                        <div class="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex justify-center items-center shadow-inner mb-3" id="icon-step3">
                            <i class="fa-solid fa-plus text-lg"></i>
                        </div>
                        <select class="block w-full px-2 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold text-gray-700 text-center shadow-sm" onchange="autoSwitchPreview(this.value); handleTemplateVariables('step3', this.nextElementSibling.querySelector('select').value)">
                            <option value="none">Select Step 3</option>
                            <option value="rcs">RCS Message</option>
                            <option value="wa">WhatsApp</option>
                        </select>
                        <div id="template-step3" class="w-full mt-3 hidden animate-fade-in-up">
                            <label class="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Choose Template</label>
                            <select class="block w-full px-2 py-1.5 border border-gray-200 bg-gray-50 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium text-gray-700" onchange="handleTemplateVariables('step3', this.value)">
                                <option value="">-- Select Template --</option>
                                <option value="t1">Diwali Promo</option>
                                <option value="t2">OTP Auth (2 Vars)</option>
                                <option value="t3">Alert Msg (1 Var)</option>
                            </select>
                            <div id="vars-step3" class="w-full mt-2 hidden text-left animate-fade-in-up"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="flex justify-end gap-3 pb-6">
            <button class="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-colors">Cancel</button>
            <button class="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors flex items-center">
                <i class="fa-solid fa-paper-plane mr-2"></i> Send Campaign
            </button>
        </div>
    </div>

    <!-- Right Column (Preview) -->
    <div class="lg:col-span-1">
        <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-6">
            
            <div class="flex items-start mb-6">
                <div class="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-3 shrink-0">
                    <i class="fa-regular fa-eye"></i>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-gray-900 mt-1">Message Preview</h3>
                    <p class="text-[10px] text-gray-500 mt-0.5">See how your message will look on a mobile phone.</p>
                </div>
            </div>

            <!-- Preview Tabs -->
            <div class="flex justify-center mb-4 space-x-2">
                <button onclick="switchPreviewTab('sms')" id="tab-sms" class="px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-blue-100 text-blue-700 shadow-inner">
                    <i class="fa-solid fa-comment-sms mr-1"></i> SMS
                </button>
                <button onclick="switchPreviewTab('wa')" id="tab-wa" class="px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-gray-100 text-gray-500 hover:bg-gray-200">
                    <i class="fa-brands fa-whatsapp mr-1"></i> WhatsApp
                </button>
                <button onclick="switchPreviewTab('rcs')" id="tab-rcs" class="px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-gray-100 text-gray-500 hover:bg-gray-200">
                    <i class="fa-brands fa-google mr-1"></i> RCS
                </button>
            </div>

            <div class="flex justify-center mb-6">
                <div class="phone-mockup relative w-[280px] h-[500px] bg-white overflow-hidden mx-auto shadow-xl border-4 border-gray-800 rounded-[2.5rem]">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-50"></div>
                    
                    <div id="ui-sms" class="absolute inset-0 w-full h-full flex flex-col bg-white transition-opacity duration-300">
                        <div class="flex justify-between items-center px-5 pt-2 text-[11px] font-medium text-gray-800">
                            <span>9:41</span>
                            <div class="flex space-x-1.5 items-center">
                                <i class="fa-solid fa-signal text-[9px]"></i><i class="fa-solid fa-wifi text-[9px]"></i><i class="fa-solid fa-battery-full text-[12px]"></i>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center py-4 border-b border-gray-100 mt-2">
                            <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mb-1"><i class="fa-solid fa-user text-xl"></i></div>
                            <p class="text-[11px] font-bold text-gray-800">VM-ZIONXX</p>
                        </div>
                        <div class="p-3 bg-white flex-1 overflow-y-auto">
                            <div class="text-[9px] text-center text-gray-400 mb-4 mt-2">Today 9:41 AM</div>
                            <div class="bg-[#e9ecef] rounded-2xl rounded-tl-sm p-3 inline-block max-w-[85%] shadow-sm">
                                <p class="text-[11px] text-gray-800 leading-relaxed font-sans">Dear Customer, your message will appear here.</p>
                            </div>
                        </div>
                    </div>

                    <div id="ui-wa" class="absolute inset-0 w-full h-full flex flex-col bg-[#efeae2] opacity-0 pointer-events-none transition-opacity duration-300">
                        <div class="flex justify-between items-center px-5 pt-2 text-[11px] font-medium text-white bg-[#075e54]">
                            <span>9:41</span>
                            <div class="flex space-x-1.5 items-center">
                                <i class="fa-solid fa-signal text-[9px]"></i><i class="fa-solid fa-wifi text-[9px]"></i><i class="fa-solid fa-battery-full text-[12px]"></i>
                            </div>
                        </div>
                        <div class="flex items-center px-2 py-3 bg-[#075e54] text-white shadow-md z-10">
                            <i class="fa-solid fa-arrow-left text-[12px] mr-1"></i>
                            <div class="w-8 h-8 rounded-full bg-white flex justify-center items-center overflow-hidden mr-2">
                                <img src="https://ui-avatars.com/api/?name=Zion&background=128C7E&color=fff" class="w-full h-full">
                            </div>
                            <div class="flex-1">
                                <h3 class="text-[12px] font-bold leading-tight">Zion Digital <i class="fa-solid fa-circle-check text-[9px] ml-0.5 text-green-300"></i></h3>
                                <p class="text-[8px] opacity-90">Official Business Account</p>
                            </div>
                            <div class="flex space-x-3 text-[12px] px-2"><i class="fa-solid fa-video"></i><i class="fa-solid fa-phone"></i><i class="fa-solid fa-ellipsis-vertical"></i></div>
                        </div>
                        <div class="p-3 flex-1 overflow-y-auto" style="background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'); background-size: cover;">
                            <div class="text-[9px] text-center text-gray-500 mb-3 mt-1 bg-white/80 rounded-md px-2 py-1 w-max mx-auto shadow-sm">Today</div>
                            <div class="bg-white rounded-xl rounded-tl-sm p-1.5 inline-block w-[95%] shadow-sm relative">
                                <div class="absolute -left-1.5 top-0 w-3 h-3 bg-white transform rotate-45"></div>
                                <div class="relative z-10">
                                    <img src="https://images.unsplash.com/photo-1605371924599-2d0365da26f5?w=400&q=80" class="w-full h-28 object-cover rounded-lg mb-1.5" alt="Promo">
                                    <div class="px-1">
                                        <h4 class="text-[12px] font-bold text-gray-800 leading-tight mb-1">🎉 Mega Diwali Offer!</h4>
                                        <p class="text-[11px] text-gray-600 leading-snug mb-1">Enjoy a flat 50% discount on all purchases over &#8377;1999. Use code DIWALI50.</p>
                                        <div class="text-right text-[8px] text-gray-400 mb-1">9:42 AM <i class="fa-solid fa-check-double text-blue-400 ml-0.5"></i></div>
                                    </div>
                                    <div class="border-t border-gray-100 pt-1.5 mt-1 text-center bg-gray-50 rounded-b-lg">
                                        <span class="text-[11px] text-[#00a884] font-semibold flex items-center justify-center py-1"><i class="fa-solid fa-up-right-from-square mr-1.5 text-[10px]"></i> Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="ui-rcs" class="absolute inset-0 w-full h-full flex flex-col bg-white opacity-0 pointer-events-none transition-opacity duration-300">
                        <div class="flex justify-between items-center px-5 pt-2 text-[11px] font-medium text-gray-800 bg-white">
                            <span>9:41</span>
                            <div class="flex space-x-1.5 items-center">
                                <i class="fa-solid fa-signal text-[9px]"></i><i class="fa-solid fa-wifi text-[9px]"></i><i class="fa-solid fa-battery-full text-[12px]"></i>
                            </div>
                        </div>
                        <div class="flex items-center px-3 py-3 border-b border-gray-200 mt-2 z-10 bg-white shadow-sm">
                            <i class="fa-solid fa-arrow-left text-[14px] text-gray-600 mr-3"></i>
                            <div class="w-9 h-9 rounded-full bg-blue-100 flex justify-center items-center overflow-hidden mr-3">
                                <span class="text-blue-600 font-bold text-[12px]">Z</span>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-[13px] font-bold text-gray-900 leading-tight flex items-center">Zion Digital <i class="fa-solid fa-shield-check text-blue-500 text-[10px] ml-1"></i></h3>
                                <p class="text-[9px] text-gray-500">Verified Business</p>
                            </div>
                            <i class="fa-solid fa-magnifying-glass text-[12px] text-gray-600"></i>
                        </div>
                        <div class="p-3 bg-white flex-1 overflow-y-auto">
                            <div class="text-[9px] text-center text-gray-400 mb-3 mt-1 font-medium uppercase tracking-wider">Today 9:41 AM</div>
                            <div class="bg-white rounded-2xl p-0 inline-block w-[95%] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden mx-auto ml-1">
                                <img src="https://images.unsplash.com/photo-1605371924599-2d0365da26f5?w=400&q=80" class="w-full h-32 object-cover" alt="Promo">
                                <div class="p-3">
                                    <h4 class="text-[13px] font-bold text-gray-900 leading-tight mb-1.5">Mega Diwali Offer!</h4>
                                    <p class="text-[11px] text-gray-600 leading-relaxed mb-3">Enjoy a flat 50% discount on all purchases over &#8377;1999. Use code DIWALI50.</p>
                                    <div class="flex gap-2">
                                        <button class="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-[10px] font-bold py-2 rounded-full transition-colors border border-blue-200 shadow-sm">Shop Now</button>
                                        <button class="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-[10px] font-bold py-2 rounded-full transition-colors border border-gray-200 shadow-sm">View Offers</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-blue-50 rounded-lg p-3 flex items-start border border-blue-100">
                <i class="fa-solid fa-circle-info text-blue-500 mt-0.5 mr-2 text-sm"></i>
                <p class="text-[10px] text-blue-800 leading-tight">
                    <span class="font-bold">1 SMS = 160 characters (GSM-7)</span><br>
                    Non-GSM characters may use multiple SMS.
                </p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</main>

<style>
    .toggle-checkbox:checked { right: 0; border-color: #3b82f6; }
    .toggle-checkbox:checked + .toggle-label { background-color: #3b82f6; }
</style>

<script>
    function autoSwitchPreview(channel) {
        const iconDivId = event.target.id === 'icon-step2' ? 'step2' : 'step3';
        const stepId = event.target.closest('.flex-col').querySelector('select').id || event.target.closest('.flex-col').parentElement.id;
        
        // Find which step this is based on event target
        let step = 'step2';
        if (event.target.closest('div').id === 'template-step3' || event.target.closest('div').parentElement.id === 'template-step3') {
            step = 'step3';
        }

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
            }
        } else if (iconDiv && channel === 'none') {
            iconDiv.className = 'w-10 h-10 rounded-full flex justify-center items-center shadow-inner mb-3 bg-gray-50 text-gray-600';
            iconDiv.innerHTML = '<i class="fa-solid fa-plus text-lg"></i>';
            templateDiv.classList.add('hidden');
        }
    }

    function switchPreviewTab(channel) {
        // Update Tabs Styling
        ['sms', 'wa', 'rcs'].forEach(c => {
            const btn = document.getElementById('tab-' + c);
            if(c === channel) {
                btn.className = 'px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-blue-100 text-blue-700 shadow-inner';
            } else {
                btn.className = 'px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-gray-100 text-gray-500 hover:bg-gray-200';
            }
        });

        // Toggle UI layers
        ['sms', 'wa', 'rcs'].forEach(c => {
            const ui = document.getElementById('ui-' + c);
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
            varsContainer.innerHTML = `
                <div class="bg-blue-50/70 border border-blue-100 rounded-lg p-2 shadow-sm">
                    <p class="text-[9px] font-bold text-blue-800 mb-1.5 border-b border-blue-100 pb-1">Fill Variables</p>
                    <div class="flex items-center gap-2 mb-1.5">
                        <span class="text-[9px] font-bold text-gray-500 w-6">v1</span>
                        <input type="text" placeholder="e.g. John" class="flex-1 text-[10px] px-1.5 py-1 border border-gray-200 rounded shadow-inner focus:outline-none focus:border-blue-400 bg-white">
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[9px] font-bold text-gray-500 w-6">v2</span>
                        <input type="text" placeholder="e.g. 4589" class="flex-1 text-[10px] px-1.5 py-1 border border-gray-200 rounded shadow-inner focus:outline-none focus:border-blue-400 bg-white">
                    </div>
                </div>
            `;
            varsContainer.classList.remove('hidden');
        } else if (templateId === 't3') { 
            varsContainer.innerHTML = `
                <div class="bg-blue-50/70 border border-blue-100 rounded-lg p-2 shadow-sm">
                    <p class="text-[9px] font-bold text-blue-800 mb-1.5 border-b border-blue-100 pb-1">Fill Variables</p>
                    <div class="flex items-center gap-2">
                        <span class="text-[9px] font-bold text-gray-500 w-6">v1</span>
                        <input type="text" placeholder="e.g. Server X" class="flex-1 text-[10px] px-1.5 py-1 border border-gray-200 rounded shadow-inner focus:outline-none focus:border-blue-400 bg-white">
                    </div>
                </div>
            `;
            varsContainer.classList.remove('hidden');
        } else {
            varsContainer.classList.add('hidden');
        }
    }
</script>
</body>
</html>
'@

$FinalContent = $Layout + "`n" + $SendSmsContent
Set-Content send-sms.html -Value $FinalContent
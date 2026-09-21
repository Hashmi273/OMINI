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
                    // Disable if it is selected in another dropdown
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

        updateAvailableOptions();
    }

    function switchPreviewTab(channel) {
        ['sms', 'wa', 'rcs', 'obd'].forEach(c => {
            const btn = document.getElementById('tab-' + c);
            if (!btn) return;
            if(c === channel) {
                btn.className = 'px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-blue-100 text-blue-700 shadow-inner';
            } else {
                btn.className = 'px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors bg-gray-100 text-gray-500 hover:bg-gray-200';
            }
        });

        ['sms', 'wa', 'rcs', 'obd'].forEach(c => {
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
<!-- Template Gallery Modal -->


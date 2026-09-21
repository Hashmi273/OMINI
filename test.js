
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        zionBlue: '#0070f3',
                        zionLightBlue: '#eef5ff',
                        zionDarkText: '#111827',
                        zionGrayText: '#6b7280',
                        zionBorder: '#e5e7eb',
                        zionBg: '#f8fafc',
                    }
                }
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


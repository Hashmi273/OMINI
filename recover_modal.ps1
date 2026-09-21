$script = @'
const fs = require('fs');
const lines = fs.readFileSync('C:\\Users\\Admin\\.gemini\\antigravity\\brain\\de8373cd-1241-484a-b83e-f63563af75b2\\.system_generated\\logs\\transcript_full.jsonl', 'utf8').split('\n');
for (const line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (const tc of obj.tool_calls) {
                if (tc.name === 'run_command' && tc.args.CommandLine && tc.args.CommandLine.includes('Template Gallery Modal')) {
                    fs.writeFileSync('c:\\Users\\Admin\\Desktop\\cpass\\recover_modal.ps1', tc.args.CommandLine);
                }
            }
        }
    } catch(e) {}
}
'@
Set-Content extract.js -Value $script
node extract.js
(function() {
    "use strict";
    let fs = require('fs');
    function SettingTemplate(template_path, setting_path) {
        "use strict";
        if(!fs.existsSync(setting_path)) {
            fs.writeFileSync(setting_path, fs.readFileSync(template_path));
        }
    }
    module.exports = SettingTemplate;
})();
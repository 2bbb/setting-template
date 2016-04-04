(function() {
    "use strict";
    let fs = require('fs');
    function SettingTemplate(template_path_or_object, setting_path) {
        "use strict";
        if (!fs.existsSync(setting_path)) {
            if(typeof template_path_or_object == 'string') {
                fs.writeFileSync(setting_path, fs.readFileSync(template_path));
            } else {
                fs.writeFileSync(setting_path, JSON.stringify(template_path_or_object, null, "\t"));
            }
        }
    }
    module.exports = SettingTemplate;
})();
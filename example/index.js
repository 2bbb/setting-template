var setting_template = require('../index.js');
setting_template(__dirname + '/setting_template.js', __dirname + '/setting.js');
setting_template({
    foo: 'foo',
    bar: 1
}, __dirname + '/setting_from_json.json');

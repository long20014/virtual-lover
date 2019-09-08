var view = require('../routes/v-view.js');
var auth = require('../routes/v-auth.js');
var admin = require('../routes/v-admin.js');
var enterprise = require('../routes/v-enterprise.js');
var student = require('../routes/v-student.js');

var api_admin = require('../routes/api-admin.js');
var api_auth = require('../routes/api-auth.js');
var api_enterprise = require('../routes/api-enterprise.js');
var api_student = require('../routes/api-student.js');

module.exports = function (app) {

    // UI
    app.use('/', view);
    app.use('/auth', auth);
    app.use('/admin', admin);
    app.use('/enterprise', enterprise);
    app.use('/student', student);

    // API
    app.use('/api', api_admin);
    app.use('/api/auth/', api_auth);
    app.use('/api/enterprises/', api_enterprise);
    app.use('/api/students/', api_student);


};



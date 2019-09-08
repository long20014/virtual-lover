var express = require('express');
var router = express.Router();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

router.get('/api', async function(req, res, next) {
	res.send('APIS');
})

module.exports = router;
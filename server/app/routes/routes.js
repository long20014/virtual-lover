var express = require('express');
var router = express.Router();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

router.get('/', async function(req, res, next) {
	res.render('index.ejs')
})

module.exports = router;
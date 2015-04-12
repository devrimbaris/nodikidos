var express = require('express');
var router = express.Router();
var esanlamlilar = require('./esanlam_data.js');

/* GET home page. */


console.log (esanlamlilar.data);



router.get('/', function(req, res, next) {
    res.render('esanlam', { title: esanlamlilar.data });
});

module.exports = router;

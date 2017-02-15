var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digvijay ' });
});



/* GET home page. */
router.get('/About_Me', function(req, res, next) {
    res.render('About_Me' );
});


/* GET home page. */
router.get('/Contact', function(req, res, next) {
    res.render('Contact' );
});
/* GET home page. */
router.get('/Projects', function(req, res, next) {
    res.render('Projects' );
});/* GET home page. */
router.get('/Services', function(req, res, next) {
    res.render('Services' );
});


module.exports = router;

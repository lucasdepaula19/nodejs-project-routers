var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('form');
});

router.post('/', function (req, res, next) {
    res.render('process-form', req.body);
});
module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/:name/:lastName', function(req, res, next) {
  const name = req.params.name
  const lastName = req.params.lastName
res.render('names', { name: `${name} ${lastName}` });
});

module.exports = router;
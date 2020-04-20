var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  let user = req.params.id
  res.send(`respond with a resource of user ${user}`)
});

module.exports = router;

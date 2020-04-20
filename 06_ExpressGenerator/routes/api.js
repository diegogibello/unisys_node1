var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send(data)
});

router.get('/:id', function(req, res, next) {
    let id = req.params.id
    let userNum = data.find( item => item.id == id)
    res.send(data[userNum])
  });

router.post('/', function(req, res, next) {
     const newUser = req.body
     newUser.id = newID()
     data.push(newUser)
    res.send(data[data.length])
  });

  router.put('/:id', function(req, res, next) {
    let userNum = data.find( item => item.id == id)
    data[user] = req.body
    res.send(msg)
  });
  
  router.delete('/:id', function(req, res, next) {
    let userNum = data.find( item => item.id == id)
    data.splice(userNum, 1)
   res.send({})
 });

module.exports = router;

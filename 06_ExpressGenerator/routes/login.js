var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  let msg = "Acceso no permitido"
    if(req.query.nombre  === 'Diego'){
        msg = `Saludos${req.query.nombre}`
  }
  res.send(msg)
});

router.post('/', function(req, res, next) {
    let msg = "Nos falta tu correo"
      if(req.body.email){
          msg = `Mensaje enviado a ${req.body.email}`
    }
    res.send(msg)
  });
  

module.exports = router;

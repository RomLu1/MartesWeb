var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModels = require('../models/novedadesModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto');
});
router.post('/', async(req, res, next) => {
var nombre = req.body.nombre;
 var mensaje = req.body.mensaje;
var email = req.body.email;
var telefono = req.body.telefono;  
console.log(req.body)

var obj = {
  to: 'lucila.romeo03@gmail.com',
  subject:'Contacto Web',
  html: nombre+ "Se contactó a través de la web para obtener más información en este correto : "+ email + ".<br> y este telefono: "+telefono 
  + "y este es su mensaje" + mensaje
}
var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth:{
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS

  }
 
});
var info = await transport.sendMail(obj);
res.render('contacto', {
  message: 'Mensaje enviado'
});
});

module.exports = router;

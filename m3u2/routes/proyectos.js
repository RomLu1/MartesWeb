var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Soy la pagina de proyectos');
});

module.exports = router;

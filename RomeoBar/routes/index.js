var express = require('express');
var router = express.Router();
var novedadesModels = require('../models/novedadesModel');


/* GET home page. */
router.get('/',  async function(req, res, next) {
  var novedades = await novedadesModels.getNovedades();
  res.render('index',{
    novedades
  });
});

module.exports = router;

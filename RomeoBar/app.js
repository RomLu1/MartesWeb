var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session');
var pool = require('./models/bd')
var indexRouter = require('./routes/index');
var contactoRouter = require('./routes/contacto');
var loginRouter = require ('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '12l32s1584sc5sdfcdc2',
  resave: false,
  saveUninitialized:true
  
}))


//paginas privadas
secured = async(req, res,next)=>{
  try{
    console.log(req.session.id_usuario); //si esta registrado pasa
    if(req.session.id_usuario){
      next();
    }else{ //si no esta registrado no pasa
      res.redirect('/admin/login')
    }
  }catch(error){
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured,  adminRouter);


pool.query("select * from login"). then(function(resultados){
  console.log(resultados);
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

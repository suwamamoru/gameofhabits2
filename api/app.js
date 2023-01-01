'use strict';

const express = require('express'),
      app = express(),
      router = require('./routes/index'),
      createError = require('http-errors'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      expressSession = require('express-session'),
      cors = require('cors');

// CORS setup
const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secretKey'));
app.use(
  expressSession({
    secret: 'secretKey',
    cookie: {
      maxAge: 30 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
  })
);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

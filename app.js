var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var fileUpload = require('express-fileupload')
var logger = require('morgan');

var indexRouter = require('./routes/index');

// Environment Configuration
require("dotenv").config();

// Database Connection
require("./config/database");

var app = express();
app.use(fileUpload());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/v1', indexRouter);

app.use(express.static("build"));
app.use(express.static("storage"));

app.get('*', (req, res) => {
  const path = require('path');
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

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

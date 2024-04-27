const config = require('./config.js');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const users = require('./app/users');
const products = require('./app/products')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log(`Api is running on a ${config.NODE_ENV} environment.`);
app.get('/', function(req, res){
  res.json({
    message: 'it works!'
  });
});
app.use('/', [users, products]);
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  let errorMessage ={};
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;

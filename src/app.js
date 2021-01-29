const createError = require('http-errors');
const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const apiRouter = require('./routes/api/apiRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);
app.use('/api', apiRouter);



app.listen (3000, () =>
    console.log('servidor corriendo en 3000!!!')
);

module.exports = app;

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors')

require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



const apiRouter = require('./routes/api/apiRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/api', apiRouter);
app.use('/', indexRouter);



app.listen (3000, () =>
    console.log('servidor corriendo en 3000!!!')
);

module.exports = app;

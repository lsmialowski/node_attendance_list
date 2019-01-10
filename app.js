const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require ('./lib/db/database');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const lectionsRouter = require('./src/routes/lection');

const app = express();
db.connect();
db.connectionTest();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lection', lectionsRouter);
module.exports = app;

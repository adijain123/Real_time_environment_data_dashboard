const express = require('express');
const path = require('path');
const { fetchData } = require('./dataFetcher');
const indexRouter = require('./routes');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

module.exports = app;

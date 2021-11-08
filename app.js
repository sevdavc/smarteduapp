const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const pageRouter = require('./routes/pageRouter');
const courseRouter = require('./routes/courseRouter');
const { json } = require('express');

const app = express();

//Connection to DB
mongoose
  .connect('mongodb://localhost/smartedu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected.'))
  .catch(() => console.log('Failed to connect db'));

//Template engine
app.set('view engine', 'ejs');

//Static file
app.use(express.static('public'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', pageRouter);
app.use('/courses', courseRouter);

//Port
app.listen(5000, () => {
  console.log('port started.');
});

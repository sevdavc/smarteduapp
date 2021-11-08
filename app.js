const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const pageRouter = require('./routes/pageRouter');

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

//Routes
app.use('/', pageRouter);

//Port
app.listen(5000, () => {
  console.log('port started.');
});

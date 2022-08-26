//jshint esversion:6
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', function (err) {
  console.log(err);
});

db.once('open', function () {
  console.log('Connected to Database');
});

//TODO

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter)

app.listen(3000, function () {
  console.log('Server started on port 3000');
});

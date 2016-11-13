const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const usersController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');
// const server = require('http').Server(app);

const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client'));

app.use('/api/users', usersController);

app.use('/api/sessions', sessionsController);

app.listen(PORT, () => {
  console.log('It\'s Alive!!');
});

module.exports = app;

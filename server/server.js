const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const handlers = require('./controllers/controllers.js');
// const server = require('http').Server(app);

const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client'));

app.listen(PORT, () => {
  console.log('It\'s Alive!!');
});

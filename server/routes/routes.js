const express = require('express');
const router = express.Router();
const path = require('path');

// Add in a route for each react view
router.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.get('/home', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.get('/chat', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.get('/signup', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

module.exports = router;

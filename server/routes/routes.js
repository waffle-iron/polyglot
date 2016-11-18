const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;

// Add in a route for each react view
router.get('/', (req, res) => {
  console.log('ITS HITTING THE INDEX');  
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.get('/splash', (req, res) => {
  console.log('req.user^^^^', req.user);
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.get('/nav/chat', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.get('/signup', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

module.exports = router;

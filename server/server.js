const express = require('express');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const app = express();
const path = require('path');
const db = require('../db/controllers/controllers.js');
const usersController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');
const viewRouter = require('./routes/routes');
const strategy = require('./auth/fBStrategy');

const PORT = 8000;

app.use('/api/users', usersController);
app.use('/api/sessions', sessionsController);
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(express.static('client'));
app.use('/', viewRouter);
app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy.fBStrategy);

passport.serializeUser(strategy.serialize);
passport.deserializeUser(strategy.deSerialize);

app.get('/login/facebook', strategy.handleAuthReturn);

app.get('/login/facebook/return', strategy.handleAuth, strategy.handleAuthCB);

app.get('/profile', require('connect-ensure-login').ensureLoggedIn(), strategy.ensure);

app.listen(PORT, () => {
  console.log('It\'s Alive!!');
});

module.exports = app;

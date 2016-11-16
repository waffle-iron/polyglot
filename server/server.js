const express = require('express');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const keys = require('./config/keys.js');
const app = express();

const usersController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');

const viewRouter = require('./routes/routes');


const PORT = 8000;


passport.use(new Strategy({
    clientID: keys.CLIENT_ID,
    clientSecret: keys.CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {

    return cb(null, profile);
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(express.static('client'));

// Define routes.
// app.get('/', function(req, res) {
//     res.render('home', { user: req.user });
//   });

app.get('/login', function(req, res){
    res.render('login');
  });

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile', require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });


app.use(express.static('client'));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Define routes.
app.use('/', viewRouter);

app.use('/api/users', usersController);

app.use('/api/sessions', sessionsController);

app.listen(PORT, () => {
  console.log('It\'s Alive!!');
});

module.exports = app;

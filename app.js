/**  
 * Module dependencies.  
 */ 
var express  = require('express'); 
var bodyParser = require('body-parser');
var connect = require('connect'); 
var app      = express(); 
var port     = process.env.PORT || 4200;  

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '793729558350-58etvsoelqbc8pi5lknlven67esr03vh.apps.googleusercontent.com',
    clientSecret: 'jjgBcDv28Uqz-VaEueBX4Gwb',
    callbackURL: "http://localhost:4200/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, {toke: accessToken});
    //    User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //      return done(err, user);
    //    });
  }
));

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/');
    }
);

// Configuration 
// app.use(express.static(__dirname + '/public')); 
// app.use(connect.logger('dev')); 
// app.use(connect.json()); 
// app.use(connect.urlencoded());  


app.use(express.static('public'));

var cookieParser = require('cookie-parser')
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

app.use(passport.initialize());
app.use(passport.session());



// Routes  

//require('./routes/routes.js')(app);  

app.get('/', function(req, res) {       
    res.send('<a href="/auth/google">Sign In with Google</a>');
});

app.listen(port);  

console.log('The App runs on port ' + port);
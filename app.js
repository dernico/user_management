/**  
 * Module dependencies.  
 */ 
var express  = require('express'); 
var bodyParser = require('body-parser');
var connect = require('connect'); 
var app      = express(); 
var port     = process.env.PORT || 4200;
var cors = require('cors');

var passport = require('passport');
var google = require('googleapis');
var jwt = require('jsonwebtoken');
var gsecrets = require('./clientSecret').client;
var models = require('./config/models');
var userbl = require('./bl/usersbl');
var planbl = require('./bl/planbl');

var _clientSecret = gsecrets.client_secret;
var _clientID = gsecrets.client_id;
var _callbackURL = gsecrets.redirect_uri;

var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
    _clientID,
    _clientSecret,
    _callbackURL
  );


  
app.get(
    '/auth/google',
    function(req, res){
          
          // generate a url that asks permissions for Google+ and Google Calendar scopes
          var scopes = [
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/calendar',
            //'https://www.googleapis.com/auth/userinfo.profile', 
            //'https://www.googleapis.com/auth/userinfo.email'
          ];
          
          var url = oauth2Client.generateAuthUrl({
            // 'online' (default) or 'offline' (gets refresh_token)
            access_type: 'offline',
            // If you only need one scope you can pass it as a string
            scope: scopes,
          });
          res.redirect(url);
    }
);

app.get('/auth/google/callback', 
    function(req, res) {
        var code = req.query.code;
        oauth2Client.getToken(code, function (err, tokens) {
            // Now tokens contains an access_token and an optional refresh_token. Save them.
            // tokens.access_token
            // tokens.id_token
            // tokens.expiry_date
            // tokens.refresh_token
            // tokens.token_type
            if (!err) {
              oauth2Client.setCredentials(tokens);
            }
            var auth = google.oauth2('v2');
            auth.userinfo.get({auth: oauth2Client}, function(err, data){
              
              var authProvider = 'google';
              var payload = {id: data.id , authProvider: authProvider};
              var token = jwt.sign(payload, gsecrets.jwt_secret,
                {
                  //expiresIn: '1h'
                });

              var user = new models.user({
                authProvider: authProvider,
                authProviderId: data.id,
                displayName : data.name,     
                firstname: data.given_name,
                lastname: data.family_name,
                gender: data.gender,
                picture: data.picture,
                tokens: tokens,
                jwt: token
              });
              userbl.createOrUpdate(user, function(err, data){
                res.redirect('http://localhost:4000/callback?access_token=' + token);
              });
            });
          });
    }
);

app.use(cors());
app.use(express.static('public'));

// var cookieParser = require('cookie-parser')
// app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var session = require('express-session');
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }));

//app.use(passport.session());
app.use(passport.initialize());

var http = require('https');

var BearerStrategy = require('passport-http-bearer').Strategy;
passport.use(new BearerStrategy(
    function(token, done) {

      jwt.verify(token, gsecrets.jwt_secret, function(err, decoded) {
        if(err){
          done(err);
        }else{
          var query = {
            authProviderId: decoded.id, 
            authProvider: decoded.authProvider, 
            jwt: token};
          userbl.findByQuery(query, function(err, user){
            done(err, user);
          });
        }
      });
      // oauth2Client.getRequestMetadata(null, function(){

      // });
      // var options = {
      //     host: 'www.googleapis.com',
      //     path: '/oauth2/v3/tokeninfo?access_token=' + token
      //   };
        
      //   http.get(options, function(resp) {
      //     var data = '';
      //     resp.on('data', (chunk) => {
      //         data += chunk;
      //     });
            
      //     // The whole response has been received. Print out the result.
      //     resp.on('end', () => {
      //         var json = JSON.parse(data);
      //         console.log(data);
      //         done(null, json);
      //     });
      //   }).on('error', function(e) {
      //     console.log("Got error: " + e.message);
      //   });
    }
  ));

// Routes  

//require('./routes/routes.js')(app);  

app.get('/', function(req, res) {       
    res.send('<a href="/auth/google">Sign In with Google</a>');
});

app.get('/plannings', passport.authenticate('bearer', { session: false }) ,
    function(req, res) {
        planbl.getPlannings(req.user._id, function(err, plannings){
          if(err){
            res.json(err);
            return;
          }
          res.json(plannings);
        });
    }
);

app.post('/plannings', passport.authenticate('bearer', { session: false }) ,
function(req, res) {
  planbl.createPlanning(req.user._id, req.body, function(err, planning){
    res.json(planning);
  });
});

/*
var calendar = google.calendar('v3');
        var tokens = {
            access_token: req.user.tokens.access_token,
            id_token: req.user.tokens.id_token,
            expiry_date: req.user.tokens.expiry_date,
            refresh_token: req.user.tokens.refresh_token,
            token_type: req.user.tokens.token_type
        }
        oauth2Client.setCredentials(tokens);
        calendar.events.list({
          auth: oauth2Client,
          calendarId: 'primary',
          timeMin: (new Date()).toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: 'startTime'
        }, function(err, response) {
          if (err) {
            console.log('The API returned an error: ' + err);
            res.send({error: err});
            return;
          }
          var events = response.items;
          if (events.length == 0) {
            console.log('No upcoming events found.');
          } 
          else 
          {
            console.log('Upcoming 10 events:');
            for (var i = 0; i < events.length; i++) {
              var event = events[i];
              var start = event.start.dateTime || event.start.date;
              console.log('%s - %s', start, event.summary);
            }
          }

          res.send(events);
        });
*/
app.get('/test', passport.authenticate('bearer', { session: false }) ,
    function(req, res) {
        res.send(req.user.profile);
    }
);

// app.get('/test', passport.authenticate('jwt', { session: false }) ,
// function(req, res) {
//     res.send(req.user.profile);
// }
// );

app.listen(port);  

console.log('The App runs on port ' + port);
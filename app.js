/**  
 * Module dependencies.  
 */ 
var express  = require('express'); 
var bodyParser = require('body-parser');
var app      = express(); 
var port     = process.env.PORT || 4200;
var cors = require('cors');
var formidable = require('formidable');

var passport = require('passport');
var google = require('googleapis');
var jwt = require('jsonwebtoken');
var path = require('path');

var models = require('./config/models');
var register = require('./config/register');
var login = require('./config/login');
var userbl = require('./bl/usersbl');
var planbl = require('./bl/planbl');
var places = require('./bl/placesbl');
var fileStore = require('./bl/filebl');


var _clientSecret = process.env.CLIENT_SECRET;
var _clientID = process.env.CLIENT_ID;
var _callbackURL = process.env.REDIRECT_URI;

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
            'https://www.googleapis.com/auth/userinfo.email',
            //'https://www.googleapis.com/auth/calendar',
            'https://www.googleapis.com/auth/userinfo.profile', 
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
              var token = jwt.sign(payload, process.env.JWT_SECRET,
                {
                  //expiresIn: '1h'
                });

              var user = new models.user({
                authProvider: authProvider,
                email: data.email,
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
                res.redirect(process.env.CLIENT_REDIRECT_URI + '?access_token=' + token);
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
      jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
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

// app.get('/', function(req, res) {       
//     res.send('<a href="/auth/google">Sign In with Google</a>');
// });

app.post('/login', function(req, res){
  login.login(req.body.email, req.body.password, function(result){
    res.json(result);
  });
});
app.post('/register', function(req, res){
  register.register(req.body.email, req.body.password, function(result){
    res.json(result);
  });
});

app.get('/plannings', passport.authenticate('bearer', { session: false }) ,
    function(req, res) {
        planbl.getPlannings(req.user, function(err, plannings){
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
  planbl.createOrUpdatePlanning(req.user, req.body, function(err, planning){
    planbl.getPlannings(req.user, function(err, plannings){
      res.json(plannings);
    });
  });
});


app.get('/places/autocomplete', passport.authenticate('bearer', { session: false }), function(req, res){
  var query = req.query.q;
  if(!query){
    res.send(500);
  }
  places.autocomplete(query, function(err, result){ res.json(result)});
});

app.get('/places/search', passport.authenticate('bearer', { session: false }), function(req, res){
  var query = req.query.q;
  if(!query){
    res.send(500);
  }
  places.textsearch(query, function(err, result){ res.json(result)});
});
app.get('/places/details', passport.authenticate('bearer', { session: false }), function(req, res){
  var placeid = req.query.placeid;
  if(!placeid){
    res.send(500);
  }
  places.placedetails(placeid, function(err, result){ res.json(result)});
});

//app.get('/places/photo', passport.authenticate('bearer', { session: false }), function(req, res){
app.get('/places/photo', function(req, res){
  var photoid = req.query.photoid;
  if(!photoid){
    res.send(500);
  }
  places.photo(photoid, function(err, result){ 
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(result);
  });

});

app.get('/places/distance', function(req, res){
  if(!req.query.startLat || !req.query.startLng || !req.query.endLat || !req.query.endLng){
    res.send(500);
  }
  places.distance(req.query, function(err, result){
    res.json(result);
  });
});

app.get('/places/staticmap', function(req, res){
  if(!req.query.lat || !req.query.lng){
    res.send(500);
  }
  places.staticmap(req.query, function(err, result){ 
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(result.read());
  });
});

app.get('/file/:fileid', passport.authenticate('bearer', { session: false }) ,
//app.get('/file/:fileid', 
function(req, res) {
  fileStore.getFile(req.params.fileid, function(err, file, filepath){
    if(err){
      res.send(400);
      return;
    }

    if(file){
      res.type('md');
      res.send(file.data);
      return;
    }
    if(filepath){
      res.sendFile(filepath);
      return;
    }
    res.send(400);

    // res.writeHead(200, {
    //   "Content-Type": "application/octet-stream",
    //   "Content-Disposition": "attachment; filename=" + "file"
    // });
    // file.pipe(res);

    // file.close(function(){
    //   res.end();
    // });
  });
});

app.post('/file', passport.authenticate('bearer', { session: false }) ,
function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      fileStore.saveFiles(form, req.user, fields, files, function(err, file){
        if(err){
          res.status(500).send(result);
          return;
        }
        res.json(file);
      });
    });
});

app.delete('/file/:fileid', passport.authenticate('bearer', { session: false }) ,
function(req, res){
  var id = req.params.fileid;
  fileStore.deleteFile(id, function(err){
    if(err){
      res.status(500).send(result);
      return;
    }
    res.send(200, "");
  });
});


app.post('/share', passport.authenticate('bearer', { session: false }) ,
function(req, res) {
    planbl.share(req.user._id, req.body, function(err, result){
      if(err){
        res.status(500).send(result);
        return;
      }
      res.status(200).send(result);
    });
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(port);  

console.log('The App runs on port ' + port);
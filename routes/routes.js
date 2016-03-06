
var chgpass = require('../config/chgpass'); 
var register = require('../config/register'); 
var login = require('../config/login');
var userBl = require('../bl/usersbl');
var notesBl = require('../bl/notesbl');
var blModels = require('../bl/models');

module.exports = function(app) {

     var secure = function(req, res, next){

          var token = req.body.token;
          if(!token) token = req.query.token; 

          if(!token) return res.end("No token no way ...");

          userBl.findByToken(token, function(user){
               if(user) {
                    req._user = user;
                    return next();
               }
               res.end("nice try :D");
          });
     };

     app.get('/', secure, function(req, res) {       

          res.end("Note-Android-Project");    
     });


     var deleteNote = function(req, res){
          var userid = req._user._id;
          var noteid = req.query.noteid ? req.query.noteid : null;
          if(!noteid && !userid) {
               res.json({error: "no noteid or userid"});
          }else{
               notesBl.deleteNote(userid, noteid, function(err){
                    if(err){
                         res.json({error: err});
                    }else{
                         res.json({message: "successful"});
                    }
               });
          }
     }
     app.get('/deletenote', secure, deleteNote);

     var addNote = function(req, res){
          var title = req.query.title;
          var content = req.query.content;
          var startDate = req.query.startDate;
          var endDate = req.query.endDate;

          title = title ? title : "No Title";
          content = content ? content : "";
          startDate = startDate ? new Date(Date.parse(startDate)) : null;
          endDate = endDate ? new Date(Date.parse(endDate)) : null;

          var newNote = new blModels.note(title, content, startDate, endDate);

          notesBl.addNote(req._user._id, newNote, function(err){
               res.json({error: err})
          });

     };

     app.get('/addnote', secure, addNote);

     var getNotes = function(req, res){
          notesBl.getNotes(req._user._id, function(err, notes){
               res.json({error: err, notes: notes});
          });
     }

     app.get('/notes', secure, getNotes);


     var _login = function(req,res){        
          var email = req.body.email;             
          var password = req.body.password;


          if(!email) email = req.query.email;
          if(!password) password = req.query.password;    

          login.login(email,password,function (found) {           
               console.log(found);             
               res.json(found);    
          });    
     };

     var _register = function(req,res){
          var email = req.body.email;
          var password = req.body.password;

          if(!email) email = req.query.email;
          if(!password) password = req.query.password;

          register.register(email,password,function (found) {             
               console.log(found);             
               res.json(found);    
          });     
     };

     app.post('/login', _login);
     app.get('/login', _login); 

     app.post('/register', _register);
     app.get('/register', _register);

     app.post('/api/chgpass', function(req, res) {       
          var id = req.body.id;                 
               var opass = req.body.oldpass;         
          var npass = req.body.newpass;       

          chgpass.cpass(id,opass,npass,function(found){           
               console.log(found);             
               res.json(found);    
     });     
     });     

     app.post('/api/resetpass', function(req, res) {         

          var email = req.body.email;         

          chgpass.respass_init(email,function(found){             
               console.log(found);             
               res.json(found);    
     });     
     });     

     app.post('/api/resetpass/chg', function(req, res) {         
          var email = req.body.email;         
          var code = req.body.code;       
          var npass = req.body.newpass;       

     chgpass.respass_chg(email,code,npass,function(found){           
          console.log(found);             
          res.json(found);    
     
     });     
     });  
};
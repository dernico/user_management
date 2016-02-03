
var chgpass = require('../config/chgpass'); 
var register = require('../config/register'); 
var login = require('../config/login');
var userBl = require('../bl/users');

module.exports = function(app) {

     var secure = function(req, res, next){

          var token = req.body.token;
          if(!token) token = req.query.token; 

          if(!token) return res.end("No token no way ...");

          userBl.findByToken(token, function(found){
               if(found) return next();
               res.end("nice try :D");
          });
     };        


     app.get('/', secure, function(req, res) {       

          res.end("Node-Android-Project");    
     });     

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
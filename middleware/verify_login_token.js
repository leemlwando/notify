const jwt  = require("jsonwebtoken");


module.exports = (req, res, next)=>{
   
        jwt.verify(token,process.env.LOGIN_TOKEN_SECRET, function(error, payload){
               console.log(error)
        })
   
}
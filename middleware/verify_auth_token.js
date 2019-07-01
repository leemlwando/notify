const jwt  = require("jsonwebtoken");

module.exports = function verify_auth_token(auth_token, next){
    jwt.verify(auth_token,function(err,payload){
        if(err)return next(err);
        req.token_payload = payload;
        next();
    });
}

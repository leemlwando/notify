const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    console.log("[User]", req.user)
    generateLoginToken({user_id:req.user._id,accountsLoggedIn:[req.user.accounts]}, function(error, token){
        if(error){
            console.log("[error]",error)
            res.json({success: false,error:error, message:"Could Not Generate Login Token"});
            return;
        };
        res.json({success: true,payload:{token:token,first_name: req.user.first_name,last_name: req.user.last_name,other_names:req.user.other_names,email:req.user.email,accounts:req.user.accounts,bundles:[],contacts:[]}});
        return
    })
}


function generateLoginToken(data, cb){
    jwt.sign({data:JSON.stringify(data)}, process.env.LOGIN_TOKEN_SECRET, {expiresIn:60 * 60 * 24 * 7},cb);
}
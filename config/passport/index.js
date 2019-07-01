const passport = require("passport"),
      localStrategy = require("passport-local").Strategy,
      ExtractJwt = require("passport-jwt").ExtractJwt,
      JWTStrategy = require("passport-jwt").Strategy;

const {User} = require("../../lib/db/models");
const AccountsModule = require("../../modules/accounts");

const createError = require("http-errors");
//instantiate configuration object
const configs = {};

//initialize passport
configs.initialize = ()=>passport.initialize();

//initialize passport session 
configs.passportSession = ()=>passport.session();

//configure local strategy
configs.localStrategy = ()=>(passport.use("local",new localStrategy({
    usernameField:"email",
    passwordField:"password"
},function(username,password,done){
    User.findOne({email:username}, function(err,user){
            //check any databse errors
            if(err) 
                return done(err,false,{code:500,message:"an error occoured"});
            //assert that user has been found
            if(!user)
                return done(null,false,{code:404,message:"user not found"});
            //check if passwords match
            user.isPasswordValid(password,function(err,response){
                //check if error returned
                if(err)
                    return done(err,false,{code:500, message:"an error ocoured"});
                //assert if reponse is false
                if(!response)
                    return done(null, false,{code:304, message:"ooops! passwords  dont match"});
                //finally login 
                //fetch accounts
                    AccountsModule.fetchAccount([user._id]).then(accounts => {
                        user.password = null;
                        user.accounts = accounts;
                        done(null,user,{code:200, message:"login successfull"});
                    }).catch(error => done(error));
                    //null password
                   
            });
    });
       
})))

const options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.LOGIN_TOKEN_SECRET

// console.log(options)

configs.jwtStrategy = () => {return passport.use("jwt",new JWTStrategy(options, function(jwt_payload, done){
    console.log("jwt...................", jwt_payload)
    done(null,{});
}))}

configs.serializeUser = ()=>(passport.serializeUser(function(user,done){
    if(!user)
        return done(null,false, {code:401,message:"could not serialize user"});
    done(null,user);
}));


configs.deserializeUser = ()=>(passport.deserializeUser(function(user,done){
    if(!user)
        return done(null,false,{code:401,message:"could not desrialize user into session"});
    User.findOne({_id:user_id})
        .then(res=>{
            if(!res){return done(null,false,{code:404,message:"no user found"})};
            //null password
            user.password = null;
            done(null,user);
        }).catch(err=>done(err));
}));

configs.isAuthenticated = function(req,res,next){
    if(req.isAuthenticated() === false)
        return next(createError({code:403,message:"invalid permissions to access this page"}));
    next();
}

module.exports = configs;
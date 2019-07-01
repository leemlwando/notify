//require envirminet variables
require("dotenv").config();
//app depedencies
require("./lib/db/connection");
const express = require("express"),
      bodyParser = require("body-parser"),
      session = require("express-session"),
      path = require("path"),
      configs = require("./config"),
      // router = require('./'),
      apiRouter = require("./api/v1"),
      logger = require("morgan"),
      AuthMiddleware = require("./middleware/verify_login_token"),
      passport = require("passport"),
      St = require("passport-jwt").Strategy,
      e = require("passport-jwt").ExtractJwt,
      cors = require("cors");

//instantiate express app
const app = express();


/**
 *      CREATE MIDDLEWARE
 */

 //set view engine and views directory
app.use(cors());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use("/static",express.static(path.join(__dirname,"/static")))

//log http requests
app.use(logger(configs.logger()));
//parse json and urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set up sessions
// app.use(session(configs.session.configs));

//set up passport
app.use(configs.passport.initialize());
// app.use(configs.passport.passportSession());
  //set up passport strategies

// app.use(function(req,res,next){
//   console.log(req.headers);
//   next()
// })
configs.passport.jwtStrategy()
// passport.use("jwt",new St({
//   jwtFromRequest : e.fromAuthHeaderWithScheme("Bearer"),
//   secretOrKey : process.env.LOGIN_TOKEN_SECRET
// },function(p,d){
//   console.log(d)
//         d()
// }) )  
configs.passport.localStrategy();

// configs.passport.serializeUser();
// configs.passport.deserializeUser();

//set up routes
// app.use("/",router);

//set up api endpoints
app.use("/api/v1",apiRouter);

//catch errors
app.use(configs.errors.catch404); //catch 404 errors
app.use(configs.errors.handleErrors);

module.exports = app;
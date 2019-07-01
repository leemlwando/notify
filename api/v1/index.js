const express = require("express");
const Router = express.Router();
const authController = require("./auth");
const ContactsCntroller = require("./contacts/createContacts");
const SenderIDController = require("./senderid");
const PurchaseBundleController = require("./purchases/bundles");
const UserController = require("./users");
const SMSController = require("./sms");
const passport = require("passport");
const jwt = require("jsonwebtoken")

/**
 * REGISTER
 */

//  Router.get("/register",authController.registration.get);
 Router.post("/register",authController.registration.post);

/**
 * LOGIN
 */

// Router.get("/login",authController.login.get);
Router.post("/login",passport.authenticate("local",{session:false}),authController.login.post);

Router.post("/senderid",passport.authenticate("jwt",{session:false}), SenderIDController);

Router.post("/purchase/bundles",passport.authenticate("jwt",{session:false}), PurchaseBundleController.purchase);


Router.post("/activate/bundles",passport.authenticate("jwt",{session:false}), PurchaseBundleController.activate);


/**
 * RECOVER
//  */

// Router.get("/recover-password",authController.password_recovery.get);
// Router.post("/recover-password",authController.password_recovery.post);


/**
 *  Users
 */

Router.get("/users",passport.authenticate("jwt", {session: false}), UserController);
Router.put("/users/edit");
Router.delete("/users/delete");
Router.post("/users/create");

/**
 * CONTACTS
 */

 Router.get("/contacts");
 Router.post("/contacts",passport.authenticate("jwt",{session:false}), ContactsCntroller);
 Router.put("/contacts");
 Router.delete("/Contacts");


/**
 * SCHEDULES
 */

 Router.get("/schedules",passport.authenticate("jwt",{session:false}), SMSController.schedules.get);
 Router.post("/schdules");
 Router.put("/schedules");
 Router.delete("/schedules");

/**
 *  SMS
 */


Router.get("/smshistory",passport.authenticate("jwt",{session:false}), SMSController.history.get); //collect messages send, templates etc
Router.post("/sendsms"); //send single, bulk sms
Router.put("/sendsms"); //edit sms templates etc
Router.delete("/sendsms");  //delete sms history, templates etc


/**
 *  CAMPAIGNS
 */

Router.get("/campaigns"); //get campaigns
Router.post("/campaigns"); //create campaigns
Router.put("/campaigns");   //edit campaigns
Router.delete("/campaigns"); ////delete campaigns


Router.get("/smsbalance",passport.authenticate("jwt",{session:false}), SMSController.balance.get);



Router.get("/verify",passport.authenticate("jwt", {session: false}), (req,res,next)=>{
    console.log(req.query.token)
    jwt.verify(req.query.token,process.env.LOGIN_TOKEN_SECRET,function(err,payload){

        console.log(err,req.headers["authorization"].split(" ")[1])
        res.json(payload)
    })
}); ////delete campaigns

module.exports = Router;
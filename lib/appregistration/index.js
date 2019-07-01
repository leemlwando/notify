const {AppRegistration} = require("../db/models");

module.exports = {
    appRegistration,
    isRegisteredMiddleware
}

function isRegisteredMiddleware(appID,next){
    AppRegistration.findOne({_id:appID})
        .then(isRegistered => !isRegistered ? next({success:false,message: "App Not Registered"}) : next()).catch(err=>next({success: false, message:"Failed To Confirm App Registration"}));
};

const {appRegistration} = require("../../lib/appregistration");
const {AppRegistration} = require("../../lib/db/models");

module.exports = function(appID){
    return new Promise((resolve, reject) => {
        appRegistration(appID).then(appStatus=>{
            AppRegistration.create(appStatus).then(isRegistered =>{
                if(!isRegistered){
                    reject(new Error("App Registration Failed"))
                    return;
                }
                resolve({success: true,isRegistered});
            }).catch(err => reject(err))
        }).catch(err => reject(err))
    })
};
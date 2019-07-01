const {User} = require("../../lib/db/models");
const Accounts = require("../accounts");
const Notications = require("../notifications");

module.exports = (data) => {
    return new Promise((resolve, reject) => {
        User.create(data)
            .then(user => {

                if(!user){
                    reject({error:"Not Created"})
                    return;
                };

                return Accounts.createAccount({owner_id:user._id, permissions:["admin"]})
                    .then(account => {

                      switch(data.send_verification_code_via){
                        case "sms":
                            Notications.sendSMS({to:data.phone_number, message:generateVerifyAccountToken({account_id:account._id, user_id:user._id})});
                            resolve({});
                            break;
                        case "email":
                             Notications.sendEmail({to:data.phone_number, message:generateVerifyAccountToken({account_id:account._id, user_id:user._id})});
                             resolve({})
                            break;
                        default:
                             Notications.sendSMS({to:data.phone_number, message:generateVerifyAccountToken({account_id:account._id, user_id:user._id})});
                             resolve({});
                             return;
                            //send via sms
                      }
                    })
                        .catch(error => reject({error}));

            }).catch(error => {
                console.log("[error]",error)
                reject({error:error})
            });
    })
}


function generateVerifyAccountToken(){

}
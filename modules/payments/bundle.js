const {Bundle} = require("../../lib/db/models");
const Email  = require("../notifications/mail");

module.exports.purchase = (data) => {
    return new Promise((resolve, reject) =>{
        Email()
        Bundle.create({
            account:data.account_id,
            price:data.bundle_price,
            units:data.bundle_units,
            isDepleted:false
        }).then(bundle=>{
            if(!bundle){
                reject(new Error("Not Created"))
                return;
            }

            resolve(bundle);
        })
            .catch(err=>reject(err))
    })
}



module.exports.activate = (data) => {
    return new Promise((resolve, reject) =>{
        Bundle.findOneAndUpdate({
            account: data.account_id,
            _id:data.bundle_id
        }, {
         
            aproved_by:data.user_id,
            activated: data.activated,
            activated_by: data.user_id
        }).then(upadtedDoc=> resolve(upadtedDoc))
            .catch(error => reject(error))
    })
}
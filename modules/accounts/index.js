const {Account, Member} = require("../../lib/db/models");


module.exports.createAccount = (data) => {
    return new Promise((resolve, reject) => {
        Account.create({
            owner: data.owner_id
        }).then(account => {
               if(!account){
                reject(new Error("Account Not Created"));
                return;
               }

               return Member.create({account:account._id,user_id:data.owner_id,permissions:data.permissions}).then(membership => {
                   if(!membership){
                       reject(new Error("Account Not Created"));
                       return;
                   }

                   //add user to own account
                   account.members.push(membership._id);
                   account.save(function(err){
                       if(err){
                           reject(err);
                           return;
                       }
                       resolve(account); //complete transaction
                   })

               }
                ).catch(error=> reject(error))
            }).catch(err => reject(err));
    })
}


module.exports.deleteAccount = () => {
    return new Promise(() => {
        
    })
}

module.exports.fetchAccount = (account_ids) => {
    let accounts;
    let errors;

    accounts = []
    errors = []
    return new Promise((resolve, reject)=>{
        account_ids.map((account_id, index) => {
            if(account_ids.length -1 === index){
                Member.findOne({"user_id":account_id})
                .populate({
                    path:"account", select: "-_id permissions contacts owner"
                })
                .then(account => {
                    !account ? false : accounts.push(account)
                    resolve(accounts);
                })
                    .catch(err => {
                        errors.push(err);
                        reject(errors)
                    });
                    return;
            }

            Account.findOne({"user_id":account_id})
                .populate({
                    path:"account", select: "-_id permissions contacts owner"
                })
                .then(account => !account ? false : accounts.push(account))
                    .catch(err => errors.push(err));
            
        })
    })
}

module.exports.EditAccount = () => {
    return new Promise((resolve, reject)=>{})
}

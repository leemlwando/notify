// const redis = require("redis");

const {Group, Group1} = require("../../lib/db/models");




// module.exports.saveGroups_1 = function(data){
//     let allcontacts;
//     allcontacts = {};
//     allcontacts["user_id"] = data.user_id;
//     allcontacts["account_id"] = data.account_id;
//     allcontacts["contacts"] = {}
//     // console.log("[Start Group Session]",data);
//     return new Promise((resolve, reject) => {
//         // console.log("[Start Group Session]",data)
//         data.contacts.map((contact,i) => {
//             //check if group exists, if not create ,ot Contact herwise create
//             console.log("[Contact]", i, contact)
//             allcontacts.contacts[contact.phone_number] = [];

//             contact.groups.map((group, j) => {

//                 //process last
//                 if(contact.groups.length -1 === j){
//                     // new ObjectId(group.group_id)
//                     console.log("[last session]", ObjectId.isValid(group.group_id), group.group_id)
//                     Group.findOne({_id:ObjectId.isValid(group.group_id) ? group.group_id : undefined}).then(exists => {
//                         //create group if doesnt exist
//                         if(!exists){
//                             console.log("[Create New]")
//                             Group.create({name:group.name,account:data.account_id})
//                                 .then(newGroup => {
//                                     if(!newGroup){
//                                         console.log("[Not Created New]")
//                                         return;
//                                     }; //process error
//                                     console.log("[Created New]")
//                                     allcontacts.contacts[contact.phone_number].push(newGroup._id);
//                                     resolve({initialData:data, proccesed:allcontacts});
//                                 }).catch(err => {
//                                     console.log(err);
//                                     reject(err);
//                                 })
//                                 return;
//                         }
    
//                         //if it already exists , add it to list
//                         allcontacts.contacts[contact.phone_number].push(exists._id);
//                         resolve({data, allcontacts});
    
//                     }).catch(err => {
//                         console.log(err)
//                         reject(err);
//                     });
//                 }

//                 Group.findOne({_id: group.group_id}).then(exists => {
//                     //create group if doesnt exist
//                     if(!exists){
//                         Group.create({name:group.name,account:data.account_id})
//                             .then(newGroup => {
//                                 if(!newGroup){};
//                                 allcontacts.contacts[contact.phone_number].push(newGroup._id);
//                             }).catch(err => err)
//                             return;
//                     }

//                     //if it already exists , add it to list
//                     allcontacts.contacts[contact.phone_number].push(exists._id);

//                 }).catch(err => err);
//             })
//         })
//     })
// }

module.exports.saveGroups_2 = (data) => {
    console.log("[Groups]", [...data.groups])
   
    return new Promise((resolve, reject) => {
            let {account_id, groups} = data;
            Group1.findOne({account: account_id})
                .then(GroupAccount => {
                    if(!GroupAccount){
                        Group1.create({account: account_id, group_names:[...groups]})
                            .then(newGroupAccount => {

                                if(!newGroupAccount){
                                    reject(new Error("Not Created"))
                                    return;
                                }

                                resolve(newGroupAccount.group_names);
                               
                            }).catch(err => reject(err));
                        return
                    }

                    saveGroups(GroupAccount, [...groups], (error, modifiedAccount) => {
                            if(error){
                                reject(error);
                                return;
                            }

                            
                            modifiedAccount.save(function(err){
                                if(err){
                                    reject(new Error("Not Created"))
                                    return
                                }
                                resolve(modifiedAccount);
                            })
                           
                            return;
                    });
                })
                    .catch(error => reject(error) );
    })
}



function saveGroups(account, groups, cb){
    let _filterGroups = account.group_names.filter((group,i)=>typeof group === "string" ? group.toLowerCase() : group);

    console.log("[Filtered]",_filterGroups.length)
   groups.map((group,i) => {
        if(groups.length -1 === i){
            // console.log(_filterGroups.includes(group))
            if(!_filterGroups.includes(group)){
                account.group_names.push(group);
                cb(null,account);
                return
            }
            cb(null,account);
            return;
        }
        // console.log(_filterGroups.includes(group))
        if(!_filterGroups.includes(group)){
            account.group_names.push(group);
        }
   })
}

 
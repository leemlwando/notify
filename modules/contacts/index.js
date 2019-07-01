const GroupsModule  = require("../groups");
const {Contact} = require("../../lib/db/models");
// let x = {
// 	"user_id":"5d13eb734220e3773cb738cf",
// 	"account_id":"5d13eb734220e3773cb738d0",
// 	"contacts":[
// 			{"groups":["Church"], "phone_number":"0962068339","other_info":{}},
// 			{"groups":["Church", "School", "Class"], "phone_number":"0962068339","other_info":{}},
// 			{"groups":["Church", "Chills"], "phone_number":"0962068339","other_info":{}}
// 		],
// 	"auto_create_groups":"true"
// }


let c = {
    account:"",
    phone_number:"",
    groups:[],
    other_info:{},
    date_created:{type: Date}
}

module.exports.saveContact = (data) => {
    // console.log("[Contacts]", data)
    return new Promise((resolve, reject) => {
        // console.log("[Groups]", data)
        GroupsModule.saveGroups_2({account_id: data.account_id, groups: extractGroups(data.contacts)})
            .then(_groups =>{
                Contact.create([...createContacts(data.contacts, data.account_id)])
                    .then(_contacts=>resolve(_contacts)).catch(error=>reject(error))  
            }).catch(err =>{
                    console.log(err)
                    reject(err)
                })

    })
};

function extractGroups(contacts){
    let set;

    set  = new Set();

    contacts.map((contact,i) => {
        contact.groups.map((group, j) => {
            set.add(group.toLowerCase());
        })  
    })
    
    return set;
}

function createContacts(contacts, account_id){
    let _c;
    _c = [];
    contacts.forEach(function(contact){
        contact.account = account_id;
    
        _c.push(contact);
    });
    console.log("[Contacts]", _c);
    return _c;
}

function normalizeData(serilazedData){
    let contacts;
    let singleContact;

}
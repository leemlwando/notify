const {SendeID} = require("../../lib/db/models");
const request = require("request");

module.exports = (data) => {
    return new Promise((resolve, reject) => {
        let {senderID, account_id} = data;
    
        SendeID.findOne({account: account_id})
            .then(senderIDAccount =>{
               if(!senderIDAccount){
                SendeID.create({account:account_id})
                .then(newAccount => {
                    if(!newAccount){
                        reject(new Error("Not Created"))
                        return;
                    }
                    createSenderID(senderID,function(error, senderid, body){
                        if(error){
                            reject(error);
                            return;
                        }
                        newAccount.ids.push(senderid);
                        newAccount.save(function(err){
                            if(err){
                                reject(new Error("Not Saved"))
                                return;
                            }
                            resolve(newAccount)
                        })
                   })
                    return;
                }).catch(error=>reject(error));
                   
                   return;
               }
              
               if(!senderIDAccount.ids.includes(senderID)){

                createSenderID(senderID,function(error, senderid, body){

                    if(error){
                        reject(error);
                        return;
                    }
                   senderIDAccount.ids.push(senderid);
                   senderIDAccount.save(function(err){
                       if(err){
                           reject(err);
                           return;
                       }
                       resolve(senderIDAccount);
                       return;
                   })
                })
                   
                   return;
               } 

               resolve(senderIDAccount);


            }).catch(err => reject(err));

    });
};

// key=<Your_API_KEY>&senderId=<Sender_ID></Sender_ID>

function createSenderID(senderid, callback){
    request.get(`${process.env.CREATE_SENDERID_API}key=${process.env.ZMT_API_TOKEN}&senderId=${senderid}`,{
        body:JSON.stringify(senderid)
    }, function(error, response, body){
        console.log("[]",error,response);
        if(error) return callback(error);

        if(response && Number(response.statusCode) === 200){
            return callback(null,senderid, body);
        }

        return callback(body);
        
    })
};

function saveSenderID(senderid, callback){
    return SenderID.create(senderid, function(error, _senderID){
        if(error) return callback(new Error(JSON.stringify(error)));
        if(!sender) return callback(new Error("SenderID Not Saved"));
        callback(null)
    });
};
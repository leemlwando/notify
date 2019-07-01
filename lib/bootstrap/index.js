const {AppRegistration} = require("../db/models");
const config = require("../../config");
const http = require("http");
const request = require("request");
const fs = require('fs')
const file = '../../config/app.json'
const path = require("path");


module.exports = (registrationDetials) => {
    return{
        registerApp,
        startApp,
        killApp,
        crashedApp,
    }
};

function fakeRequest(appID){
    return new Promise((resolve, reject) =>{
        resolve({success: true,appID:"lee@1996"})
    })
}

function registerApp(appID){
    return new Promise((resolve, reject) => {
        
    });
}


function startApp(callback){
   let _server = http.createServer(config.expressApp());
   _server.listen(process.env.PORT || config.PORT, config.INTERFACE || "0.0.0.0", callback ? callback() : () => console.table([{appID:process.env.appID, owner:process.env.OWNER || config.owner(), dateRegistered: config.dateRegistered()}]));

};

function killApp(){
    console.log("[Killing App]")
    console.table([{appID:process.env.appID, owner:process.env.OWNER || config.owner(), dateRegistered: config.dateRegistered()}])
    return process.exit(1)
};

function crashedApp(err){
    console.log("[Crashing App]", err)
    console.table([{appID:process.env.appID, owner:process.env.OWNER || config.owner(), dateRegistered: config.dateRegistered()}])
    return process.exit(1)
}
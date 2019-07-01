const mongoose = require("mongoose");

mongoose.connect(`${"mongodb://127.0.0.1:27017/notify"}`,{useNewUrlParser:true});

const db = mongoose.connection;

db.once("open",()=>console.debug("Database Conenction Open"));

db.on("error",(error)=>console.error(error));

module.exports = db;
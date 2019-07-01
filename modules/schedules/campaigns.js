const Agenda = require("../../lib/agenda");
const uuid = require("uuid/v4");
const Moment = require("moment");


module.exports = (data) => {
    return new Promise((resolve, reject) => {
        let {days, campaign_name} = data;
        let _id = uuid();
        days.map((day, index) => {
            if(days.length -1 === Number(index)){
                Agenda.schedule(composetime(day),composename(_id,campaign_name),data.payload);
                return resolve({});
            }
            Agenda.schedule(composetime(day),composename(_id,campaign_name),data.payload);
        });
    });
};

function composename(uuid,campaign_name){

};

function composetime(day){
    return new moment("year/month/day/time");
};
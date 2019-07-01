const Moment  = require("moment");
const Agenda = require("../../lib/agenda");


module.exports = (data) => {
   return new Promise((resolve, reject) => {

        let {task_name, time_to_run, payload} = data;

        Agenda.define(time_to_run, task_name, payload);
   }) 
}





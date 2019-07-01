module.exports = (Schema) => {

    const _schema = new Schema({
        account:{},
        title:{},
        description:{},
        date:{
            year:{},
            month:{},
            day:{},
            time:{}
        },
        message:{},
        contacts:[],
        sender_id:{}
    });

    return _schema;
}
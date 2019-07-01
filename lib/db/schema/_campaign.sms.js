module.exports = (Schema) => {

    const _schema = new Schema({
        account:{},
        title:{},
        description:{},
        days:[{_id:false,date:{year:{},month:{},day:{},time:{}}, message:{}, contacts:[], sender_id:{}}]
    });

    return _schema;
}
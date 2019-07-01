module.exports = (Schema) => {

    const _schema = new Schema({
        account:{},
        title:{},
        description:{},
        date_created:{},
        created_by:{}
    });

    return _schema;
}
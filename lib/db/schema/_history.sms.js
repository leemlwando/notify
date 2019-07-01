module.exports = (Schema) => {

    const _schema = new Schema({
        account:{},
        date_sent:{},
        message:{},
        contacts:{}
    });

    return _schema;
}
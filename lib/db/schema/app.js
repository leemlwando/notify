module.exports = (Schema) => {

    const _schema = new Schema({
        app_id:{type: String},
        other_data:{type: String}
    });

    return _schema;
}
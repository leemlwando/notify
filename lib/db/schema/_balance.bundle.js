module.exports = (Schema) => {

    const _schema = new Schema({
        account:{type: Schema.Types.ObjectId, ref: "Accounts"},
        balance:{}
    });

    return _schema;
}
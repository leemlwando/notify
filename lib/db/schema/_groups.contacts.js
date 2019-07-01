module.exports = (Schema) => {

    const _schema = new Schema({
        account:{type: Schema.Types.ObjectId, ref: "Accounts"},
        name:{type: String},
        created_by:{type: Schema.Types.ObjectId, ref: "Users"}
    });

    return _schema;
}
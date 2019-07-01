module.exports = (Schema) => {
    const _schema = new Schema({
        account:{type: Schema.Types.ObjectId, ref : "Accounts"},
        user_id:{type: Schema.Types.ObjectId, ref : "Users"},
        permissions:[], //a == aprove , -a == disaprove
    });

    return _schema;
}
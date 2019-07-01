module.exports = (Schema) => {
    const _schema = new Schema({
        owner:{type: Schema.Types.ObjectId, ref: "Users"},
        members:[{type: Schema.Types.ObjectId, ref : "Members"}],
        contacts:[{type: Schema.Types.ObjectId, ref : "Contacts"}],
        modules:[{_id: false, module_id:{type: Schema.Types.ObjectId, ref : "Modules"}, isActive:{type: Boolean, default: false}}]
    });
    return _schema;
}
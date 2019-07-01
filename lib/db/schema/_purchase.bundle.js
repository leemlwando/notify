module.exports = (Schema) => {

    const _schema = new Schema({
        account:{type: Schema.Types.ObjectId, ref: "Accounts"},
        price:{type: String},
        units:{type:Number, min:0},
        aproved_by:{type: Schema.Types.ObjectId, ref: "Users"},
        isDepleted:{type: Boolean, default: false},
        activated:{type: Boolean, default: false},
        date_bought:{type: Date, default: Date.now()},
        activated_by:{type: Schema.Types.ObjectId, ref: "Users"}
    });

    return _schema;
}
module.exports = (Schema) => {
    const _schema = new Schema({
        account:{type: Schema.Types.ObjectId, ref:"Accounts"},
        phone_number:{type: String},
        groups:[],
        other_info:{type: Object},
        date_created:{type: Date, default: Date.now()}
    });
 
    return _schema;
 }
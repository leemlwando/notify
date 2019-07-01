module.exports = (Schema) => {
    const _schema = new Schema({
        first_name:{type: String},
        last_name:{type: String},
        other_names:{type: Array,default: []},
        date_of_birth:{ type: Date},
        sex: {type: String, enums:["male", "female", "other"]},
        location:{
            country:{type: String},
            province: {type: String},
            city:{type: String}
        },
        address:{ type: String},
        phone_number: {type: String},
        email: {type: String},
        password:{type: String}
    });

    return _schema;
}
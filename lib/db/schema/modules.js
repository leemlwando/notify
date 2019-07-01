module.exports = (Schema) => {
    const _schema = new Schema({
        module_name:{type: String},
        installs:[{type: Schema.Types.ObjectID, ref: "Accounts"}],
        state:{
            isNewFeature:{},
            isBetaFetaure:{},
            isStableFeature:{}
        },
        isActive:{type: Boolean, default: false}
    });

    return _schema;
}
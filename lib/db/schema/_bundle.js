module.exports = (Schema) => {

    const _schema = new Schema({
        account:{type: Schema.Types.ObjectId, ref: "Accounts"},
        active:{type: Boolean, default: false},
        bundle_info:{type: Schema.Types.ObjectId, ref: "BundlePurchases"}
    });

    return _schema;
}
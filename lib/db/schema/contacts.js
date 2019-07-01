module.exports = (Schema) => {
   const _schema = new Schema({
       account:{},
        contacts:[{type: Schema.Types.ObjectID, ref: "_Contact"}],
        aproved_by:{}
   });

   return _schema;
}
const {AccountSchema, UserSchema} = require("../schema");
const bcrypt  = require("bcrypt");
let SALT = 10;
UserSchema.pre("save", function(done){
    let self = this;
    // console.log("[Methods]",self)
    bcrypt.hash(self.password,SALT,function(error,hashedPassword){
        if(error) {
            done(error);
            return;
        }

        self.password = hashedPassword;
        done();
    })

});

UserSchema.methods.isPasswordValid = function(password, cb){
    let self = this;
    // console.log("[ISPAWORDVALID]", self)
    bcrypt.compare(password,self.password, function(error,data){
        if(error){
            cb(error);
            return;
        };
           console.log("[ISPAWORDVALID]", data)
        cb(null,data);
        return;
    })
}

module.exports = {AccountSchema, UserSchema};
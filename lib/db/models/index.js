const mongoose = require("mongoose");
const AppRegistrationchema = require("../schema/app");
const {MemberSchema,  GroupSchema, GroupSchema1, ContactSchema, SenderIDSchema, BundleSchema} = require("../schema");
const {UserSchema, AccountSchema} = require("../methods");

const AppRegistration = mongoose.model("AppRegister", AppRegistrationchema(mongoose.Schema));
const  User  = mongoose.model("Users", UserSchema);
const Account = mongoose.model("Accounts", AccountSchema);
const Member = mongoose.model("Members", MemberSchema);
const Group = mongoose.model("Groups", GroupSchema);
const Group1 = mongoose.model("Groups1", GroupSchema1);
const Contact = mongoose.model("Contacts", ContactSchema);
const SendeID = mongoose.model("SenderIDs", SenderIDSchema);
const Bundle = mongoose.model("Bundles", BundleSchema);

module.exports = {AppRegistration, User, Account, Member, Group, Group1, Contact, SendeID, Bundle};
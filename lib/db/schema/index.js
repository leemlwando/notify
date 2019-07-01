const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = require("./accounts")(Schema);
const UserSchema = require("./user")(Schema);
const MemberSchema = require("./members")(Schema);
const GroupSchema = require("./_groups.contacts")(Schema);
const GroupSchema1 = require("./_groups.contacts.1")(Schema);
const ContactSchema = require("./_contact.contacts")(Schema);
const SenderIDSchema = require("./senderid")(Schema);
const BundleSchema = require("./_purchase.bundle")(Schema);


module.exports = {AccountSchema, UserSchema, MemberSchema, GroupSchema, GroupSchema1, ContactSchema, SenderIDSchema, BundleSchema};

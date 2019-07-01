const ContactsModule = require("../../../modules/contacts");



module.exports = (req,res, next) => {
    ContactsModule.saveContact(req.body)
        .then(savedContacts => res.json(savedContacts)).catch(error => {
            console.log(error);
            res.json(error)
        });
}
const UserModule = require("../../../modules/users");
let createUser = (new UserModule()).create;

module.exports = (req, res, next) => {

    createUser({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        other_names:req.body.other_names,
        date_of_birth:req.body.date_of_birth,
        sex: req.body.sex,
        location:{
            country:req.body.location.country,
            province: req.body.location.province,
            city: req.body.location.city
        },
        address:req.body.address,
        phone_number: req.body.phone_number,
        email: req.body.email,
        password:req.body.password
    }).then(user => res.json({success: true,payload:user})).catch(error => res.json({success:false, error}))
}
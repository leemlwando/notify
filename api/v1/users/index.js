module.exports = (req, res, next) => {
    res.json({success: true, payload:{
        first_name:"lee",
        last_name:"lwando",
        other_names:["musambula"],
        email:"leemlwando@gmail.com",
        phone_number:"0950482560",
        address:"3 njase close",
        location:{
            city:"lusaka",
            province:"lusaka",
            country:"zambia"
        }
    }})
}
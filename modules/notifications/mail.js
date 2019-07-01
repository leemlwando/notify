const sgMail = require('@sendgrid/mail');
const nodemailler = require("nodemailer")
sgMail.setApiKey(process.env.SENGRID_API_KEY);

// let tp = nodemailler.createTransport({
//     host: "microtechcloud.co",
//     port: 587,
//     secure: true, // upgrade later with STARTTLS
//     auth: {
//       user: "leelwando@microtechcloud.co",
//       pass: "microtech"
//     }
// })


module.exports = (data) => {
    const msg = {
        to: 'leelwando@microtechcloud.co',
        from: 'amasampobine@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      sgMail.send(msg);
    // tp.sendMail({
    //     from: "info@microtechcloud.co",
    //     to:"leemlwando@gmail.com",
    //     subject:"Test",
    //     text:"test"
    // }, function(err, info){
    //     console.log("error", err, "info", info)
    // })
      return
}
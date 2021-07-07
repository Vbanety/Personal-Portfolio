const nodemailer = require('nodemailer');
const  mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'f1437311f6188ee26831ceb471053125-c4d287b4-959fd3f4',
        domain: 'sandboxa6ee6ba164bb4304a13f7f4e0009fb24.mailgun.org'        
    }
};

const transporter = nodemailer.createTransport(mailGun(auth)); 

//pass four

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'batistavesuporte@gmail.com',
        subject,
        text
    }
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;

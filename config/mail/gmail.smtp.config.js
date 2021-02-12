const nodemailer = require("nodemailer");

let Gtransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_SMTP_SERVER_USER,
        pass: '@ngm#NG--te'
    }
});

module.exports = Gtransporter
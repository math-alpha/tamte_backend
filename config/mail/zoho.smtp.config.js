const nodemailer = require("nodemailer");

let Ztransporter = nodemailer.createTransport({
    service: "zoho",
    host: process.env.ZOHO_SMTP_SERVER,
    port: process.env.ZOHO_SMTP_SERVER_PORT,
    secure: true,
    auth: {
        user: process.env.ZOHO_SMTP_SERVER_USER,
        pass: 'Qwerty1234'
    }
});

module.exports = Ztransporter
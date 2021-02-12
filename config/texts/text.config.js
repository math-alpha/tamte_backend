const adminMailAddresses = ['ngadou@nghom.cm'];
const fromMailAddress = "mailer.nghom@gmail.com";

const errorNotificationMail = {
    from: fromMailAddress,
    to: adminMailAddresses,
    subject: "[Mobile Hair Salon] [ERROR] Error Notification",
    text: "",
}

module.exports = txts = {
    errorNotificationMail
}
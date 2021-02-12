//const { gmail_transporter, txts } = require('../../config/index');

const { errorNotificationMail } = require('../../config/texts/text.config');
const gmail_transporter = require('../../config/mail/gmail.smtp.config');

function sendError (content) {
    console.log(errorNotificationMail)
    send(errorNotificationMail , content);
}

const sendStats = () => {
    console.log("hello world");
    //
    // cron.schedule('* * * * *', function() {
    //     console.log('running a task every minute');
    //     console.log('---------------------');
    //     console.log('Running Cron Job');

        // let messageOptions = {
        //     from: "mailer.nghom@gmail.com",
        //     to: 'nyopa@ngadou.me',
        //     subject: 'Scheduled Email',
        //     text: 'Hi there. This email was automatically sent.'
        // };
        //
        // gmail_transporter.sendMail(messageOptions, function (error, info) {
        //     if (error) {
        //         console.error(error);
        //     } else {
        //         console.log('Email successfully sent!');
        //         console.log(info);
        //     }
        // });
    // });
}

function send(messageOptions, content) {

    messageOptions.text = content;

    gmail_transporter.sendMail(messageOptions, function (error, info) {
        if (error) {
            console.log('Email sending failed!');
            console.error(error);
        } else {
            console.log('Email successfully sent!');
        }
    });

}

module.exports = {
    sendError,
    sendStats
};
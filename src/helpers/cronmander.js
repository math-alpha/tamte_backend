const cron = require('node-cron');

const { gmail_transporter } = require('../../config')

const {
    createMonthlyLoggingFolder,
    createLoggingFiles,
    createYearlyLoggingFolder
} = require("./logging.helper");



cron.schedule('* * * * *', async function() {

    console.log('running a task every minute');
    console.log('---------------------');
    console.log('Running Cron Job');


    await createYearlyLoggingFolder();

    await createMonthlyLoggingFolder();

    await createLoggingFiles();



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
});


// Daily Tasks
/**
 * Task 1: Create new log files for every log
 * Task 2: Email Daily Activity Stats
 * Precisely at 12:00AM
 */
cron.schedule('0 0 * * *', function () {
    createLoggingFiles();
});


// Weekly Tasks
/**
 * Task 1: Create new log folder for every log
 * Task 2: Email weekly Activity Stats
 * At 12:00 AM, only on Monday
 */
cron.schedule('0 0 * * Mon', function () {
    //
});

// Monthly Tasks
cron.schedule('0 0 1 * *', function () {
    createMonthlyLoggingFolder();
});

// Yearly Tasks
cron.schedule('0 0 1 Jan *', function () {
    createYearlyLoggingFolder();
});

module.exports = cron;
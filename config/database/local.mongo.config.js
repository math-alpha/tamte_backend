const mongoose = require('mongoose');

const {sendError} = require("../../src/helpers/mail.helper");

const localConnection = mongoose.connect('mongodb://localhost:27021/tamte',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (rejected, resoled) => {
        if (resoled) {
            console.log("----Resolved----")
            // log connection success
            console.log(resoled.models);
        } else {

            /**
             * Send Email to notify admin and developers about the occurrence of an exception
             * */
            sendError(rejected.stack)

            /**
             * Log the error to local log files
             * */


        }
    });

module.exports = localConnection;
const gmail_transporter = require('./mail/gmail.smtp.config');
const zmail_transporter = require('./mail/zoho.smtp.config');
const remoteConnection = require('./database/remote.mongo.config');
const localConnection = require('./database/local.mongo.config');
const txts = require('./texts/text.config');
const loggingConfig = require('./logging/constants');

module.exports = {
    gmail_transporter,
    zmail_transporter,
    remoteConnection,
    localConnection,
    txts,
    loggingConfig,
}
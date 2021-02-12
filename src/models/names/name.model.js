const mongoose = require('mongoose');
const {Schema} = mongoose;

const nameSchema = new Schema({
    name: String,
    phonology: String,
    language: String,
    origin: [String],
    related: [this],
    description: [
        {
            language: String,
            text: String
        }
    ],
    rating: String,
    last_updated: {
        type: Date,
        default: Date.now()
    },
    created: {
        type: Date,
        default: Date.now(),
        immutable: true
    }

});

const NameModel = mongoose.model('Name', nameSchema);

module.exports = NameModel;
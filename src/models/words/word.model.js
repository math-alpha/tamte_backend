const mongoose = require('mongoose');
const {Schema} = mongoose;

const wordSchema = new Schema({
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

const WordModel = mongoose.model('Word', wordSchema);

module.exports = WordModel;
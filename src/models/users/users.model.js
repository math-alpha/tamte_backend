const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({

    languages: [String], // ISO {3} Language code
    contributions: Number,
    email: String,
    verified_email: Boolean,
    phone: Number,

    checkr_id: String,
    referral: String,
    first_name: String,
    middle_name: String,
    no_middle_name: Boolean,
    last_name: String,
    uri: String,
    dob: Date,
    zipcode: Number,
    driver_license_state: String,
    copy_requested: {
        type: Boolean,
        default: true,
    },
    legal_doc: {
        type: String,
        default: ""
    },
    check_doc: {
        type: String,
        default: ""
    },
    ssn: {
        type: String,
        unique: true,
    },
    driver_license: {
        type: Number,
        unique: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: false
    },
    updated: {
        type: Date,
        default: Date.now()
    },
    created: {
        type: Date,
        default: Date.now(),
        immutable: true
    }

});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
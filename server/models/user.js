const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_token: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        default: 'unknown',
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    role: {
        type: String,
        default: 'renter'
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    profilePicture: {
        type: String,
    },
    contactNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);
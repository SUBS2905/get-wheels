const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '180s' }
    }
}, { timestamps: true });


module.exports = mongoose.model('OtpAuth', otpSchema);
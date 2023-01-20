const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    vehicleName: {
        type: String,
        required: true
    },
    vehicleOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    endDate: {
        type: String,
        required: true
    },
    bill: {
        type: Number,
        required: true
    },
    status: {
        type: String,
    },
    date_added: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Deal', dealSchema);
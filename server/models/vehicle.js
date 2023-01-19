const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleName: {
        type: String,
        required: true,
        trim: true,
        min: 2, max: 50
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
        max: 70
    },
    location: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    vehiclePictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }
    ],
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ownerInfo: {
        ownerName: String,
        contactNumber: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
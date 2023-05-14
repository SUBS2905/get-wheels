const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleId:{
        type:String
    },
    vehicleName: {
        type: String,
        required: true,
        trim: true,
        min: 2, max: 50
    },
    ownerName: {
        type: String,
        required: true,
        trim: true,
        min: 2, max: 50
    },
    city: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true,
        min: 10, max: 12
    },
    price: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
        max: 70
    },
    description: {
        type: String,
        required: true,
        trim: true,
        min: 2, max: 50
    },
    brand: {
        type: String,
        required: true
    },
    registrationDate: {
        type: String,
        required: true,
    },
    km: {
        type: Number,
    },
    model: {
        type: String,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    },
    hp: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    fuel: {
        type: String,
        required: true,
    },
    brakes: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    
    
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
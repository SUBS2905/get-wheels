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


userSchema.virtual('password').set(function (password) {
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
});

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}


module.exports = mongoose.model('User', userSchema);
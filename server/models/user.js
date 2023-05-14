const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_token: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
}, { timestamps: true });


// userSchema.virtual('password').set(function (password) {
//     this.hash_password = bcrypt.hashSync(password, 10);
// });

// userSchema.virtual('fullName').get(function () {
//     return `${this.firstName} ${this.lastName}`
// });

// userSchema.methods = {
//     authenticate: function (password) {
//         return bcrypt.compareSync(password, this.hash_password);
//     }
// }


module.exports = mongoose.model('User', userSchema);
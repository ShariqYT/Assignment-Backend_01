const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        default: []
    }]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;
const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Address = mongoose.model('Address', AddressSchema);
module.exports = Address;
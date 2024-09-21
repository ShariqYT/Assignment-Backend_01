const User = require('../models/user');
const Address = require('../models/address');

exports.createUserWithAddress = async (req, res) => {
    const { name, address } = req.body;

    try {
        const user = new User({ name });
        const savedUser = await user.save();

        const UserAddress = new Address({ address, userId: savedUser._id });
        const savedAddress = await UserAddress.save();

        savedUser.addresses.push(savedAddress._id);
        await savedUser.save();

        res.status(201).send({ message: 'User and address created successfully', user: savedUser, address: savedAddress });
    } catch (error) {
        res.status(500).send({ message: 'Error creating user or address', error });
    }
};

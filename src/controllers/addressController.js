const Address = require('../models/address');

exports.getAddressesByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const addresses = await Address.find({ userId });
    if (addresses.length === 0) {
      return res.status(404).send({ message: 'No addresses found for this user' });
    }
    res.status(200).send(addresses);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching addresses', error });
  }
};

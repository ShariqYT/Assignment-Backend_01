const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('/user/:userId/addresses', addressController.getAddressesByUser);

module.exports = router;
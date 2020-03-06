const express = require('express');

const router = express.Router();

const OffersController = require('../controllers/OffersController');

router.route('/get').get(OffersController.getData);

module.exports = router;

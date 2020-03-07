const express = require('express');

const router = express.Router();

const OffersController = require('../controllers/OffersController');

router.route('/get').get(OffersController.getData);
router.route('/:id').get(OffersController.getStoreOffers);

module.exports = router;

const express = require('express');

const router = express.Router();

const StoreDetailsController = require('../controllers/StoreDetailsController');

router.route('/:id').get(StoreDetailsController.getData);

module.exports = router;

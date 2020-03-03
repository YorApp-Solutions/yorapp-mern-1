const express = require('express');

const router = express.Router();

const StoreController = require('../controllers/StoreController');

router.route('/get').get(StoreController.getStores);

module.exports = router;

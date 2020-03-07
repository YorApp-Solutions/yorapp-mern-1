const express = require('express');

const router = express.Router();

const StoreController = require('../controllers/StoreController');

router.route('/get').get(StoreController.getStores);
router.route('/:id').get(StoreController.getStore);

module.exports = router;

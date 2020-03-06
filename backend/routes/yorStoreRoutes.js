const express = require('express');

const router = express.Router();

const YorStoreController = require('../controllers/YorStoreController');

router.route('/get').get(YorStoreController.getData);

module.exports = router;

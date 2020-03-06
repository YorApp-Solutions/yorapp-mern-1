const express = require('express');

const router = express.Router();

const BannerController = require('../controllers/BannerController');

router.route('/get').get(BannerController.getData);

module.exports = router;

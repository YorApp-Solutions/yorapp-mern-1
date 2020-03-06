const express = require('express');

const router = express.Router();

const LandingPageController = require('../controllers/LandingPageController');

router.route('/get').get(LandingPageController.getData);

module.exports = router;

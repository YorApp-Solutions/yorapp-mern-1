const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

router.route('/get').get(UserController.getUser);

module.exports = router;

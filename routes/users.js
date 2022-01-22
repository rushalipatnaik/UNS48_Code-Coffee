const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/home',usersController.home);
module.exports = router
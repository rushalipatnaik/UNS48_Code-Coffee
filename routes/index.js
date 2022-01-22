const { response } = require('express');
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.landing);
module.exports = router
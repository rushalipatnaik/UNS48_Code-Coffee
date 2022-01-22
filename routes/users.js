const express = require('express');
const router = express.Router();
const passport = require('passport')
const usersController = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/register', usersController.register)
router.get('/login', usersController.login)
router.post('/signUp',usersController.signUp);
router.post('/signIn',passport.authenticate(
    'local',
    {failureRedirect:'/users/login'}
),usersController.signIn);
router.get('/signOut',usersController.signOut);

module.exports = router;
const express = require("express");
const router = express.Router();
const {signUp, verifyOtp, UserProfile, signIn, verifyLogin} = require("../controllers/authController");
// const { requireSignIn, renterMiddleware } = require('../middleware/auth_middleware');


router.route('/signup').post(signUp);
router.route('/signup/verify').post(verifyOtp);
router.route('/signin').post(signIn);
router.route('/signin/verify').post(verifyLogin);
// router.get('/user/:userId', requireSignIn, renterMiddleware, UserProfile);


module.exports = router;
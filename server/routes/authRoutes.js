const express = require("express");
const router = express.Router();
const {signUp, verifyOtp} = require("../controllers/authController");


router.route('/signup')
    .post(signUp);

router.route('/signup/verify')
   .post(verifyOtp);


module.exports = router;
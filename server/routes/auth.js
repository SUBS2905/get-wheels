const express = require('express');
const { signup, signin, signout } = require('../controllers/auth');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/sign-out', signout)

module.exports = router;
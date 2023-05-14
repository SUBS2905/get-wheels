const express = require("express");
const router = express.Router();
const {contactNotify, dealNotify} = require("../controllers/notifyController");

router.route('/dealnotification').post(dealNotify);
router.route('/contactnotification').post(contactNotify);

module.exports = router;
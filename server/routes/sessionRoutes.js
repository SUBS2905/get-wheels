const express = require("express");
const router = express.Router();
const {sessionValidation} = require("../controllers/sessionController");


router.route('/valid').get(sessionValidation);


module.exports = router;
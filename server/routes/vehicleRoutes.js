const express = require("express");
const router = express.Router();
const vehController = require("../controllers/vehController");


router.get("/getallvehicles", vehController.getAllVehicles);
// router.get("/getallvehiclesbyowner/:ownerId", vehController.getAllVehiclesByOwnerId);
router.post("/getvehiclesbyid", vehController.getVehicleByVehicleId);
router.post("/addvehicle", vehController.addVeh);
// router.put("/editvehicle", vehController.editVeh);
// router.post("/deletevehicle", vehController.deleteVeh);


module.exports = router;
const Vehicle = require("../models/vehicle");
// const Deal = require('../models/vehicleDeal');
const uuid = require('uuid')


const addVeh = (req, res) => {
    const { vehicleName,ownerName,city,contactNumber,price,address,description,brand,registrationDate,km,model,engine,hp,transmission,fuel,brakes,comment} = req.body;

    // let vehiclePictures = [];
    // if (req.files.length > 0) {
    //     vehiclePictures = req.files.map((file) => {
    //         return { img: file.filename };
    //     })
    // }

    const newVehicle = new Vehicle({
        vehicleId: uuid.v4(),
        vehicleName:vehicleName,
        ownerName:ownerName,
        city:city,
        contactNumber:contactNumber,
        price:price,
        address:address,
        description:description,
        brand:brand,
        registrationDate:registrationDate,
        km:km,
        model:model,
        engine:engine,
        hp:hp,
        transmission:transmission,
        fuel:fuel,
        brakes:brakes,
        comment:comment
    });
    newVehicle.save((error, _veh) => {
        if (error) return res.status(400).json({ msg: `While saving new vehicle something went wrong`, error });
        if (_veh) return res.status(201).json({ _veh, files: req.files });
    })
}
// const addVeh = (req, res) => {
//     const { vehicleName,description, address, location, brand, price } = req.body;
//     const ownerInfo = {
//         ownerName: req.user.fullName,
//         contactNumber: req.user.contactNumber
//     }

//     let vehiclePictures = [];
//     if (req.files.length > 0) {
//         vehiclePictures = req.files.map((file) => {
//             return { img: file.filename };
//         })
//     }

//     const newVehicle = new Vehicle({
//         vehicleName: vehicleName,
//         address: address,
//         description: description,
//         location: location,
//         brand: brand,
//         price: price,
//         vehiclePictures,
//         ownerId: req.user.id,
//         ownerInfo: ownerInfo
//     });
//     newVehicle.save((error, _veh) => {
//         if (error) return res.status(400).json({ msg: `While saving new vehicle something went wrong`, error });
//         if (_veh) return res.status(201).json({ _veh, files: req.files });
//     })
// }

const getVehicleByVehicleId = (req, res) => {
    const { vehicleId } = req.body;
    if (vehicleId) {
        Vehicle.findOne({ vehicleId: vehicleId })
            .exec((error, _vehicle) => {
                if (error) return res.status(400).json({ msg: `Something went wrong`, error });
                if (_vehicle) res.status(200).json({ _vehicle });
            })
    } else {
        return res.status(400).json({msg: `Vehicle dosen't exit`});
    }
}

// const getAllVehiclesByOwnerId = async (req, res) => {
//     const { ownerId } = req.params;
//     if (ownerId) {
//         Vehicle.find({ ownerId: ownerId })
//             .exec((error, _allvehs) => {
//                 if (error) return res.status(400).json({ msg: `Something went wrong`, error });
//                 if (_allvehs) res.status(200).json({ _allvehs });
//             })
//     }
// }

// const editVeh = async (req, res) => {
//     try {
//         const veh = await Vehicle.findOne({ _id: req.body.vehId });
//         let vehiclePictures = [];
//         if (req.files.length > 0) {
//             vehiclePictures = req.files.map((file) => {
//             return { img: file.filename };
//             })
//         }
//         const ownerInfo = {
//             ownerName: req.user.fullName,
//             contactNumber: req.user.contactNumber
//         }

//         veh.vehicleName= req.body.vehicleName,
//         veh.address= req.body.address,
//         veh.description= req.body.description,
//         veh.location= req.body.location,
//         veh.brand= req.body.brand,
//         veh.price= req.body.price,
//         veh.vehiclePictures=vehiclePictures
//         veh.ownerId= req.user.id,
//         veh.ownerInfo= ownerInfo
  
//         await veh.save();
  
//         res.send("Vehicle details updated successfully");
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   };

const getAllVehicles = async (req, res) => {
    const allVehicles = await Vehicle.find({});
    if (allVehicles) return res.status(200).json({ allVehicles});
    else return res.status(400).json({ msg: `Something wrong happened while fectching all vehicles` });
}

// const deleteVeh = async (req, res) => {
//     try {
//       await Vehicle.findByIdAndRemove({_id: req.body.vehId});
  
//       res.send("Vehicle deleted successfully");
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   }


module.exports = {
    addVeh,
    getAllVehicles,
    getVehicleByVehicleId,
    // getAllVehiclesByOwnerId,
    // deleteVeh,
    // editVeh
}
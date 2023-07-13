const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Parkings = require('../Models/Parkings');
// const {Project, floor, building, parkings,Total_Parking_Area_square_feet, Single_Parking_Area_square_feet, extra_facilities} = req,body;

router.post('/create/parking',verifyToken,async(req,res)=>{
    const {Project, floor, building, parkings,Total_Parking_Area_square_feet, Single_Parking_Area_square_feet, extra_facilities} = req.body;
    const newParking = new Parkings({
        Project,
        floor,
        building,
        parkings,
        Total_Parking_Area_square_feet,
        Single_Parking_Area_square_feet,
        extra_facilities
    });
    try {
        const savedParking = await newParking.save();
        res.status(200).json(savedParking);
    } catch (error) {
        res.status(500).json(error);
    }
})

// update parking details

router.put('/update/parking/:id',verifyToken,async(req,res)=>{
    try {
        const parking = await Parkings.findById(req.params.id);
        if(!parking) return res.status(404).send("parking not found");
        const {project, floor, building, parkings,Total_Parking_Area_square_feet, Single_Parking_Area_square_feet, extra_facilities} = req.body;
        const updatedParking = await Parkings.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedParking);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/delete/parking/:id',verifyToken,async(req,res)=>{
    try {
        const parking = await Parkings.findById(req.params.id);
        if(!parking) return res.status(404).send("parking not found");
        const deletedParking = await Parkings.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedParking);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all parking
router.get('/all/parking',verifyToken,async(req,res)=>{
    const {page,limits} = req.query;
    try {
        const parking = await Parkings.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);
        res.status(200).json(parking);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get one parking

router.get('/parking/:id',verifyToken,async(req,res)=>{
    try {
        const parking = await Parkings.findById(req.params.id);
        if(!parking) return res.status(404).send("parking not found");
        res.status(200).json(parking);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
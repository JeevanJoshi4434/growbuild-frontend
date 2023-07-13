const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Flats = require('../Models/Flats');
// const {Project, floor, building, unit ,flat, flat_area, parking, starting_price ,extra_facilities} = req.body;
// create Flat

router.post('/create/flat',verifyToken,async(req,res)=>{
    const {Project, floor, building, unit ,flat, flat_area, parking, starting_price ,extra_facilities} = req.body;
    const newFlat = new Flats({
        Project,
        floor,
        building,
        unit,
        flat,
        flat_area,
        parking,
        starting_price,
        extra_facilities
    });
    try {
        const savedFlat = await newFlat.save();
        res.status(200).json(savedFlat);
    } catch (error) {
        res.status(500).json(error);
    }
})

// update Flat
router.put('/update/flat/:id',verifyToken,async(req,res)=>{
    try {
        const flat = await Flats.findById(req.params.id);
        if(!flat) return res.status(404).send("flat not found");
        const updatedFlat = await Flats.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedFlat);
    } catch (error) {
        res.status(500).json(error);
    }
})

// delete Flat
router.delete('/delete/flat/:id',verifyToken,async(req,res)=>{
    try {
        const flat = await Flats.findById(req.params.id);
        if(!flat) return res.status(404).send("flat not found");
        const deletedFlat = await Flats.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedFlat);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all Flat
router.get('/all/flat',verifyToken,async(req,res)=>{
    const {page,limits} = req.query;
    try {
        const flat = await Flats.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);
        res.status(200).json(flat);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get one flat
router.get('/flat/:id',verifyToken,async(req,res)=>{
    const flat = await Flats.findById(req.params.id);
    if(!flat) return res.status(404).send("flat not found");
    res.status(200).json(flat);
})

module.exports = router;
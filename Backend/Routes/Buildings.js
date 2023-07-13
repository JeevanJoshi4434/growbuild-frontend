const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Bookings = require('../Models/Buildings');
const { route } = require('./User');
router.post('/create/building',verifyToken,async(req,res)=>{
    const {Project, buildingName, total_number_of_floors, total_number_of_flats, parkings} = req.body;
    const booking = new Bookings({Project, buildingName, total_number_of_floors, total_number_of_flats, parkings});
    try{
        const savedBooking = await booking.save();
        res.status(200).json(savedBooking);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/buildings/:id',verifyToken,async(req,res)=>{
    const id = req.params.id;
    try {
        const list = await Bookings.find({Project:id});
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error);
    }
    
})
router.put('/update/building/:id',verifyToken,async(req,res)=>{
    const booking = await Bookings.findById(req.params.id);
    if(!booking)return res.status(404).json("Not Found!");
    try{
        const updatedBooking = await Bookings.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedBooking);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/building/:id',verifyToken,async(req,res)=>{
    const isValid = await Bookings.findById(req.params.id);
    if(!isValid) return res.status(404).json("Not Found!");
    try{
        const booking = await Bookings.findById(req.params.id);
        if(!booking) res.status(404).json("Not Found!");
        res.status(200).json(booking);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/all/building',verifyToken,async(req,res)=>{
    const {page,limits} = req.query;
    try{
        const booking = await Bookings.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);
        res.status(200).json(booking);
    }catch{
        res.status(500).json(err);
    }
})

router.delete('/delete/building/:id',verifyToken,async(req,res)=>{
    const booking = await Bookings.findById(req.params.id);
    if(!booking) return res.status(404).json("Not Found!");
    try{
        const deletedBooking = await Bookings.findByIdAndDelete(req.params.id);
        
        res.status(200).json(deletedBooking);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Bookings = require('../Models/Bookings');

// create Booking
router.post('/create/booking',verifyToken,async(req,res)=>{
    const {Project, building, floor, unit, flat, parking, booking_price, booking_date, allotment_date, agreement_date, first_applicant_name, first_applicant_father_name, first_applicant_husband_name, first_applicant_permanentAddress, first_applicant_correspondAddress,first_applicant_contactNumber, first_applicant_email, first_applicant_dob, first_applicant_AadharNumber, first_applicant_pan_number, first_applicant_City, first_applicant_police_station, first_applicant_country, first_applicant_occupation, first_applicant_religion, first_applicant_status, second_applicant_name, second_applicant_father_name, second_applicant_husband_name, second_applicant_contact_number, second_applicant_email, second_applicant_dob, second_applicant_pan_number, second_applicant_occupation, second_applicant_address, second_applicant_relation_with_first_applicant, third_applicant_name, third_applicant_phone_number, fourth_applicant_name, fourth_applicant_phone_number,second_applicant_adhar_number} = req.body;
    const newBooking = new Bookings({
        Project,
        building,
        floor,
        unit,
        flat,
        parking,
        booking_price,
        booking_date,
        allotment_date,
        agreement_date,
        first_applicant_name,
        first_applicant_father_name,
        first_applicant_husband_name,
        first_applicant_permanentAddress,
        first_applicant_correspondAddress,
        first_applicant_contactNumber,
        first_applicant_email,
        first_applicant_dob,
        first_applicant_AadharNumber,
        first_applicant_pan_number,
        first_applicant_City,
        first_applicant_police_station,
        first_applicant_country,
        first_applicant_occupation,
        first_applicant_religion,
        first_applicant_status,
        second_applicant_name,
        second_applicant_father_name,
        second_applicant_husband_name,
        second_applicant_contact_number,
        second_applicant_email,
        second_applicant_dob,
        second_applicant_pan_number,
        second_applicant_adhar_number,
        second_applicant_occupation,
        second_applicant_address,
        second_applicant_relation_with_first_applicant,
        third_applicant_name,
        third_applicant_phone_number,
        fourth_applicant_name,
        fourth_applicant_phone_number
        
    })
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json(savedBooking);
    }catch (err) {
        res.status(500).json(err);
    }
})

// update booking
router.put('/update/booking/:id',verifyToken,async(req,res)=>{
    const Booking = await Bookings.findById(req.params.id);
    if(!Booking) return res.status(404).send('Booking not found');
    try{
        const updatedBooking = await Bookings.findByIdAndUpdate(req.params.id, {$set:req.body})
        res.status(200).json(updatedBooking);
    } catch (error){
        res.status(500).json(error);
    }
})

// delete booking

router.delete('/delete/booking/:id',verifyToken,async(req,res)=>{
    const Booking = await Bookings.findById(req.params.id);
    if(!Booking) return res.status(404).send('Booking not found');
    try{
        const deletedBooking = await Bookings.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBooking);
    } catch (error){
        res.status(500).json(error);
    }
})

// get one booking
router.get('/get/booking/:id',verifyToken,async(req,res)=>{
    const Booking = await Bookings.findById(req.params.id);
    if(!Booking) return res.status(404).send('Booking not found');
    try{
        const booking = await Bookings.findById(req.params.id);
        res.status(200).json(booking);
    } catch (error){
        res.status(500).json(error);
    }
})

// get all booking
router.get('/get/all/booking',verifyToken,async(req,res)=>{
    const {page, limits} = req.query;
    try{
        const bookings = await Bookings.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);
        res.status(200).json(bookings);
    } catch (error){
        res.status(500).json(error);
    }
})

router.get('/:id/:project/:unit/:flat/:floor',verifyToken,async(req,res)=>{
    try{
        const booking = await Bookings.findOne({building:req.params.id,Project:req.params.project,floor:req.params.floor,unit:req.params.unit,flat:req.params.flat});
        if(!booking) return res.status(201).send('Booking not found');
        res.status(200).json(booking);
    } catch (error){
        res.status(500).json(error);
    }
})
module.exports = router;
const router = require('express').Router();
const verifyToken = require('../config/Verification');
const bookingStatus = require('../Models/bookingStatus');

// create

router.post('/create/bookingstatus',verifyToken,async(req,res)=>{
    const {BookingStatus, bookingDate, allotmentDate, agreementDate, buyer, customerID, project, applicationNumber, applicationDate, block, floor, rag_done, key_handed_over,Cobuyer_name, unit_type, unit_number, scheme_type,RsSquareFeet, discount, unit_cost,trans_discount,Sarea, financed_by,sales_executive, data_entry_by, telecaller,adjustment,loan_required} = req.body;
    const newBookingStatus = new bookingStatus({
        BookingStatus,
        bookingDate,
        allotmentDate,
        agreementDate,
        buyer,
        customerID,
        project,
        applicationNumber,
        applicationDate,
        block,
        floor,
        rag_done,
        key_handed_over,
        Cobuyer_name,
        unit_type,
        unit_number,
        scheme_type,
        RsSquareFeet,
        discount,
        unit_cost,
        trans_discount,
        Sarea,
        financed_by,
        sales_executive,
        data_entry_by,
        telecaller,
        adjustment,
        loan_required

    });
    try{
        const savedBookingStatus = await newBookingStatus.save();
        res.status(200).json(savedBookingStatus);
    } catch(err){
        res.status(500).json(err);
    }
})

// update

router.put('/update/bookingstatus/:id',verifyToken,async(req,res)=>{
    const bookingstatus = await bookingStatus.findById(req.params.id);
    if(!bookingstatus) return res.status(404).json("Not Found!");
    try{
        const updatedBookingStatus = await bookingStatus.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedBookingStatus);
    }catch(err){
        res.status(500).json(err);
    }
})

// delete

router.delete('/delete/bookingstatus/:id',verifyToken,async(req,res)=>{
    const bookingstatus = await bookingStatus.findById(req.params.id);
    if(!bookingstatus) return res.status(404).json("Not Found!");
    try{
        const deletedBookingStatus = await bookingStatus.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBookingStatus);
    }catch(err){
        res.status(500).json(err);
    }
})

// get one
router.get('/get/bookingstatus/:id',verifyToken,async(req,res)=>{
    const bookingstatus = await bookingStatus.findById(req.params.id);
    if(!bookingstatus) return res.status(404).json("Not Found!");
    try{
        const booking_status = await bookingStatus.findById(req.params.id);
        res.status(200).json(booking_status);
    }catch(err){
        res.status(500).json(err);
    }
})

// get all
router.get('/get/all/bookingstatus',verifyToken,async(req,res)=>{
    const {page, limits} = req.query;
    try{
        const bookingstatus = await bookingStatus.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);
        res.status(200).json(bookingstatus);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
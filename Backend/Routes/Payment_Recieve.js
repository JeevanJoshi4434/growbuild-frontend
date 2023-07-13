const router = require('express').Router();
const verifyToken = require('../config/Verification');
const paymentRecieve = require('../Models/paymentRecieve');
// create
router.post('/create/payment',verifyToken,async(req,res)=>{
    const {BookingID, Payment_Number, Paymentdate, payment_head, PaymentAmount, sgst, cgst, Stax,narration, narration_amount, check, DD, rtgs, neft, net_banking, credit_card, bounced,bank, branch, amount,totalAmount,leftAmount,paidAmount} = req.body;
    const payment = new paymentRecieve({
        BookingID,
        Payment_Number,
        Paymentdate,
        payment_head,
        PaymentAmount,
        sgst,
        cgst,
        Stax,
        narration,
        narration_amount,
        check,
        DD,
        rtgs,
        neft,
        net_banking,
        credit_card,
        bounced,
        bank,
        branch,
        amount,
        totalAmount,
        leftAmount,
        paidAmount
    })
    try {
        const savedPayment = await payment.save();
        res.status(200).json(savedPayment);
    }catch (err) {
        res.status(500).json(err);
    }
})

// update 
router.put('/update/payment/:id',verifyToken,async(req,res)=>{
    const payment = await paymentRecieve.findById(req.params.id);
    if(!payment) return res.status(404).json("Not Found!");
    try{
        const updatedPayment = await paymentRecieve.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedPayment);
    }catch(err){
        res.status(500).json(err);
    }
})

// DELETE
router.delete('/delete/payment/:id',verifyToken,async(req,res)=>{
    const payment = await paymentRecieve.findById(req.params.id);
    if(!payment) return res.status(404).json("Not Found!");
    try{
        const deletedPayment = await paymentRecieve.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPayment);
    }catch(err){
        res.status(500).json(err);
    }
})

// get one
router.get('/get/payment/:id',verifyToken,async(req,res)=>{
    const payment = await paymentRecieve.findById(req.params.id);
    if(!payment) return res.status(404).json("Not Found!");
    try{
        const paymentR = await paymentRecieve.findById(req.params.id);
        res.status(200).json(paymentR);
    }catch(err){
        res.status(500).json(err);
    }
})

// get all 
router.get('/get/all/payment',verifyToken,async(req,res)=>{
    const {page, limits} = req.query;
    try{
        const paymentR = await paymentRecieve.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);;
        res.status(200).json(paymentR);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Developer = require('../Models/Developer');

router.post('/create/dev',verifyToken,async(req,res)=>{
    const {Company,name,phoneNumber,faxNumber,email,address, description,GSTIN,designation,phone_res,phone_office, mobileNumber} = req.body;
    const developer = new Developer({Company,name,phoneNumber,faxNumber,email,address, description,GSTIN,designation,phone_res,phone_office, mobileNumber});
    try{
        const savedDeveloper = await developer.save();
        res.status(200).json(savedDeveloper);
    }catch(err){
        res.status(500).json(err);
    }
})

router.delete('/delete/dev/:id',verifyToken,async(req,res)=>{
    const dev = await Developer.findById(req.params.id);
    if(!dev) return res.status(404).json("Not Found!");
    try{
        const deletedDeveloper = await Developer.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDeveloper);
    }catch(err){
        res.status(500).json(err);
    }
})

router.put('/update/dev/:id',verifyToken,async(req,res)=>{
    const dev = await Developer.findById(req.params.id);
    if(!dev) return res.status(404).json("Not Found!");
    try{
        const updatedDeveloper = await Developer.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedDeveloper);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/dev/:id',verifyToken,async(req,res)=>{
    const dev = await Developer.findById(req.params.id);
    if(!dev) return res.status(404).json("Not Found!");
    try{
        const developer = await Developer.findById(req.params.id);
        res.status(200).json(developer);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/all/dev',verifyToken, async(req,res)=>{
    const {page,limits} = req.query;
    try{
        const developer = await Developer.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);;
        res.status(200).json(developer);
    }catch{
        res.status(500).json(err);
    }
})
module.exports = router;
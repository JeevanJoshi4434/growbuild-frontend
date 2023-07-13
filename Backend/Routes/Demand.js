const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Demands = require('../Models/Demands');
// const {Project, Building, stage_name, amount, extra_facilities} = req.body;

// create Demand

router.post('/create/demand',verifyToken,async(req,res)=>{
    const {Project, Building, stage_name, amount, extra_facilities} = req.body;
    const newDemand = new Demands({
        Project,
        Building,
        stage_name,
        amount,
        extra_facilities
    })
    try {
        const savedDemand = await newDemand.save();
        res.status(200).json(savedDemand);
    }catch (err) {
        res.status(500).json(err);
    }
})

// update
router.put('/update/demand/:id',verifyToken,async(req,res)=>{
    const demand = await Demands.findById(req.params.id);
    if(!demand) return res.status(404).json("Not Found!");
    try{
        const updatedDemand = await Demands.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedDemand);
    }catch(err){
        res.status(500).json(err);
    }
})
router.get('/demand/:id/:p',verifyToken,async(req,res)=>{
    try{
        const demand = await Demands.find({Project:req.params.p,Building:req.params.id});
    if(!demand) return res.status(201).json("Not Found!");
        res.status(200).json(demand);
    }catch(error){
        res.status(500).json(error)
    }
})
// delete
router.delete('/delete/demand/:id',verifyToken,async(req,res)=>{
    const demand = await Demands.findById(req.params.id);
    if(!demand) return res.status(404).json("Not Found!");
    try{
        const deletedDemand = await Demands.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDemand);
    }catch(err){
        res.status(500).json(err);
    }
})

// get one
router.get('/get/demand/:id',verifyToken,async(req,res)=>{
    try{
    const isValid = await Demands.findById(req.params.id);
    if(!isValid) return res.status(404).json("Not Found!");
        const demand = await Demands.findById(req.params.id);
        res.status(200).json(demand);
    }catch(err){
        res.status(500).json(err);
    }
})

// get all
router.get('/get/all/demand',verifyToken,async(req,res)=>{
    const {page, limits} = req.query;
    try{
        const demands = await Demands.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);
        res.status(200).json(demands);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;
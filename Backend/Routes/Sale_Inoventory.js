const router = require('express').Router();
const verifyToken = require('../config/Verification');
const SaleInventory = require('../Models/SaleInoventory');
// const {Project, block, DP_discount, unit_type, unit_number, RS_squareFeet,buildUpArea,carpetArea, balconyArea, salableArea, floor, bedrooms, unit_type,numOfUnits, optionalUnit} = req.body;
// create SaleInventory
router.post('/create/saleinventory',verifyToken,async(req,res)=>{
    const {Project, block, DP_discount,unit_number, RS_squareFeet,buildUpArea,carpetArea, balconyArea, salableArea, floor, bedrooms, unit_type,numOfUnits, optionalUnit} = req.body;
    const newSaleInventory = new SaleInventory({
        Project,
        block,
        DP_discount,
        unit_type,
        unit_number,
        RS_squareFeet,
        buildUpArea,
        carpetArea,
        balconyArea,
        salableArea,
        floor,
        bedrooms,
        unit_type,
        numOfUnits,
        optionalUnit
    })
    try {
        const savedSaleInventory = await newSaleInventory.save();
        res.status(200).json(savedSaleInventory);
    }catch (err) {
        res.status(500).json(err);
    }
})

// update

router.put('/update/saleinventory/:id',verifyToken,async(req,res)=>{
    const saleinventory = await SaleInventory.findById(req.params.id);
    if(!saleinventory) return res.status(404).json("Not Found!");
    try{
        const updatedSaleInventory = await SaleInventory.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedSaleInventory);
    }catch(err){
        res.status(500).json(err);
    }
})

// delete

router.delete('/delete/saleinventory/:id',verifyToken,async(req,res)=>{
    const saleinventory = await SaleInventory.findById(req.params.id);
    if(!saleinventory) return res.status(404).json("Not Found!");
    try{
        const deletedSaleInventory = await SaleInventory.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedSaleInventory);
    }catch(err){
        res.status(500).json(err);
    }
})

// get one
router.get('/get/saleinventory/:id',verifyToken,async(req,res)=>{
    const isValid = await SaleInventory.findById(req.params.id);
    if(!isValid) return res.status(404).json("Not Found!");
    try{
        const saleInoventory = await SaleInventory.findById(req.params.id);
        res.status(200).json(saleInoventory);
    }catch(err){
        res.status(500).json(err);
    }
})
// get all
router.get('/get/all/saleinventory',verifyToken,async(req,res)=>{
    const {page, limits} = req.query;
    try{
        const inventory = await SaleInventory.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);
        res.status(200).json(inventory);
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;
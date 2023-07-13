const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Project = require('../Models/Project');

router.post('/create/project',verifyToken,async(req,res)=>{
    const {Name,developer,floorNumber,startingDate,endDate,CI,demand,NOI,location,address,owner,profitCenter,description} = req.body;    
    const project = new Project({Name,developer,floorNumber,startingDate,endDate,CI,demand,NOI,location,address,owner,profitCenter,description});
    try{
        const savedProject = await project.save();
        res.status(200).json(savedProject);
    }catch(err){
        res.status(500).json(err);
    }
});

router.put('/update/project/:id',verifyToken,async(req,res)=>{
    const project = await Project.findById(req.params.id);
    if(!project)return res.status(404).json("Not Found!");
    try{
        const updatedProject = await Project.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json(updatedProject);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/project/:id',verifyToken,async(req,res)=>{
    const isValid = await Project.findById(req.params.id);
    if(!isValid) return res.status(404).json("Not Found!");
    try{
        const project = await Project.findById(req.params.id);
        if(!project) res.status(404).json("Not Found!");
        res.status(200).json(project);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/all/project',verifyToken,async(req,res)=>{
    const {page,limits} = req.query;
    try{
        const project = await Project.find().sort({createdAt:-1}).skip((page-1)*limits).limit(limits);;
        res.status(200).json(project);
    }catch{
        res.status(500).json(err);
    }
});

router.delete('/delete/project/:id',verifyToken,async(req,res)=>{
    const project = await Project.findById(req.params.id);
    if(!project) return res.status(404).json("Not Found!");
    try{
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
       
        res.status(200).json(deletedProject);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
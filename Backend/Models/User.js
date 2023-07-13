const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    
},{timestamp:true})

module.exports = mongoose.model('User',user);
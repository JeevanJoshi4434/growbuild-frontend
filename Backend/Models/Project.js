const mongoose = require('mongoose');

const Project = new mongoose.Schema({
    Name:{
        type:String,
    }, developer:{
        type:String,
    },floorNumber:{
        type:Number,
    },startingDate:{
        type:String
    }, endDate:{
        type:String
    },CI:{
        type:Number
    },demand:{
        type:String
    },NOI:{
        type:String
    },location:{
        type:String
    },address:{
        type:String
    }, owner:{
        type:String
    }, profitCenter:{
        type:String
    } ,description:{
        type:String
    }
})

module.exports = mongoose.model('Project',Project);
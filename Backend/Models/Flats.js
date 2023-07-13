const mongoose = require('mongoose');

const Flat = new mongoose.Schema({
    Project:{
        type:String,
    }, floor:{
        type:String,
    }, building:{
        type:String,
    }, unit:{
        type:String,
    } ,flat:{
        type:String
    }, flat_area:{
        type:Number
    }, parking:{
        type:Number
    }, starting_price:{
        type:Number
    } ,extra_facilities:{
        type:String
    }
});

module.exports = mongoose.model('Flat', Flat);
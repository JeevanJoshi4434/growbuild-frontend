const mongoose = require('mongoose');

const Building = new mongoose.Schema({
 Project:{
    type:String
 }, buildingName:{
    type:String
 }, total_number_of_floors:{
    type:Number
 }, total_number_of_flats:{
    type:Number
 }, parkings:{
    type:Number
 }
});

module.exports = mongoose.model('Building',Building);
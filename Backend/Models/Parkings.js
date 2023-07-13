const mongoose = require('mongoose');

const Parking = new mongoose.Schema({
 Project:{
     type:String,
 }, floor:{
     type:String,
 }, building:{
     type:String,
 }, parkings:{
     type:Number
 },Total_Parking_Area_square_feet:{
     type:Number
 }, Single_Parking_Area_square_feet:{
     type:Number
 }, extra_facilities:{
     type:String
 }
})

module.exports = mongoose.model('Parking', Parking);
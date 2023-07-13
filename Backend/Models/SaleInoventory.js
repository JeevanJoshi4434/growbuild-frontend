const mongoose = require('mongoose');

const SaleInoventory = new mongoose.Schema({
 Project:{
     type:String,
 }, block:{
     type:String,
 }, DP_discount:{
     type:Number
 }, unit_type:{
     type:String
 }, unit_number:{
     type:Number
 }, RS_squareFeet:{
     type:Number
 },buildUpArea:{
     type:Number
 },carpetArea:{
     type:Number
 }, balconyArea:{
     type:String
 }, salableArea:{
     type:String
 }, floor:{
     type:String
 }, bedrooms:{
     type:String
 }, numOfUnits:{
     type:Number
 }, optionalUnit:{
     type:String
 }
})
module.exports = mongoose.model('SaleInoventory', SaleInoventory);
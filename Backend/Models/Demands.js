const mongoose = require('mongoose');

const Demand = new mongoose.Schema({
 Project:{
    type:String
 }, Building:{
    type:String
 }, stage_name:{
    type:String
 }, amount:{
    type:Number
 }, extra_facilities:{
    type:String
 }
})

module.exports = mongoose.model('Demand', Demand);
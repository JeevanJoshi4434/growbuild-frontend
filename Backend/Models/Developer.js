const mongoose = require("mongoose");

const Developer = new mongoose.Schema({
        Company:{
            type:String,
            require:true
        },phoneNumber:{
            type:Number,
            require:true
        },faxNumber:{
            type:String
        },email:{
            type:String,
        },address:{
            type:String,
        }, description:{
            type:String
        },GSTIN:{
            type:String
        }, name:{
            type:String
        }, designation:{
            type:String
        },phone_res:{
            type:String
        },phone_office:{
            type:String
        }, mobileNumber:{
            type:Number
        }
})


module.exports = mongoose.model("Developer", Developer);

module.exports = mongoose.model("Developer", Developer);
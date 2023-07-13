const mongoose = require('mongoose');

const BookingStatus = new mongoose.Schema({
    BookingStatus:{
        type:String
    }, bookingDate:{
        type:String
    }, allotmentDate:{
        type:String
    }, agreementDate:{
        type:String
    }, buyer:{
        type:String
    }, customerID:{
        type:String
    }, project:{
        type:String
    }, applicationNumber:{
        type:String
    }, applicationDate:{
        type:String
    }, block:{
        type:String
    }, floor:{
        type:String
    }, rag_done:{
        type:Boolean
    }, key_handed_over:{
        type:Boolean
    },Cobuyer_name:{
        type:String
    }, unit_type:{
        type:String
    }, unit_number:{
        type:String
    }, scheme_type:{
        type:String
    },RsSquareFeet:{
        type:Number
    }, discount:{
        type:Number
    }, unit_cost:{
        type:Number
    },trans_discount:{
        type:Number
    },Sarea:{
        type:String
    }, financed_by:{
        type:String
    },sales_executive:{
        type:String
    }, data_entry_by:{
        type:String
    }, telecaller:{
        type:String
    },adjustment:{
        type:Number
    },loan_required:{
        type:Boolean
    }
})

module.exports = mongoose.model('BookingStatus', BookingStatus);
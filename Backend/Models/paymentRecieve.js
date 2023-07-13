const mongoose = require('mongoose');

const PaymentRecieve = new mongoose.Schema({
    BookingID:{
        type:String
    }, Payment_Number:{
        type:String
    }, Paymentdate:{
        type:String
    }, payment_head:{
        type:String
    }, PaymentAmount:{
        type:Number
    }, sgst:{
        type:Number
    }, cgst:{
        type:Number
    }, Stax:{
        type:Number
    },narration:{
        type:String
    }, narration_amount:{
        type:Number
    }, check:{
        type:Boolean,
        default:false
    }, DD:{
        type:Boolean,
        default:false
    }, rtgs:{
        
        type:Boolean,
        default:false
    }, neft:{
        
        type:Boolean,
        default:false
    }, net_banking:{
        
        type:Boolean,
        default:false
    }, credit_card:{ 
        type:Boolean,
        default:false
    }, check_number:{
        type:String
    }, date:{
        type:String
    }, bounced:{
        type:Boolean,
        default:false
    },bank:{
        type:String
    }, branch:{
        type:String
    }, amount:{
        type:Number
    },
    totalAmount:{
        type:Number
    },
    leftAmount:{
        type:Number
    },
    paidAmount:{
        type:Number
    }
})

module.exports = mongoose.model('PaymentRecieve', PaymentRecieve);
const mongoose = require('mongoose');

const BuyerMaster = new mongoose.Schema({
    ProProject: {
        type: String
    },
    Building: {
        type: String
    },
    floor: {
        type: String
    },
    unit: {
        type: String
    },
    secondfloor: {
        type: String
    },
    flat: {
        type: String
    },
    parking: {
        type: Number
    },
    booking_price: {
        type: Number
    },
    booking_date: {
        type: String
    },
    allotment_date: {
        type: String
    },
    agreement_date: {
        type: String
    },
    Owner_name: {
        type: String
    },
    payment_stage: {
        type: String
    },
    price: {
        type: Number
    },
    payment_receive: {
        type: Number
    },
    payment_type: {
        type: String
    },
    check_number: {
        type: String
    },
    date: {
        type: String
    },
    bank_name: {
        type: String
    },
    branch_name: {
        type: String
    },
    bank_account: {
        type: String
    },
    card_number: {
        type: String
    }

});

module.exports = mongoose.model('BuyerMaster', BuyerMaster);
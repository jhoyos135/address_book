const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({

    name: {
        type: String,
        required: [true, 'please add a name']
    },
    age: {
        type: Number
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: [true, 'please add a name']
    }


});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;

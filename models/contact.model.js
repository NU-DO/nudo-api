const mongoose = require('mongoose');

const contactShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }
})

const Contact = mongoose.model('Contact', contactShema)

module.exports = Contact
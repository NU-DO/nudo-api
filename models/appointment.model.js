const mongoose = require('mongoose')

const appointmentsSchema = new mongoose.Schema(
    {
        event: {
            type: String,
            required: true
        }, 
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        recurrency: {
            type: String,
            required: true
        }
    }
)

const Appointments = mongoose.model('Appointments', appointmentsSchema)
module.exports = Appointments
const mongoose = require('mongoose')

const appointmentsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'El título es obligatorio']
        }, 
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria']
        },
        date: {
            type: String,
            required: [true, 'La fecha es obligatoria']
        },
        type: {
            type: String,
            required: [true, 'El tipo de evento es obligatoria'],
            enum: ['Cumpleaños', 'Cita Médica', 'Reunión Familiar', 'Reunión con Amigos', 'Viaje', 'Cita Administrativa', 'Otro']
        },
        recurrency: {
            type: String,
            required: [true, 'La recurrencia del evento es obligatoria'],
            enum: ['Semanal', 'Mensual', 'Anual', 'Puntual']
        }
    }
)

const Appointments = mongoose.model('Appointments', appointmentsSchema)
module.exports = Appointments
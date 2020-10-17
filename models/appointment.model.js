const mongoose = require('mongoose')

const appointmentsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'El título es obligatorio']
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
            required: [true, 'El tupo se evento es obligatoria'],
            enum: ['Cumpleaños', 'Cita Médica', 'Reunión Familiar', 'Reunión con Amigos', 'Viaje', 'Cita Administrativa', 'Otro']
        },
        recurrency: {
            type: String,
            required: true,
            enum: ['Semanal', 'Mensual', 'Anual', 'Puntual']
        }
    }
)

const Appointments = mongoose.model('Appointments', appointmentsSchema)
module.exports = Appointments
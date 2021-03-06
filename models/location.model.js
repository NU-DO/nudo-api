const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre de la localización es obligatorio'],
        },
        description: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },

    }, {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc._id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    } 
)

const Location = mongoose.model('Location', locationSchema)
module.exports = Location
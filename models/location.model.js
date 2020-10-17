const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre de la localización es obligatorio'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        coordenates: {
            type: String
        },
    } , {
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
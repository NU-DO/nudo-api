const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: [true, 'Añade una imagen'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        date: {
            type: Number
        }, 
        description: {
            type: String
        },
        contact: {
            type: [mongoose.Schema.Types.ObjectId]
        },
        event: {
            type: mongoose.Schema.Types.ObjectId
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

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: [true, 'Image is required'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
        },
        date: {
            type: String
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
        }, 
        contact: {
            type: [mongoose.Schema.Types.ObjectId],
        },
        description: {
            type: String,
        }
    } , {
        timestamps: true,
        toJSON: {
          virtuals: true,
          transform: (doc, ret) => {
            ret.id = doc._id
            delete ret._id
            delete ret.__v
            delete ret.password
            return ret
          }
        }
    }
)

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
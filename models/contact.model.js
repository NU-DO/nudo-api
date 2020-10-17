const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
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
    }, {
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

contactSchema.virtual('images', {
    ref: 'Image',
    localField: '_id',
    foreignField: 'contact',
    justOne: false,
})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact
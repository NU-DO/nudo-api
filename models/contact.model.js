const mongoose = require('mongoose')

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        role: {
            type: String,
            required: [true, 'La relación es obligatoria']
        },
        address: {
            type: String,
        },
        email: {
            type: String,
            match: [EMAIL_PATTERN, 'El Email es invalido']
        },
        phone: {
            type: String,
            minlength: [9, 'La longitud mínima es 9 dígitos']
        },
        photo: {
            type: String,
            default: 'https://res.cloudinary.com/difhe4gl3/image/upload/v1604137571/NUDO/assets/contact-default-sin-fondo_copia_x1fmwa.png'
        },
        birthday: {
            type: String,
        }, 
        description: {
            type: String,
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
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
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
            type: String
        },
        year: {
            type: Number,
            required: [true, 'El año es obligatorio'],
            min: [1900, 'Introduc un año valido'],
            max: [2030, 'Introduc un año valido']
        },
        images: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Image'
            }
        ],
        contacts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Contact'
            }
        ],
        playlist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Playlist'
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location'
        },
        video: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
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

const Event = mongoose.model('Event', eventSchema)
module.exports = Event
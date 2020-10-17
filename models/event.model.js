const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required']
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        description: {
            type: String
        },
        year: {
            type: Number
        },
        links: {
            type: [String]
        }
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

eventSchema.virtual('images', {
    ref: 'Image',
    localField: '_id',
    foreignField: 'event',
    justOne: false,
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event
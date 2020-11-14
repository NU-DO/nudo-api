const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema(
    {   
        videoId: {
            type: String,
        },
        snippet: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        title: {
            type: String,
            required: [true, 'El título es obligatorio']
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria']
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

const Videos = mongoose.model('Videos', videoSchema)
module.exports = Videos
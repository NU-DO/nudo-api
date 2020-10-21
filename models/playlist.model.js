const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        url: {
            type: String,
        },
        artist: {
            type: { String },
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        decade: {
            type: String,
            enum: ["40's", "50's", "60's", "70's", "80's", "90's", "00's"]
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

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist
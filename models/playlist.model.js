const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        url: {
            type: String,
        },
        artists: {
            type: { String },
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        decade: {
            type: String,
            enum: ["50's", "60's", "70's", "80's", "90's", "00's"]
        },
        image: {
            type: String,
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

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist
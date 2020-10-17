const mongoose = require('mongoose')


const gameScoresSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        score: {
            type: Number,
        },
        level: {
            type: String,
            enum: ['Easy', 'Middle', 'Difficult']
        }
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


const GameScores = mongoose.model('gameScore', gameScoresSchema)
module.exports = GameScores

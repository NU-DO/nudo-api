const mongoose = require('mongoose')

const bcrypt = require('bcrypt')
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const SALT_WORK_FACTOR = 10

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            lowercase: true,
            match: [EMAIL_PATTERN, 'Email is invalid']
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password needs at last 8 chars']
        },
    }, {
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

userSchema.pre('save', function (next) {
    const user = this

    if (user.isModified('password')) {
        bcrypt.genSalt(SALT_WORK_FACTOR)
            .then(salt => {
                return bcrypt.hash(user.password, salt)
                    .then(hash => {
                        user.password = hash
                        next()
                    })
            })
            .catch(error => next(error))
    } else {
        next()
    }
})

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password)
}

userSchema.virtual('images', {
    ref: 'Image',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

userSchema.virtual('locations', {
    ref: 'Location',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

userSchema.virtual('contacts', {
    ref: 'Contact',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

userSchema.virtual('events', {
    ref: 'Event',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

userSchema.virtual('appointments', {
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

userSchema.virtual('gamescores', {
    ref: 'GameScore',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

userSchema.virtual('playlist', {
    ref: 'Playlist',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

const User = mongoose.model('User', userSchema)
module.exports = User
const mongoose = require('mongoose')

const bcrypt = require('bcrypt')
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const USER_PATTERN = /^[a-z0-9\s]+$/i
const SALT_WORK_FACTOR = 10

const generateRandomToken = () => {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let token = ''
    for (let i = 0; i < 25; i++) {
        token += characters[Math.floor(Math.random() * characters.length)]
    }
    return token
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'El Email es obligatorio'],
            unique: [true, 'Este email ya existe'],
            trim: true,
            lowercase: true,
            match: [EMAIL_PATTERN, 'El Email es invalido']
        },
        username: {
            type: String,
            required: [true, 'El nombre de usuario es obligatorio'],
            unique: [true, 'Este usuario ya existe'],
            match: [USER_PATTERN, 'El usuario es invalido'],
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, 'La contraseña es obligatoria'],
            minlength: [8, 'La contraseña debe tener al menos 8 caracteres']
        },
        activation: {
            active: {
                type: Boolean,
                default: false
            },
            token: {
                type: String,
                default: generateRandomToken
            }
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

const User = mongoose.model('User', userSchema)
module.exports = User
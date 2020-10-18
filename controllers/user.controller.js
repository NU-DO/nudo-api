const User = require('../models/user.model')
const Image = require('../models/image.model')
const Playlist = require('../models/playlist.model')
const Contact = require('../models/contact.model')
const Event = require('../models/event.model')
const Location = require('../models/location.model')
const Appointment = require('../models/appointment.model')
const GameScore = require('../models/gameScore.model')
const createError = require('http-errors')

module.exports.create = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

  user.save()
    .then((user) => res.status(201).json(user))
    .catch(next)
}

module.exports.doLogin = (req, res, next) => {
  const { email, password } = req.body
  console.log('from controller:', email, password)
  if (!email || !password) {
    throw createError(400, 'missing credentials')
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        throw createError(404, 'user not found')
      } else {
        return user.checkPassword(password)
          .then(match => {
            if (!match) {
              throw createError(400, 'invalid password')
            } else {
              Freq.session.user = user
              res.json(user)
            }
          })
      }
    })
    .catch(next)
}

module.exports.logout = (req, res) => {
  console.log(req.session)
  res.status(204).json()
}

module.exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => Image.remove({user: req.params.id}))
    .then(() => Playlist.remove({user: req.params.id}))
    .then(() => Event.remove({user: req.params.id}))
    .then(() => Appointment.remove({user: req.params.id}))
    .then(() => Contact.remove({user: req.params.id}))
    .then(() => Location.remove({user: req.params.id}))
    .then(() => GameScore.remove({user: req.params.id}))
    .catch(err => console.log(err))
}
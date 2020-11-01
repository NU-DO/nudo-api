const mongoose = require('mongoose')
const mailer = require('../config/mailer.config')
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
    .then((user) => {
      mailer.sendValidationEmail({
        name: user.username,
        email: user.email,
        id: user._id.toString(),
        activationToken: user.activation.token
      })
      res.status(201).json(user)
    })
    .catch(next)
}

module.exports.activate = (req, res, next) => {
  User.findOne({ _id: req.params.id, 'activation.token': req.params.token })
    .then(user => {
      if (user) {
        user.activation.active = true
        user.save()
          .then(() => {
            res.json('Cuenta activada. Accede!')
          })
          .catch(err => console.log(err))
      } else {
        res.json('Link no válido, pruebe de nuevo')
      }
    })
    .catch(err => console.log(err))
}

module.exports.doLogin = (req, res, next) => {
  const { email, password } = req.body
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
              if (user.activation.active) {
                req.session.user = user
                res.json(user)
              } else {
                throw createError(400, 'Activa tu Cuenta')
              }
            }
          })
      }
    })
    .catch (next)
}

module.exports.logout = (req, res, next) => {
  req.session.destroy()
  res.status(204).json()
}

module.exports.delete = (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => Image.remove({ user: req.params.id }))
    .then(() => Playlist.remove({ user: req.params.id }))
    .then(() => Event.remove({ user: req.params.id }))
    .then(() => Appointment.remove({ user: req.params.id }))
    .then(() => Contact.remove({ user: req.params.id }))
    .then(() => Location.remove({ user: req.params.id }))
    .then(() => GameScore.remove({ user: req.params.id }))
    .then(() => req.session.destroy())
    .then(next)
    .catch(err => console.log(err))
}
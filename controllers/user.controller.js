const mongoose = require('mongoose')
const mailer = require('../config/mailer.config')
const User = require('../models/user.model')
const Image = require('../models/image.model')
const Playlist = require('../models/playlist.model')
const Contact = require('../models/contact.model')
const Event = require('../models/event.model')
const Location = require('../models/location.model')
const Appointment = require('../models/appointment.model')
const Video = require('../models/video.model')
const GameScore = require('../models/gameScore.model')
const createError = require('http-errors')

const createDefaultEvents = (id) => {
  const event1 = new Event({
    user: id,
    title: 'Llegada del hombre a la luna',
    year: 1969,
    description: 'La humanidad da un pequeño gran paso',
    images: ['https://www.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg'],
    playlist: {
      name: 'La Cabalgata De Las Valkirias - De La Opera "La Valkiria"',
      url: 'https://p.scdn.co/mp3-preview/83bd529171d817ad274c0c13da19181092cdb7f8?cid=d37f1f747425408d87a3df7bfbf54045',
      image: 'https://i.scdn.co/image/ab67616d0000b2739cb08a2f9804ac4103231eca'
    },
    location: { name: 'La luna', description: 'Un lugar especial' },
    contacts: [
      { photo: 'https://www.milenio.com/uploads/media/2019/07/19/neil-armstrong-murio-en-a_0_184_1041_648.jpg' },
      { photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michael_Collins_%28S69-31742%2C_restoration%29_%28cropped%29.jpg' },
      { photo: 'https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/buzz_aldrin_marquee.jpg' }
    ],
    video: {
      videoId: 'q1GA71TeZik',
      snippet: 'https://i.ytimg.com/vi/q1GA71TeZik/hqdefault.jpg',
    },
  })

  const event2 = new Event({
    user: id,
    title: 'Contitución Española',
    year: 1978,
    description: 'Nueva era. Democracia.',
    images: ['https://lh3.googleusercontent.com/proxy/DDtUKQoFjhBQj6ovWC7AEF53zBzjEBmam8R4afq_5kVcUfRPvJygM4252Wj5AZ9dYtlOE3rtPnsRX2zJt0jHUezaRQ3hPKxFC_7qB0j7otNKcg'],
    playlist: {
      name: 'Cantares',
      url: 'https://p.scdn.co/mp3-preview/9ee94692b4768a2778332dee9c32a8538338e8d8?cid=d37f1f747425408d87a3df7bfbf54045',
      image: 'https://i.scdn.co/image/ab67616d0000b27341500ef6271359321090acfd'
    },
    location: { name: 'Las Cortes', description: 'Madrid' },
    contacts: [
      { photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/%28Peces-Barba%29_Felipe_Gonz%C3%A1lez_junto_al_presidente_del_Senado_y_el_presidente_del_Congreso_%28cropped%29.jpeg/220px-%28Peces-Barba%29_Felipe_Gonz%C3%A1lez_junto_al_presidente_del_Senado_y_el_presidente_del_Congreso_%28cropped%29.jpeg' },
    ],
    video: {
      videoId: 'MSuX5I2KrUo',
      snippet: 'https://i.ytimg.com/vi/MSuX5I2KrUo/hqdefault.jpg',
    },
  })

  const event3 = new Event({
    user: id,
    title: 'Llegada del hombre a la luna',
    year: 1969,
    description: 'La humanidad da un pequeño gran paso',
    images: ['https://www.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg'],
    playlist: {
      name: 'La Cabalgata De Las Valkirias - De La Opera "La Valkiria"',
      url: 'https://p.scdn.co/mp3-preview/83bd529171d817ad274c0c13da19181092cdb7f8?cid=d37f1f747425408d87a3df7bfbf54045',
      image: 'https://i.scdn.co/image/ab67616d0000b2739cb08a2f9804ac4103231eca'
    },
    location: { name: 'La luna', description: 'Un lugar especial' },
    contacts: [
      { photo: 'https://www.milenio.com/uploads/media/2019/07/19/neil-armstrong-murio-en-a_0_184_1041_648.jpg' },
      { photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michael_Collins_%28S69-31742%2C_restoration%29_%28cropped%29.jpg' },
      { photo: 'https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/buzz_aldrin_marquee.jpg' }
    ],
    video: {
      videoId: 'q1GA71TeZik',
      snippet: 'https://i.ytimg.com/vi/q1GA71TeZik/hqdefault.jpg',
    },
  })

  const event4 = new Event({
    user: id,
    title: 'Llegada del hombre a la luna',
    year: 1969,
    description: 'La humanidad da un pequeño gran paso',
    images: ['https://www.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg'],
    playlist: {
      name: 'La Cabalgata De Las Valkirias - De La Opera "La Valkiria"',
      url: 'https://p.scdn.co/mp3-preview/83bd529171d817ad274c0c13da19181092cdb7f8?cid=d37f1f747425408d87a3df7bfbf54045',
      image: 'https://i.scdn.co/image/ab67616d0000b2739cb08a2f9804ac4103231eca'
    },
    location: { name: 'La luna', description: 'Un lugar especial' },
    contacts: [
      { photo: 'https://www.milenio.com/uploads/media/2019/07/19/neil-armstrong-murio-en-a_0_184_1041_648.jpg' },
      { photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michael_Collins_%28S69-31742%2C_restoration%29_%28cropped%29.jpg' },
      { photo: 'https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/buzz_aldrin_marquee.jpg' }
    ],
    video: {
      videoId: 'q1GA71TeZik',
      snippet: 'https://i.ytimg.com/vi/q1GA71TeZik/hqdefault.jpg',
    },
  })

  event1.save()
    .then(() => {
      event2.save()
    })
    .then(() => {
      event3.save()
    })
    .then(() => {
      event4.save()
    })
}

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
      return user
    })
    .catch(next)
}

module.exports.activate = (req, res, next) => {
  User.findOne({ _id: req.params.id, 'activation.token': req.params.token })
    .then(user => {
      if (user) {
        // createDefaultEvents(user.id)
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
    .catch(next)
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
    .then(() => Video.remove({ user: req.params.id }))
    .then(() => req.session.destroy())
    .then(next)
    .catch(err => console.log(err))
}
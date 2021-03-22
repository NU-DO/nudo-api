require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

require('./config/db.config')
const session = require('./config/session.config')
//const cors = require('./config/cors.config')
const cors = require('cors')
const app = express()

if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
}

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session)

app.use((req, _, next) => {
  req.currentUser = req.session.user
  next()
})

const router = require('./config/routes.js')
app.use('/', router)

app.use(function (_, _, next) {
  next(createError(404))
})

app.use(function (error, _, res, _) {
  console.error('-' * 1000)
  console.error(error)

  res.status(error.status || 500)

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400)

    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message
    }

    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource not found')
  } else if (error.code === 11000) {
    error = createError(404, 'El usuario ya existe')
  }
  data.message = error.message
  res.json(data)
})

const port = normalizePort(process.env.PORT || '3010')
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}
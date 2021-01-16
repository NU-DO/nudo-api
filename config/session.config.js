const expressSession = require('express-session')
const MongoStore = require('connect-mongo')(expressSession)
const mongoose = require('mongoose')
const SESSION_MAX_AGE_SECONDS = Number(process.env.SESSION_MAX_AGE_SECONDS) || 60 * 60 * 24 * 7

const session = expressSession({
  secret: process.env.SESSION_SECRET || 'ultra secret',
  saveUninitialized: false,
  cookie: {
    secure: process.env.SESSION_SECURE || false,
    httpOnly: true,
    maxAge: SESSION_MAX_AGE_SECONDS || 36000000,
    sameSite: 'none'
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: SESSION_MAX_AGE_SECONDS || 36000000,
  }),
})

module.exports = session
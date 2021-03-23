const cors = require('cors')

const corsMiddleware = cors({
  origin: process.env.CORS_ORIGIN || 'http://nudo.herokuapp.com',
  allowedHeaders: ['Content-Type'],
  credentials: true
})

module.exports = corsMiddleware
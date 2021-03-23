const cors = require('cors')

const corsMiddleware = cors({
  origin: true, //process.env.CORS_ORIGIN || 'http://nudo.herokuapp.com',
  allowedHeaders: ['Content-Type'],
  credentials: true
})

module.exports = corsMiddleware
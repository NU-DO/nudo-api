const cors = require('cors')

const corsMiddleware = cors({
  origin: process.env.CORS_ORIGIN || 'https://ironnudo.herokuapp.com/', // 'http://localhost:3000'
  allowedHeaders: ['Content-Type'],
  credentials: true
})

module.exports = corsMiddleware
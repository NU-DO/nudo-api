const cors = require('cors')

const corsMiddleware = cors({
  origin: ['https://ironnudo.herokuapp.com/*','https://ironnudo.herokuapp.com/user' ], // 'http://localhost:3000'
  allowedHeaders: ['Content-Type'],
  credentials: true
})

module.exports = corsMiddleware
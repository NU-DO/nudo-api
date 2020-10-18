const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const userController = require('../controllers/user.controller')
const songController = require('../controllers/song.controller')
const imageController = require('../controllers/image.controller')
const contactController = require('../controllers/contact.controller')
const eventController = require('../controllers/event.controller')
const locationController = require('../controllers/location.controller')
const appointemntController = require('../controllers/appointment.controller')
const gameScoreController = require('../controllers/gameScore.controller')
const upload = require('./cloudinary.config')

router.post('/user', authMiddleware.isNotAuthenticated, userController.create)
router.post('/login', authMiddleware.isNotAuthenticated, userController.doLogin)
router.post('/logout', authMiddleware.isAuthenticated, userController.logout)
router.delete('/user/:id/delete', authMiddleware.isAuthenticated, userController.delete)

// router.get('/songs', authMiddleware.isAuthenticated, songController.getSongs)
// router.post('/song/new', authMiddleware.isAuthenticated, songController.create)
// router.patch('/song/:id/edit', authMiddleware.isAuthenticated, songController.edit)
// router.delete('/song/:id/delete', authMiddleware.isAuthenticated, songController.delete)

router.get('/images', authMiddleware.isAuthenticated, imageController.getImages)
router.post('/image/new', authMiddleware.isAuthenticated, upload.single('image'), imageController.create)
router.patch('/image/:id/edit', authMiddleware.isAuthenticated, upload.single('image'), imageController.edit)
router.delete('/image/:id/delete', authMiddleware.isAuthenticated, imageController.delete)

// router.get('/contacts', authMiddleware.isAuthenticated, contactController.getContact)
// router.post('/contact/new', authMiddleware.isAuthenticated, upload.single('image'), contactController.create)
// router.patch('/contact/:id/edit', authMiddleware.isAuthenticated, upload.single('image'), contactController.edit)
// router.delete('/contact/:id/delete', authMiddleware.isAuthenticated, contatcController.delete)

// router.get('/events', authMiddleware.isAuthenticated, eventController.getEvents)
// router.post('/event/new', authMiddleware.isAuthenticated, eventController.create)
// router.patch('/event/:id/edit', authMiddleware.isAuthenticated, eventController.edit)
// router.delete('/event/:id/delete', authMiddleware.isAuthenticated, eventController.delete)

// router.get('/locations', authMiddleware.isAuthenticated, locationController.getLocations)
// router.post('/location/new', authMiddleware.isAuthenticated, locationController.create)
// router.patch('/location/:id/edit', authMiddleware.isAuthenticated, locationController.edit)
// router.delete('/location/:id/delete', authMiddleware.isAuthenticated, locationController.delete)

// router.get('/appointments', authMiddleware.isAuthenticated, appointmentController.getAppoinments)
// router.post('/appointment/new', authMiddleware.isAuthenticated, appointmentController.create)
// router.patch('/appointment/:id/edit', authMiddleware.isAuthenticated, appointmentController.edit)
// router.delete('/appointment/:id/delete', authMiddleware.isAuthenticated, appointmentController.delete)

// router.get('/gamescore', authMiddleware.isAuthenticated, gameScoreController.getScores)
// router.delete('/gamescore/new', authMiddleware.isAuthenticated, gameScoreController.create)

module.exports = router
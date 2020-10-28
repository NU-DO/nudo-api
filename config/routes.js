const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const userController = require('../controllers/user.controller')
const playlistController = require('../controllers/playlist.controller')
const imageController = require('../controllers/image.controller')
const contactController = require('../controllers/contact.controller')
const eventController = require('../controllers/event.controller')
const locationController = require('../controllers/location.controller')
const appointmentController = require('../controllers/appointment.controller')
const gameScoreController = require('../controllers/gameScore.controller')
const uploadController = require('../controllers/upload.controller')
const upload = require('../config/cloudinary.config')

router.post('/user', authMiddleware.isNotAuthenticated, userController.create)
router.post('/login', authMiddleware.isNotAuthenticated, userController.doLogin)
router.post('/logout', authMiddleware.isAuthenticated, userController.logout)
router.delete('/user/:id/delete', authMiddleware.isAuthenticated, userController.delete)

router.get('/song', authMiddleware.isAuthenticated, playlistController.getSongs)
router.post('/songsSpotify', authMiddleware.isAuthenticated, playlistController.getSongsFromSpotify)
router.post('/song/new', authMiddleware.isAuthenticated, playlistController.create)
router.patch('/song/:id/edit', authMiddleware.isAuthenticated, playlistController.edit)
router.delete('/song/:id/delete', authMiddleware.isAuthenticated, playlistController.delete)

router.get('/image', authMiddleware.isAuthenticated, imageController.getImages)
router.post('/image/new', authMiddleware.isAuthenticated, imageController.create)
router.patch('/image/:id/edit', authMiddleware.isAuthenticated, imageController.edit)
router.delete('/image/:id/delete', authMiddleware.isAuthenticated, imageController.delete)

router.get('/contact', authMiddleware.isAuthenticated, contactController.getContacts)
router.post('/contact/new', authMiddleware.isAuthenticated, contactController.create)
router.patch('/contact/:id/edit', authMiddleware.isAuthenticated, contactController.edit)
router.delete('/contact/:id/delete', authMiddleware.isAuthenticated, contactController.delete)

router.get('/event', authMiddleware.isAuthenticated, eventController.getEvents)
router.post('/event/new', authMiddleware.isAuthenticated, eventController.create)
router.patch('/event/:id/edit', authMiddleware.isAuthenticated, eventController.edit)
router.delete('/event/:id/delete', authMiddleware.isAuthenticated, eventController.delete)

router.get('/location', authMiddleware.isAuthenticated, locationController.getLocations)
router.post('/location/new', authMiddleware.isAuthenticated, locationController.create)
router.patch('/location/:id/edit', authMiddleware.isAuthenticated, locationController.edit)
router.delete('/location/:id/delete', authMiddleware.isAuthenticated, locationController.delete)

router.get('/appointment', authMiddleware.isAuthenticated, appointmentController.getAppointments)
router.post('/appointment/new', authMiddleware.isAuthenticated, appointmentController.create)
router.patch('/appointment/:id/edit', authMiddleware.isAuthenticated, appointmentController.edit)
router.delete('/appointment/:id/delete', authMiddleware.isAuthenticated, appointmentController.delete)

router.get('/gamescore', authMiddleware.isAuthenticated, gameScoreController.getScores)
router.post('/gamescore/new', authMiddleware.isAuthenticated, gameScoreController.create)

router.post('/upload', authMiddleware.isAuthenticated, upload.single('url'), uploadController.upload)

module.exports = router 
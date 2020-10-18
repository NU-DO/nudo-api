const Playlist = require('../models/playlist.model')
const createError = require('http-errors')

module.exports.getSongs = (req, res, next) => {
    Playlist.find({ user: req.session.user.id })
        .then(songs => {
            console.log('Ver songs:', songs)
            res.json(songs)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const playlist = new Playlist({
        user: req.session.user.id,
        songId: req.body.songId,
        decade: req.body.decade
    })

    playlist.save()
        .then(playlist => res.status(201).json(playlist))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body

    Playlist.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(playlist => {
            res.status(201).json(playlist)
        })
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Playlist.findByIdAndRemove(req.params.id)
        .then(playlist => res.status(200).json(playlist))
        .catch(err => console.log(err))
}
const Video = require('../models/video.model')
const createError = require('http-errors')

module.exports.getVideos = (req, res, next) => {
    Video.find({ user: req.session.user.id })
        .then(videos => {
            res.json(videos)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const video = new Video({
        user: req.session.user.id,
        videoId: req.body.videoId,
        snippet: req.body.snippet,
        title: req.body.title,
        description: req.body.description,
    })

    video.save()
        .then(edit => res.status(200).json(edit))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body
    
    Video.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(video => {
            res.status(201).json(video)
        })
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Video.findByIdAndRemove(req.params.id)
        .then(video => res.status(200).json(video))
        .catch(err => console.log(err))
}
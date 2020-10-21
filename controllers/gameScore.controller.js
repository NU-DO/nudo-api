const GameScore = require('../models/gameScore.model')
const createError = require('http-errors')

module.exports.getScores = (req, res, next) => {
    GameScore.find({ user: req.session.user.id })
        .then(gameScores => {
            res.json(gameScores)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const gameScore = new GameScore({
        user: req.session.user.id,
        score: req.body.score,
        level: req.body.level,
    })

    gameScore.save()
        .then(gameScore => res.status(201).json(gameScore))
        .catch(next)
}
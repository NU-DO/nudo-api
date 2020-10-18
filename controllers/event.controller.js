const Event = require('../models/event.model')
const createError = require('http-errors')

module.exports.getEvents = (req, res, next) => {
    Event.find({ user: req.session.user.id })
        .then(events => {
            console.log('Ver events:', events)
            res.json(events)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const event = new Event({
        user: req.session.user.id,
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        links: req.body.links,
    })

    event.save()
        .then(event => res.status(201).json(event))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body

    Event.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(event => {
            res.status(201).json(event)
        })
        .catch(next)

}

module.exports.delete = (req, res, next) => {
    Event.findByIdAndRemove(req.params.id)
        .then(event => res.status(200).json(event))
        .catch(err => console.log(err))
}
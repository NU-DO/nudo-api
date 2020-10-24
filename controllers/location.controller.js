const Location = require('../models/location.model')
const createError = require('http-errors')

module.exports.getLocations = (req, res, next) => {
    Location.find({ user: req.session.user.id })
        .then(location => {
            res.json(location)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const location = new Location({
        user: req.session.user.id,
        name: req.body.name,
        description: req.body.description,  
        coordenates: {
            lng: req.body.lng,
            lat: req.body.lat,
        }
    })

    location.save()
        .then(location => res.status(201).json(location))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body

    Location.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(location => {
            res.status(201).json(location)
        })
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Location.findByIdAndRemove(req.params.id)
        .then(location => res.status(200).json(location))
        .catch(err => console.log(err))
}
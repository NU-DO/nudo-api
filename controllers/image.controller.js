const Image = require('../models/image.model')
const createError = require('http-errors')


module.exports.getImages = (req, res, next) => {
    Image.find({ user: req.session.user.id })
        .then(images => {
            console.log('Ver imagenes:', images)
            res.json({ message: 'get from image.model' })
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const image = new Image({
        user: req.session.user.id,
        url: req.body.url,
        date: req.body.date,
        description: req.body.description,
    })

    image.save()
        .then(image => res.status(201).json(image))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body
    body.image = req.file ? req.file.path : null

    Image.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(image => {
            res.status(201).json({ message: 'edit from image.model' })
        })
        .catch(next)

}

module.exports.delete = (req, res, next) => {
    Image.findByIdAndRemove(req.params.id)
        .catch(err => console.log(err))
}
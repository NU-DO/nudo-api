const Appointment = require('../models/appointment.model')
const createError = require('http-errors')

module.exports.getAppointments = (req, res, next) => {
    Appointment.find({ user: req.session.user.id })
        .then(appointments => {
            console.log('Ver appointments:', appointments)
            res.json(appointments)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const appointment = new Appointment({
        user: req.session.user.id,
        title: req.body.title,
        date: req.body.date,
        description: req.body.description,
        type: req.body.type,
        recurrency: req.body.recurrency,
    })

    appointment.save()
        .then(appointment => res.status(201).json(appointment))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body

    Appointment.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(appointment => {
            res.status(201).json({ message: 'edit from appointment.model' })
        })
        .catch(next)

}

module.exports.delete = (req, res, next) => {
    Appointment.findByIdAndRemove(req.params.id)
        .catch(err => console.log(err))
}
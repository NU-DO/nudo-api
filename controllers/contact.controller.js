const Contact = require('../models/contact.model')
const Appointment = require('../models/appointment.model')
const createError = require('http-errors')

module.exports.getContacts = (req, res, next) => {
    Contact.find({ user: req.session.user.id })
        .then(contacts => {
            console.log('Ver events:', contacts)
            res.json(contacts)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const contact = new Contact({
        user: req.session.user.id,
        name: req.body.name,
        role: req.body.role,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        photo: req.body.photo,
        birthday: req.body.birthday, 
        description: req.body.description
    })

    const appointment = new Appointment({
        user: req.session.user.id,
        title: `Cumpleaños de ${contact.name}`,
        date: contact.birthday,
        description: `Cumpleaños de ${contact.name}`,
        type: 'Cumpleaños',
        recurrency: 'Anual',
    })

    contact.save()
        .then(contact => res.status(201).json(contact))
        .then(() => appointment.save())
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body

    Contact.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(contact => {
            res.status(201).json({ message: 'edit from contact.model' })
        })
        .catch(next)

}

module.exports.delete = (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id)
        .catch(err => console.log(err))
}
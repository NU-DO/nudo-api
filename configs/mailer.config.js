const nodemailer = require('nodemailer')
const host = process.env.PORT || 'https://localhost:3010/'
const user = process.env.NM_USER

const transport = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth: {
            user: user,
            pass: process.env.NM_PASS
        }
    }
)

module.exports.sendValidationEmail = ({ id, email, activationToken, name }) => {
    transport.sendMail({
        to: email,
        from: 'La Buena Vida team',
        subject: 'Please activate your account in a simple step',
        html: `         
        `
    })
        .then(console.log)
        .catch(console.error)
}
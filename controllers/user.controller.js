const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.create = (req, res, next) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
  
    user.save()
      .then((user) => res.status(201).json(user))
      .catch(next)
  }
  
  module.exports.doLogin = (req, res, next) => {
    const { email, password } = req.body
  console.log('from controller:', email, password)
    if (!email || !password) {
      throw createError(400, 'missing credentials');
    }
  
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          throw createError(404, 'user not found');
        } else {
          return user.checkPassword(password)
            .then(match => {
              if (!match) {
                throw createError(400, 'invalid password');
              } else {
                req.session.user = user;
                //res.cookie('foo', 'bar')
                res.json(user)
              }
            })
        }
      })
      .catch(next);
  }
  
  module.exports.logout = (req, res) => {
    req.session.destroy();
    res.status(204).json();
  }
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('../config')

const todoPolicy = {
  header: (req, res, next) => {
    const auth = req.get('Authorization')
    if (auth) {
      const token = auth.split(' ')[1]
      if (token) {
        try {
          req.body.userId = jwt.verify(token, config.app.jwt.secret).id
          next()
        } catch (err) {
          res.status(400).json(err)
        }
      }
    } else {
      res.status(400).json({message: 'Unauthorized'})
    }
  },
  post: async (req, res, next) => {
    const schema = Joi.object().keys({
      title: Joi.string().alphanum().min(5).max(15).required(),
      completed: Joi.boolean().required(),
      userId: Joi.string().required()
    })
    const { error } = Joi.validate(req.body, schema)
    if (error) {
      res.status(400).json({ message: error.details[0].message })
    } else {
      next()
    }
  },
  put: async (req, res, next) => {
    const schema = Joi.object().keys({
      id: Joi.string().required()
    })
    const { error } = Joi.validate(req.params, schema)
    if (error) {
      res.status(400).json({ message: error.details[0].message })
    } else {
      next()
    }
  }
}

module.exports = todoPolicy

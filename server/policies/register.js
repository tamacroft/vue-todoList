const Joi = require('joi')
const { User } = require('../models')

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(5).max(15).required(),
    fullname: Joi.string().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}/).required()
  })
  const { error, value } = Joi.validate(req.body, schema)
  if (error) {
    res.status(400).json({message: error.details[0].message})
  } else {
    try {
      const create = await User.create(value)
      res.status(200).json(create)
    } catch (err) {
      res.status(400).json({message: err.errmsg})
    }
  }
}

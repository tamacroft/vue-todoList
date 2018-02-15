const Joi = require('joi')

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(5).max(15).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}/).required()
  })
  const { error } = Joi.validate(req.body, schema)
  if (error) {
    res.status(400).json({message: error.details[0].message})
  } else {
    next()
  }
}

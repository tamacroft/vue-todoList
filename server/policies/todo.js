const Joi = require('joi')

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().alphanum().min(5).max(15).required(),
    completed: Joi.boolean().required()
  })
  const { error } = Joi.validate(req.body, schema)
  if (error) {
    res.status(400).json({ message: error.details[0].message })
  } else {
    next()
  }
}

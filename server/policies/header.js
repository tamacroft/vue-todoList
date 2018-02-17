const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req, res, next) => {
  const auth = req.get('Authorization')
  if (auth) {
    const token = auth.split(' ')[1]
    if (token) {
      try {
        req.body.user = jwt.verify(token, config.app.jwt.secret)
        next()
      } catch (err) {
        res.status(400).json(err)
      }
    }
  }
}

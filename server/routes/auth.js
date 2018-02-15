const { User } = require('../models')
const { register, auth } = require('../policies')
const config = require('../config')

module.exports = (app) => {
  app.post('/register', register, async (req, res) => {
    try {
      const users = await User.create(req.body)
      res.status(200).json(users)
    } catch (err) {
      res.status(400).json(err)
    }
  })

  app.post('/auth', auth, async (req, res) => {
    try {
      const user = await User.findOne({username: req.body.username})
      if (user) {
        const valid = user.password === req.body.password
        if (valid) {
          const token = require('jsonwebtoken').sign({ user },
            config.app.jwt.secret,
            { expiresIn: config.app.jwt.expires })
          res.status(200).json({token})
        } else {
          res.status(400).json({message: 'Password and username doesn\'t match.'})
        }
      } else {
        res.status(400).json({message: 'Invalid username.'})
      }
    } catch (error) {
      res.status(500).json(error)
    }
  })
}

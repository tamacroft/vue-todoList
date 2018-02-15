const { User } = require('../models')
const { register, auth } = require('../policies')

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
      const user = await User.findOne({username: req.body.username}, {password: 0})
      res.status(200).json({data: user})
    } catch (error) {
      res.status(500).json(error)
    }
  })
}

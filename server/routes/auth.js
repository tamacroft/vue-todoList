const { User } = require('../models')
const { register } = require('../policies')

module.exports = (app) => {
  app.post('/register', register, async (req, res) => {
    try {
      const users = await User.create()
      res.json(users)
    } catch (err) {
      res.json(err)
    }
  })
}

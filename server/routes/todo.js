const { Todo } = require('../models')
// const { todo } = require('../policies')
// const config = require('../config')

module.exports = (app) => {
  app.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.find({})
      res.status(200).json(todos)
    } catch (err) {
      res.status(500).json(err)
    }
  })
}

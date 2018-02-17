const { Todo } = require('../models')
const { todo } = require('../policies')

module.exports = (app) => {
  app.get('/todos', todo.header, async (req, res) => {
    try {
      const todos = await Todo.find({userId: req.body.userId})
      res.status(200).json(todos)
    } catch (err) {
      res.status(500).json(err)
    }
  })

  app.post('/todos', todo.header, todo.todo, async (req, res) => {
    try {
      const todo = await Todo.create({
        title: req.body.title,
        completed: req.body.completed,
        userId: req.body.userId
      })
      res.status(200).json(todo)
    } catch (err) {
      res.status(500).json(err)
    }
  })
}

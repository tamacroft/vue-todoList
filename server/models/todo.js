const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
}, {
  collection: 'todos'
})

module.exports = mongoose.model('Todo', schema)

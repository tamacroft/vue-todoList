const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', schema)

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const pkg = require('./package.json')

const app = express()

mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`)

app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.set('X-Powered-By', pkg.author)
  next()
})

require('./routes')(app)

app.listen(config.app.port, () => {
  console.log(`App API running on ${config.app.host}:${config.app.port}`)
})

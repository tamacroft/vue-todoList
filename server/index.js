const express = require('express')
const config = require('./config')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`)

app.use(cors())
app.use(bodyParser.json())

require('./routes')(app)

app.listen(config.app.port, () => {
  console.log(`App API running on ${config.app.host}:${config.app.port}`)
})

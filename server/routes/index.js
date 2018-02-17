module.exports = (app) => {
  require('./auth')(app)
  require('./todo')(app)
}

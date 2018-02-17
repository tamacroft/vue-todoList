module.exports = {
  host: 'http://localhost',
  port: process.env.PORT || 5000,
  jwt: {
    secret: 'whoareyou?',
    expires: 60 * 60 * 48
  }
}

module.exports = {

  // TODO: set `session.secret` to environment variable
  session: {
    cookieName: 'session',
    secret: 'Will Replace Later',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
  },

  // TODO: add properties once we get up and running
  csp: {
    reportUri: ['/report-violations']
  }

};
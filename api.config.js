const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isProdMode ? 'https://www.xuechenlei.com/' : 'http://localhost:9999/'
}

const path = require('path')
const webpack = require('webpack')
const apiConfig = require('./api.config')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'default title from configuration',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'default description from configuration' }
    ],
    script: [
//    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
//  extend (config, ctx) {
//       if (ctx.isClient) {
//         config.module.rules.push({
//           enforce: 'pre',
//           test: /\.(js|vue)$/,
//           loader: 'eslint-loader',
//           exclude: /(node_modules)/
//         })
//       }
//  }
    extend(webpackConfig, { dev, isClient, isServer }) { 
      webpackConfig.resolve.alias['~static'] = path.join(__dirname, 'static') 
      webpackConfig.module.rules.push({
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      })
    },
    analyze: true,
    vendor: [
      'axios',
      '~plugins/jquery.min.js',
      '~plugins/polyfill.min.js'
    ]    
  },
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: apiConfig.baseUrl
  },
}

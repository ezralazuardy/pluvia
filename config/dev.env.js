const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const keys = require('../keys')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_API_KEY: keys.GOOGLE_API_KEY,
  GEOCODE_API_URL: '"http://localhost:3000/geocode/v1/json?"',
  WEATHER_API_URL: '"http://localhost:3000/weather/v1/json?"'
})

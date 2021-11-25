const keys = require('../keys')

module.exports = {
  NODE_ENV: '"development"',
  GOOGLE_API_KEY: keys.dev,
  GEOCODE_API_URL: '"http://localhost:3000/geocode/v1/json?"',
  WEATHER_API_URL: '"http://localhost:3000/weather/v1/json?"'
}

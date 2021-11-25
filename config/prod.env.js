if (process.env.VERCEL_ENV === 'production') {
  module.exports = {
    NODE_ENV: '"production"'
  }
} else {
  module.exports = {
    NODE_ENV: '"production"',
    GOOGLE_API_KEY: '""',
    GEOCODE_API_URL: '""',
    WEATHER_API_URL: '""'
  }
}

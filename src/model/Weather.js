import moment from 'moment'

class Weather {

  constructor() {
    this.cloudiness = 0
    this.dewPoint = 0
    this.humidity = 0
    this.temperature = 0
    this.windSpeed = 0
    this.visibility = 0
    this.sunrise = null
    this.sunset = null
    this.windDirection = null
    this.description = null
    this.weatherIcon = null
    this.dt = null
    this.timezone = null
    this.formattedDate = null
  }

  populate(data) {
    this.cloudiness = data.clouds
    this.dewPoint = data.dew_point
    this.humidity = data.humidity
    this.temperature = Math.round(data.temp)
    this.windSpeed = data.wind_speed
    this.windDirection = this.predictWindDirection(data.wind_deg)
    this.visibility = data.visibility
    this.sunrise = this.timestamp(data.sunrise * 1000, data.timezone)
    this.sunset = this.timestamp(data.sunset * 1000, data.timezone)
    this.description = data.weather[0].description
    this.weatherIcon = data.weather[0].icon
    this.dt = data.dt
    this.timezone = data.timezone
    this.formattedDate = this.date(data.dt * 1000, data.timezone)
  }

  date(time, zone) {
    return moment(time).tz(zone).format('dddd, MMMM Do')
  }

  timestamp(time, zone) {
    return moment(time).tz(zone).format('h:mm A')
  }

  predictWindDirection(windDegree) {
    const compassSector = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
    return compassSector[(windDegree / 22.5).toFixed(0)]
  }

  isThunderstorm(id) {
    return id > 199 && id < 233
  }

  isDrizzle(id) {
    return id > 299 && id < 322
  }

  isRain(id) {
    return id > 499 && id < 532
  }

  isSnow(id) {
    return id > 599 && id < 623
  }
}

export default Weather

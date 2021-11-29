import moment from 'moment'
import 'moment-timezone'

class Weather {

  constructor() {
    this.current = null
    this.daily = []
    this.lat = 0
    this.long = 0
    this.timezone = ''
    this.timezone_offset = 0
  }

  populate(data) {
    this.current = data.current
    this.daily = data.daily
    this.lat = data.lat
    this.long = data.lon
    this.timezone = data.timezone
    this.timezone_offset = data.timezone_offset
  }

  date(time) {
    return moment(time).tz(this.timezone).format('dddd, MMMM Do')
  }

  timestamp(time) {
    return moment(time).tz(this.timezone).format('h:mm A')
  }

  dayOfWeek(time) {
    return moment(time).tz(this.timezone).format('ddd')
  }

  windDirection(windDegree) {
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

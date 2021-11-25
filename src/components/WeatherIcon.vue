<template>
  <div>
    <WeatherIconClearDay v-if="icon === '01d'"></WeatherIconClearDay>
    <WeatherIconClearNight v-if="icon === '01n'"></WeatherIconClearNight>
    <WeatherIconPartlyCloudyDay v-if="icon === '02d'"></WeatherIconPartlyCloudyDay>
    <WeatherIconPartlyCloudyNight v-if="icon === '02n'"></WeatherIconPartlyCloudyNight>
    <WeatherIconCloudy v-if="icon === '03d' || icon === '03n'"></WeatherIconCloudy>
    <WeatherIconRain v-if="icon === 'rain'"></WeatherIconRain>
    <WeatherIconSleet v-if="icon === 'sleet'"></WeatherIconSleet>
    <WeatherIconSnow v-if="icon === 'snow'"></WeatherIconSnow>
    <WeatherIconWind v-if="icon === 'wind'"></WeatherIconWind>
  </div>
</template>

<script>
import WeatherIconClearDay from '../assets/icons/weather/clear_day.svg'
import WeatherIconClearNight from '../assets/icons/weather/clear_night.svg'
import WeatherIconCloudy from '../assets/icons/weather/cloudy.svg'
import WeatherIconPartlyCloudyDay from '../assets/icons/weather/partly_cloudy_day.svg'
import WeatherIconPartlyCloudyNight from '../assets/icons/weather/partly_cloudy_night.svg'
import WeatherIconRain from '../assets/icons/weather/rain.svg'
import WeatherIconSleet from '../assets/icons/weather/sleet.svg'
import WeatherIconSnow from '../assets/icons/weather/snow.svg'
import WeatherIconWind from '../assets/icons/weather/wind.svg'

export default {
  name: 'WeatherIcon',
  props: ['icon'],
  components: {
    WeatherIconClearDay,
    WeatherIconClearNight,
    WeatherIconCloudy,
    WeatherIconPartlyCloudyDay,
    WeatherIconPartlyCloudyNight,
    WeatherIconRain,
    WeatherIconSleet,
    WeatherIconSnow,
    WeatherIconWind
  }
}
</script>

<template>
  <div>
    <WeatherIconDaySunny v-if="icon === '01d'"/>
    <WeatherIconNightClear v-else-if="icon === '01n'"/>
    <WeatherIconDayCloudy v-else-if="icon === '02d'"/>
    <WeatherIconNightAltCloudy v-else-if="icon === '02n'"/>
    <WeatherIconCloudy v-else-if="icon === '03d'"/>
    <WeatherIconCloudy v-else-if="icon === '03n'"/>
    <WeatherIconDayCloudyGusts v-else-if="icon === '04d'"/>
    <WeatherIconNightAltCloudyGusts v-else-if="icon === '04n'"/>
    <WeatherIconShowers v-else-if="icon === '09d'"/>
    <WeatherIconNightAltShowers v-else-if="icon === '09n'"/>
    <WeatherIconDayRain v-else-if="icon === '10d'"/>
    <WeatherIconNightAltRain v-else-if="icon === '10n'"/>
    <WeatherIconThunderstorm v-else-if="icon === '11d'"/>
    <WeatherIconNightAltThunderstorm v-else-if="icon === '11n'"/>
    <WeatherIconDaySnow v-else-if="icon === '13d'"/>
    <WeatherIconNightAltSnow v-else-if="icon === '13n'"/>
    <WeatherIconDayHaze v-else-if="icon === '50d'"/>
    <WeatherIconWindy v-else-if="icon === '50n'"/>
    <WeatherIconThermometer v-else/>
  </div>
</template>

<script>
import WeatherIconDaySunny from '../assets/icons/weather/wi-day-sunny.svg'
import WeatherIconNightClear from '../assets/icons/weather/wi-night-clear.svg'
import WeatherIconDayCloudy from '../assets/icons/weather/wi-day-cloudy.svg'
import WeatherIconNightAltCloudy from '../assets/icons/weather/wi-night-alt-cloudy.svg'
import WeatherIconCloudy from '../assets/icons/weather/wi-cloudy.svg'
import WeatherIconDayCloudyGusts from '../assets/icons/weather/wi-day-cloudy-gusts.svg'
import WeatherIconNightAltCloudyGusts from '../assets/icons/weather/wi-night-alt-cloudy-gusts.svg'
import WeatherIconShowers from '../assets/icons/weather/wi-showers.svg'
import WeatherIconNightAltShowers from '../assets/icons/weather/wi-night-alt-showers.svg'
import WeatherIconDayRain from '../assets/icons/weather/wi-day-rain.svg'
import WeatherIconNightAltRain from '../assets/icons/weather/wi-night-alt-rain.svg'
import WeatherIconThunderstorm from '../assets/icons/weather/wi-thunderstorm.svg'
import WeatherIconNightAltThunderstorm from '../assets/icons/weather/wi-night-alt-thunderstorm.svg'
import WeatherIconDaySnow from '../assets/icons/weather/wi-day-snow.svg'
import WeatherIconNightAltSnow from '../assets/icons/weather/wi-night-alt-snow.svg'
import WeatherIconDayHaze from '../assets/icons/weather/wi-day-haze.svg'
import WeatherIconWindy from '../assets/icons/weather/wi-windy.svg'
import WeatherIconThermometer from '../assets/icons/weather/wi-thermometer.svg'

export default {
  name: 'WeatherIcon',
  props: ['icon'],
  components: {
    WeatherIconDaySunny,
    WeatherIconNightClear,
    WeatherIconDayCloudy,
    WeatherIconNightAltCloudy,
    WeatherIconCloudy,
    WeatherIconDayCloudyGusts,
    WeatherIconNightAltCloudyGusts,
    WeatherIconShowers,
    WeatherIconNightAltShowers,
    WeatherIconDayRain,
    WeatherIconNightAltRain,
    WeatherIconThunderstorm,
    WeatherIconNightAltThunderstorm,
    WeatherIconDaySnow,
    WeatherIconNightAltSnow,
    WeatherIconDayHaze,
    WeatherIconWindy,
    WeatherIconThermometer
  }
}
</script>

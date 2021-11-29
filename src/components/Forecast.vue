<template>
  <ul class="forecast">
    <li class="day" v-for="day in weather.daily">
      <div>{{ weather.dayOfWeek(day.dt * 1000) }}</div>
      <div class="icon">
        <WeatherIcon :icon="day.weather[0].icon"></WeatherIcon>
      </div>
      <strong>{{ Math.round(day.temp.max) }}°</strong>
      <div>{{ Math.round(day.temp.min) }}°</div>
    </li>
  </ul>
</template>

<script>
import WeatherIcon from './WeatherIcon'

export default {
  name: 'forecast',
  components: {
    WeatherIcon
  },
  computed: {
    weather() {
      return this.$store.state.weather
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.forecast {
  border-top: 1px solid #dedede;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-top: 16px;

  li {
    flex: 1;
  }

  .day {
    color: $accent;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;

    @media(max-width: 850px) {
      flex: 0 0 25%;
      margin-top: 8px;
    }
  }

  .icon {
    height: 32px;
    margin: 0 auto;
    width: 32px;
  }
}
</style>

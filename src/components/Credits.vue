<template>
  <div class="credits">
    <div>
      <span>⛅ Pluvia is a dead simple weather forecast app that built with</span>
      <a href="https://vuejs.org" target="_blank" rel="noopener">Vue.js</a>,
      <a href="https://openweathermap.org" target="_blank" rel="noopener">Open Weather Map API</a>,
      <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener">Google
        Maps JavaScript API</a>,
      <a href="https://developers.google.com/maps/documentation/geocoding/get-api-key" target="_blank" rel="noopener">Google
        Geocoding API</a>, and<br/>
      <a href="https://developers.google.com/places/web-service/autocomplete" target="_blank" rel="noopener">Google
        Places API</a>.
      <p class="source">
        Check out the <a href="https://github.com/ezralazuardy/pluvia" target="_blank" rel="noopener">source code</a>
        👏.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credits'
}
</script>

<style lang="scss" scoped>
.credits {
  align-items: center;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-name: fadeIn;
  flex: 1;
  height: 100%;
  justify-content: center;
  line-height: 2;
  text-align: center;

  > div {
    max-width: 420px;
  }
}

p {
  margin-top: 8px;
}

ul {
  margin-top: 16px;
}

li {
  + li {
    margin-top: 12px;
  }
}

.source {
  font-size: 14px;
  margin-top: 28px;
}
</style>

import 'reset-css'
import 'es6-promise/auto'
import 'whatwg-fetch'
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {App}
})

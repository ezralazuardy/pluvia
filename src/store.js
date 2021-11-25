import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let units = 'si'

export default new Vuex.Store({
  state: {
    appStatus: {
      message: null,
      state: 'loading'
    },
    weather: {},
    geocode: {},
    googleMapsLoaded: false,
    coordinates: {
      latitude: null,
      longitude: null
    },
    inputQuery: null,
    locationIcon: 'search',
    units: units
  },
  actions: {
    appStatus({commit}, appStatus) {
      commit('setAppStatus', appStatus)
    },
    coordinates({commit}, coordinates) {
      commit('setCoordinates', coordinates)
    },
    geocode({commit, state}, type) {
      return new Promise((resolve) => {
        let query
        (type === 'default')
          ? query = `latlng=${state.coordinates.latitude},${state.coordinates.longitude}`
          : query = `address=${encodeURIComponent(state.inputQuery)}`
        fetch(`${process.env.GEOCODE_API_URL}${query}`)
          .then(response => {
            if (response.status !== 200) {
              commit('setAppStatus', {
                state: 'error',
                message: 'The Geolocation API is not responding. Please try again later.'
              })
              return
            }
            response.json().then(data => {
              if (!data.length) {
                commit('setAppStatus', {
                  state: 'error',
                  message: 'No results found. Please try another search.'
                })
                return
              }
              commit('setGeocode', data[0])
              resolve(response)
            })
          })
          .catch(() => {
            commit('setAppStatus', {
              state: 'error',
              message: 'The Geolocation API is not responding.'
            })
          })
      })
    },
    googleMapsLoaded({commit}, googleMapsLoaded) {
      commit('setGoogleMapsLoaded', googleMapsLoaded)
    },
    inputQuery({commit}, inputQuery) {
      commit('setInputQuery', inputQuery)
    },
    locationIcon({commit}, locationIcon) {
      commit('setLocationIcon', locationIcon)
    },
    units({commit}, units) {
      commit('setUnits', units)
    },
    weather({commit, state}) {
      return new Promise((resolve) => {
        fetch(`${process.env.WEATHER_API_URL}lat=${state.coordinates.latitude}&lon=${state.coordinates.longitude}&units=${state.units}`)
          .then(response => {
            if (response.status !== 200) {
              commit('setAppStatus', {
                state: 'error',
                message: 'The Open Weather Map API is not responding. Please try again later.'
              })
              return
            }
            response.json().then(data => {
              if (!data) {
                commit('setAppStatus', {
                  state: 'error',
                  message: 'No results found. Please try another search.'
                })
                return
              }
              commit('setWeather', data)
              resolve(response)
            })
          })
          .catch(() => {
            commit('setAppStatus', {
              state: 'error',
              message: 'The Open Weather Map API is not responding.'
            })
          })
      })
    }
  },
  mutations: {
    setAppStatus: (state, appStatus) => {
      state.appStatus.state = appStatus.state
      state.appStatus.message = appStatus.message
    },
    setCoordinates: (state, coordinates) => {
      state.coordinates.latitude = coordinates.latitude
      state.coordinates.longitude = coordinates.longitude
    },
    setGeocode: (state, geocode) => {
      state.geocode = geocode
      state.coordinates.latitude = geocode.geometry.location.lat
      state.coordinates.longitude = geocode.geometry.location.lng
    },
    setGoogleMapsLoaded: (state, googleMapsLoaded) => {
      state.googleMapsLoaded = googleMapsLoaded
    },
    setInputQuery: (state, inputQuery) => {
      state.inputQuery = inputQuery
    },
    setLocationIcon: (state, locationIcon) => {
      state.locationIcon = locationIcon
    },
    setUnits: (state, units) => {
      state.units = units
      localStorage.setItem('units', units)
    },
    setWeather: (state, weather) => {
      state.weather = weather
    }
  }
})

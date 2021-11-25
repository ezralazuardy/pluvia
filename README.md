<a href="https://pluvia.ezralazuardy.com">
  <img src="https://therealsujitk-vercel-badge.vercel.app/?app=2KTy9vCrCk" alt="Deployment">
</a>
<a href="https://nodejs.org/en/download">
    <img alt="Node Version" src="https://img.shields.io/badge/node-%3E%3D%2012-brightgreen">
</a>
<a href="https://nodejs.org/en/download">
    <img alt="npm Version" src="https://img.shields.io/badge/npm-%3E%3D%206-red">
</a>
<a href="https://github.com/ezralazuardy/ezralazuardy.com/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/ezralazuardy/ezralazuardy.com" alt="License">
</a>

# ⛅ pluvia

A dead simple weather forecast app built with Vue.js, Google Map Geocoding, and Open Weather Map.

Demo application is accesible at https://pluvia.ezralazuardy.com.

### Prerequisites

* [Vue.js](https://vuejs.org) `v2`
* [Express.js](https://expressjs.com) `v4`
* [Node.js](https://nodejs.org) `v12`
* [npm](https://nodejs.org) `v6`
* [Google API Token](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [Open Weather Map API Token](https://home.openweathermap.org/api_keys)

> You need to generate a new Google API Token with access to these APIs:
> * [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key)
> * [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/get-api-key)
> * [Google Places API](https://developers.google.com/places/web-service/autocomplete)
>
> If some APIs is not enabled, bug or error may appear in the app.

### Getting Started

```bash
# clone repo and API submodule
git clone https://github.com/krestaino/weather-vue.git --recursive

# to fetch submodule if already cloned without the `--recursive` flag
git submodule update --init
```

### API Backend

The API backend for this project is a REST API using Node and Express. It's included in this project as a submodule and
located in `./pluvia-api`. The submodule repository can be found [here](https://github.com/ezralazuardy/pluvia-api).
This API backend fetches geolocation data from Google and weather data from Open Weather Map and returns it to Pluvia as
JSON data.

Rename `./pluvia-api/keys.js.example` to `./pluvia-api/keys.js` and add
your [Open Weather Map API](https://home.openweathermap.org/api_keys)
and [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/get-api-key) keys.

### Build Setup

On the root project, rename `keys.js.example` to `keys.js` and add
your [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key) keys. This
API key is for the background map which uses the Google Maps JavaScript API.

``` bash
# install dependencies
npm install

# serve with hot reload for development purposes
npm run dev

# or build for production with minification
npm run build
```

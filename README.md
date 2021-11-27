<a href="https://pluvia.ezralazuardy.com">
  <img src="https://therealsujitk-vercel-badge.vercel.app/?app=2kty9vcrck" alt="Deployment">
</a>
<a href="https://nodejs.org/en/download">
    <img alt="Node Version" src="https://img.shields.io/badge/node-%3E%3D%2012-brightgreen">
</a>
<a href="https://nodejs.org/en/download">
    <img alt="npm Version" src="https://img.shields.io/badge/npm-%3E%3D%206-red">
</a>
<a href="https://github.com/ezralazuardy/pluvia/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/ezralazuardy/pluvia" alt="License">
</a>

# ⛅ pluvia

A dead simple weather forecast app built with Vue.js, Google Map Geocoding, and Open Weather Map.

Demo application is accesible at https://pluvia.ezralazuardy.com.

### ✅ Prerequisites

* [Vue.js](https://vuejs.org) `v2`
* [Node.js](https://nodejs.org) `v12`
* [npm](https://nodejs.org) `v6`
* [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

> You need to generate a new `Google API Token` with access to these APIs:
> * [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key)
> * [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/get-api-key)
> * [Google Places API](https://developers.google.com/places/web-service/autocomplete)
>
> If some of those APIs are not enabled, bug or error may appear in the app.

### 🚀 Getting Started

Clone this repository and the [pluvia-api](https://github.com/ezralazuardy/pluvia-api) submodule.

```bash
# clone repo with submodule
git clone https://github.com/ezralazuardy/pluvia.git --recursive

# fetch the submodule manually if already cloned without the --recursive flag
git submodule update --init
```

On the root project directory, copy the `keys.js.example` to `keys.js` and add your
[Google API](https://developers.google.com/maps/documentation/javascript/get-api-key) key.

```bash
# copy the keys.js
cp keys.js.example keys.js
```

On the `pluvia-api` directory, copy the `keys.js.example` to `keys.js` and add your
[Google API](https://developers.google.com/maps/documentation/javascript/get-api-key) key and
[Open Weather Map API](https://home.openweathermap.org/api_keys) key.

```bash
# copy the pluvia-api/keys.js
cp pluvia-api/keys.js.example pluvia-api/keys.js
```

Now you can build and run the app.

``` bash
# install dependencies
npm install

# serve with hot reload for development purposes
npm run dev

# or build for production with minification
npm run build
```

### 🛰️ API Backend

This app uses API Backend named `pluvia-api` that built using Express.JS. This API backend fetches geolocation data
from Google and weather data from Open Weather Map and returns it to the app as JSON data.

It's included in this project as a submodule and located in the `pluvia-api` directory. The submodule repository
can be found [here](https://github.com/ezralazuardy/pluvia-api).

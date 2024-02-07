const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=82b80498e0e1a21ae067967e6bd442e5&query=37.8267,-122.4233&units=m'; //units=m is celcius and its default

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the weather service!');
//     }else if (response.body.error) {
//         console.log('Unable to find location');
//     }else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It feels like ", response.body.current.feelslike + " degress out.");
//     }
// });

//Geocoding - takes the location and gives lat and long
//Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los Angeles.json?access_token=pk.eyJ1IjoiYXNlZWxqYWZlciIsImEiOiJjbDl5anFzMmowNWlsM3JvYnFic3JoenIyIn0.CA2X_GtKlw227T9XJalgow&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!');
    }else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another seatch.');
    }else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log('Latitude: ' + latitude + ' Longitude: ' + longitude);
    }

    
});


const request = require("postman-request");
const geocode = require('./utils/geocode.js')

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
geocode("Bosten", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
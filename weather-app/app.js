const request = require("postman-request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

geocode("Bosten", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(44.1545, -75.7088, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

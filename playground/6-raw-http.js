const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=82b80498e0e1a21ae067967e6bd442e5&query=40,-75&units=m";

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();
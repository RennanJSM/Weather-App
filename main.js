const request = require("request");
const dotenv = require("dotenv").config();

const argument = process.argv[2];
const apikey = process.env.APIKEY;

const options = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&appid=${apikey}&units=metric`,
    method: "GET",
    json: true,
}


request(options, (error, res, body) => {
    console.log(`A temperatura atual em ${argument} é de ${body.main.temp} °C`)

});

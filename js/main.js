let cityName = document.getElementById("cityName");
let countryName = document.getElementById("countryName");
let degree = document.getElementById("degree");
let weatherIcon = document.getElementById("weatherIcon");
let dayInfo = document.getElementById("dayInfo");
var day1, day2, day3;
let http = new XMLHttpRequest();
var currentDay = [];
var active = [];
let weatherInfo = [];

function search(country) {
    if (country == "" && country.length < 3) {
        http.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=cairo&days=3`);
        http.send();
        request();
    }
    else if (country.length > 2) {
        http.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${country}&days=3`);
        http.send();
        request();
    }
}

function request() {
    http.addEventListener("readystatechange", () => {
        if (http.readyState == 4 && http.status == 200) {
            weatherInfo = JSON.parse(http.response);
            //console.log(weatherInfo);
            displayWeather();
            displayWithday();
        }
    })
}

function displayWeather() {
    cityName.innerHTML = `${weatherInfo.location.name}`;
    countryName.innerHTML = `${weatherInfo.location.country}`;
    degree.innerHTML = `${weatherInfo.current.temp_c}<sup>o</sup>C`;
    weatherIcon.src = `https://${weatherInfo.current.condition.icon}`;
    //console.log(weatherInfo.current.condition.icon)

}

function getDay() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day1 = new Date();
    day2 = new Date();
    day3 = new Date();
    day2.setDate(day1.getDate() + 1);
    day3.setDate(day1.getDate() + 2);
    day1 = days[day1.getDay()];
    day2 = days[day2.getDay()];
    day3 = days[day3.getDay()];
    currentDay = [day1, day2, day3];
    active = ["activ-card", "", ""];
    //console.log(day1, day2, day3)
}

function displayWithday() {
    dayInfo.innerHTML =``;
    for (let i = 0; i < weatherInfo.forecast.forecastday.length; i++) {
        getDay();
        dayInfo.innerHTML += `<div class="w-100">
                  
                  <div class="card info text-white w-50 ${active[i]}">
                  <h5 class="text-white fw-bold"> ${currentDay[i]} </h5>
                      <p class="pb-4">${weatherInfo.forecast.forecastday[i].date}</p>
                      <h2>${weatherInfo.forecast.forecastday[i].day.avgtemp_c}<sup>o</sup>C </h2>
                      <h6 class="text-white">${weatherInfo.forecast.forecastday[i].day.condition.text}</h6>
                  </div>
                </div>`
    }
}

search("cairo");

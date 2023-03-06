const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');

//function that receives location data
async function getPlace() {
    const url = `http://ip-api.com/json/?lang=en`;
    const res = await fetch(url);
    const data = await res.json(); 
    city.value = data.city;
    getWeather(city.value)
}
getPlace()

//function that receives weather information from the API
async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=b71185e43ec6eb1ff385e85bc3093893&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    const speed = "wind speed: ";
    const hum = "humidity: ";
    if (data.message==='city not found') {
      alert("Населённый пункт введён некорректно")
    }
    else {
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      weatherDescription.textContent = data.weather[0].description;
      temperature.textContent = `${Math.floor(data.main.temp)}°C`;
      windSpeed.textContent = `${speed}${Math.floor(data.wind.speed)} m/s`;
      humidity.textContent = `${hum}${Math.floor(data.wind.speed)}`;
    }
  }

//change of city
city.addEventListener('change', ()=>{
    getWeather(city.value);
})
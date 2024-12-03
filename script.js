const apiKey = 'ENTER_API_KEY';
const weatherResult = document.getElementById('weather-result');
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city');

// Function: Convert city name to coordinates and fetch weather data
async function fetchCoords(city) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Stadt nicht gefunden!');
    const [location] = await response.json(); // Das erste Ergebnis wird verwendet
    fetchWeatherByCoords(location.lat, location.lon);
  } catch (error) {
    weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

// Function: Fetch weather data using coordinates
async function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=de`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Fehler beim Abrufen der Wetterdaten!');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

// Function: Display weather
function displayWeather(data) {
  const { name, main, weather, wind } = data;
  weatherResult.innerHTML = `
    <h3>${name}</h3>
    <p>Temperatur: ${main.temp}°C</p>
    <p>Wetter: ${weather[0].description}</p>
    <p>Windgeschwindigkeit: ${wind.speed} m/s</p>
    <p>Luftfeuchtigkeit: ${main.humidity}%</p>
  `;
}

// Event listener: Search for a city
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) fetchCoords(city);
});

// Trigger search when Enter key is pressed
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBtn.click();
    }
})
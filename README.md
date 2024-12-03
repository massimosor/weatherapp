# Weather App

This Weather App is built using JavaScript, HTML, and CSS, and it integrates with the OpenWeather API to provide real-time weather data. Users can view the current weather conditions for a city and get a 7-day weather forecast.

---

## Features

1. **Current Weather**:
   - Fetches and displays the current weather data for a specified city, including temperature, weather conditions, wind speed, and humidity.

2. **Geolocation Support**:
   - Users can fetch weather data for their current location using the browser's Geolocation API.

3. **Error Handling**:
   - Displays user-friendly error messages for invalid city names, failed API calls, or denied geolocation access.

---

## Prerequisites

- OpenWeather API Key (you can obtain it from [OpenWeather](https://openweathermap.org/))
- Basic understanding of JavaScript, HTML, and CSS
- A text editor and a browser

---

## Installation

1. Clone the repository or download the project files.
2. Replace `YOUR_API_KEY` in the JavaScript file with your actual OpenWeather API key.
3. Open the `index.html` file in your browser to view the app.

---

## Usage

1. **Enter a city name**:
   - Type the name of a city into the input box and click the **Search** button. The current weather will display below the search box.

2. **Use your location**:
   - Click the **Use Location** button to fetch the weather for your current geographical coordinates.

---

## Code Overview

### **Main Functions**

#### 1. `fetchWeatherByCoords(lat, lon)`
Fetches current weather data using geographical coordinates.
- **Parameters**:
  - `lat`: Latitude of the location
  - `lon`: Longitude of the location
- **API Endpoint**:
  - `https://api.openweathermap.org/data/2.5/weather`

#### 2. `fetchCoords(city)`
Converts a city name into latitude and longitude using OpenWeather's Geo API.
- **Parameters**:
  - `city`: Name of the city
- **API Endpoint**:
  - `https://api.openweathermap.org/geo/1.0/direct`

#### 3. `displayWeather(data)`
Displays the current weather information on the page.
- **Parameters**:
  - `data`: Weather data object returned from the OpenWeather API.

---

## Folder Structure

```
project-folder/
|— index.html         # Main HTML file
|— styles.css         # CSS file for styling
|— app.js             # JavaScript file with API logic
```

---

## Error Handling

- Displays `City not found!` when an invalid city name is entered.
- Shows `Error fetching weather data!` for failed API calls.
- Alerts the user if geolocation access is denied or unavailable.

---

## License
This project is open-source and free to use under the MIT License.


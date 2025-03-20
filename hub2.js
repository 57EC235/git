const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const location = 'Vellapakkam,607109'; // Vellapakkam, 607109

async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
      const weatherInfoDiv = document.getElementById('weather-info');
      weatherInfoDiv.innerHTML = `
        <p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } else {
      console.error('Error fetching weather data:', data.message);
      document.getElementById('weather-info').innerHTML = '<p>Failed to retrieve weather data.</p>';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather-info').innerHTML = '<p>Failed to retrieve weather data.</p>';
  }
}

getWeather();

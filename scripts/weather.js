document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'fc9cf225a87d69de579868fb91c36e02';
    const city = 'bahia blanca'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const temperature = document.getElementById('temperature');
            const description = document.getElementById('description');
            const weatherIcon = document.getElementById('weather-icon');

            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Description: ${data.weather[0].description}`;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

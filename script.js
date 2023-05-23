document.addEventListener('DOMContentLoaded', function() {
    // JSON 
    var weatherData = [
        {
            "city": "Bremerton",
            "temperature": 50,
            "rainChance": 15
        },
        {
            "city": "Fort-Myers",
            "temperature": 85,
            "rainChance": 95
        },
        {
            "city": "Tokyo",
            "temperature": 57,
            "rainChance": 70
        }
    ];
  
    //  Function rendering weather data
    function renderWeatherData(data) {
        var weatherContainer = document.getElementById('weather-container');
  
        data.forEach(function(item) {
            var card = document.createElement('div');
            card.classList.add('weather-card');
  
            var cityName = document.createElement('h2');
            cityName.textContent = item.city;
  
            var temperature = document.createElement('p');
            temperature.textContent = 'Temperature: ' + item.temperature + '°C';
  
            var rainChance = document.createElement('p');
            rainChance.textContent = 'Rain Chance: ' + item.rainChance + '%';
  
            card.appendChild(cityName);
            card.appendChild(temperature);
            card.appendChild(rainChance);
  
            weatherContainer.appendChild(card);
        });
    }
  
    // Call renderWeatherData function
    renderWeatherData(weatherData);
});
const main_screen_1_hourly_forecast_btn = document.querySelector('.main-screen-1-weather-schedule-sections-hourly-forecast-btn');
const main_screen_1_weather_schedule_results = document.querySelector('.main-screen-1-weather-schedule-results');
const keeper = document.querySelector('.main-screen-1-weather-schedule-sections-loader-keeper');

function get_main_screen_1_hourly_forecast (place) {
    main_screen_1_weather_schedule_results.innerHTML = '';
    keeper.classList.add('hourly');
    for(let i = 0; i < place.place_hourly_forecast.length; i++) {
         main_screen_1_weather_schedule_results.innerHTML += `
            <div class='main-screen-1-weather-schedule-results-result'>
                <div class='main-screen-1-weather-schedule-results-result-hour'>
                    <h3>${(place.place_hourly_forecast[i].place_hourly_forecast_hour % 12) || 12} ${place.place_hourly_forecast[i].place_hourly_forecast_hour < 12 ? 'AM' : 'PM'}</h3>
                <div class='main-screen-1-weather-schedule-results-result-weather-icon'>
                    <img src='images/weather-icons/${place.place_hourly_forecast[i].place_hourly_forecast_icon}' alt=''>
                </div>
                <div class='main-screen-1-weather-schedule-results-result-celsius'>
                    <h3>${place.place_hourly_forecast[i].place_hourly_forecast_celsius}°</h3>
                </div>
            </div> 
        `
    }
}

function get_main_screen_1_hourly_forecast_onclick (place) {
    main_screen_1_hourly_forecast_btn.addEventListener('click', () => {
        keeper.classList.remove('weekly');
        keeper.classList.add('hourly');
        get_main_screen_1_hourly_forecast(place);
    });
}


export { get_main_screen_1_hourly_forecast, get_main_screen_1_hourly_forecast_onclick };
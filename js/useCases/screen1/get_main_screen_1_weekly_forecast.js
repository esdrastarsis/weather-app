const main_screen_1_weekly_forecast_btn = document.querySelector('.main-screen-1-weather-schedule-sections-weekly-forecast-btn');
const main_screen_1_weather_schedule_results = document.querySelector('.main-screen-1-weather-schedule-results');
const keeper = document.querySelector('.main-screen-1-weather-schedule-sections-loader-keeper');

function get_main_screen_1_weekly_forecast (place) {
    main_screen_1_weather_schedule_results.innerHTML = '';
    for(let i = 0; i < place.place_weekly_forecast.length; i++) {
         main_screen_1_weather_schedule_results.innerHTML += `
            <div class='main-screen-1-weather-schedule-results-result'>
                <div class='main-screen-1-weather-schedule-results-result-hour'>
                    <h3>${place.place_weekly_forecast[i].place_weekly_forecast_day.slice(0, 3)}</h3>
                <div class='main-screen-1-weather-schedule-results-result-weather-icon'>
                    <img src='images/weather-icons/${place.place_weekly_forecast[i].place_weekly_forecast_icon}' alt='' draggable="false">
                </div>
                <div class='main-screen-1-weather-schedule-results-result-celsius'>
                    <h3>${place.place_weekly_forecast[i].place_weekly_forecast_celsius}°</h3>
                </div>
            </div> 
        `
    }
}

function get_main_screen_1_weekly_forecast_onclick (place) {
    main_screen_1_weekly_forecast_btn.addEventListener('click', () => {
        keeper.classList.remove('hourly');
        keeper.classList.add('weekly');
        get_main_screen_1_weekly_forecast(place);
    });
}

export default get_main_screen_1_weekly_forecast_onclick;
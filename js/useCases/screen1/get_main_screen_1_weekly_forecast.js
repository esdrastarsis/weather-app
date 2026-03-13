import highlight_weekly_forecast from "./highlight_weekly_forecast.js";

const main_screen_1_weekly_forecast_btn = document.querySelector('.main-screen-1-weather-schedule-sections-weekly-forecast-btn');
const main_screen_1_weather_schedule_results = document.querySelector('.main-screen-1-weather-schedule-results');
const keeper = document.querySelector('.main-screen-1-weather-schedule-sections-loader-keeper');

function get_main_screen_1_weekly_forecast (active_place) {
    main_screen_1_weather_schedule_results.innerHTML = '';
    const day = highlight_weekly_forecast(active_place);
    for(let i = 0; i < active_place.place_weekly_forecast.length; i++) {
         const forecast_day = active_place.place_weekly_forecast[i].place_weekly_forecast_day.slice(0, 3)
         const is_day = day.slice(0, 3).toLowerCase() == forecast_day.toLowerCase();
         main_screen_1_weather_schedule_results.innerHTML += `
            <div class='${is_day ? 'main-screen-1-weather-schedule-results-result highlighted' : 'main-screen-1-weather-schedule-results-result'}'>
                <div class='main-screen-1-weather-schedule-results-result-hour'>
                    <h3>${is_day ? 'Now' : forecast_day}</h3>
                <div class='main-screen-1-weather-schedule-results-result-weather-icon'>
                    <img src='images/weather-icons/${active_place.place_weekly_forecast[i].place_weekly_forecast_icon}' alt='' draggable="false">
                </div>
                <div class='main-screen-1-weather-schedule-results-result-celsius'>
                    <h3>${Math.ceil((active_place.place_weekly_forecast[i].day_weather_h + active_place.place_weekly_forecast[i].day_weather_l) / 2)}°</h3>
                </div>
            </div> 
        `
    }
}

function get_main_screen_1_weekly_forecast_onclick (active_place) {
    main_screen_1_weekly_forecast_btn.addEventListener('click', () => {
        keeper.classList.remove('hourly');
        keeper.classList.add('weekly');
        get_main_screen_1_weekly_forecast(active_place);
    });
}

export default get_main_screen_1_weekly_forecast_onclick;
import find_nearest_forecast_dt from "../random_helper_methods/find_nearest_forecast_dt.js";
import set_image from "../random_helper_methods/set_image.js";

const main_screen_1_weekly_forecast_btn = document.querySelector('.main-screen-1-weather-schedule-sections-weekly-forecast-btn');
const main_screen_1_weather_schedule_results = document.querySelector('.main-screen-1-weather-schedule-results');
const keeper = document.querySelector('.main-screen-1-weather-schedule-sections-loader-keeper');

function get_main_screen_1_weekly_forecast (active_place) {
    main_screen_1_weather_schedule_results.innerHTML = '';
    const now = Math.floor(Date.now() / 1000);
    const nearest_dt = find_nearest_forecast_dt(
        now,
        active_place.place_weekly_forecast
    );
    for(let i = 0; i < active_place.place_weekly_forecast.length; i++) {
        const forecast = active_place.place_weekly_forecast[i];
        const forecast_day = forecast.place_weekly_forecast_day.slice(0, 3);
        const day_weather_status = forecast.day_weather_status;
        const forecast_celsius = Math.ceil((forecast.day_weather_h + forecast.day_weather_l) / 2);
        const forecast_dt = forecast.place_weekly_forecast_dt;
        const is_day = forecast_dt === nearest_dt;
        main_screen_1_weather_schedule_results.innerHTML += `
        <div class='${is_day ? 'main-screen-1-weather-schedule-results-result highlighted' : 'main-screen-1-weather-schedule-results-result'}'>
        <div class='main-screen-1-weather-schedule-results-result-hour'>
        <h3>${is_day ? 'Now' : forecast_day}</h3>
        </div>
        <div class='main-screen-1-weather-schedule-results-result-weather-icon'>
        <img src='images/weather-icons/${set_image(day_weather_status)}' alt='' draggable="false">
        </div>
        <div class='main-screen-1-weather-schedule-results-result-celsius'>
        <h3>${forecast_celsius}°</h3>
        </div>
        </div> 
        `
    }
    main_screen_1_weather_schedule_results.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
}

function get_main_screen_1_weekly_forecast_onclick (active_place) {
    main_screen_1_weekly_forecast_btn.addEventListener('click', () => {
        keeper.classList.remove('hourly');
        keeper.classList.add('weekly');
        get_main_screen_1_weekly_forecast(active_place);
    });
}

export default get_main_screen_1_weekly_forecast_onclick;
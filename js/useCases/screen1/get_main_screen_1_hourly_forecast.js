import get_main_screen_1_place_info from "./get_main_screen_1_place_info.js";
import highlight_hourly_forecast from "./highlight_hourly_forecast.js";

const main_screen_1_hourly_forecast_btn = document.querySelector('.main-screen-1-weather-schedule-sections-hourly-forecast-btn');
const main_screen_1_weather_schedule_results = document.querySelector('.main-screen-1-weather-schedule-results');
const keeper = document.querySelector('.main-screen-1-weather-schedule-sections-loader-keeper');

function get_main_screen_1_hourly_forecast(active_place) {
    main_screen_1_weather_schedule_results.innerHTML = '';
    keeper.classList.add('hourly');
    const hour = highlight_hourly_forecast(active_place);
    const nearest_hour = (Math.round(hour / 2) * 2) % 24;
    let active_object = null;
    for (let i = 0; i < active_place.place_hourly_forecast.length; i++) {   
        const hour_weather_h = active_place.place_hourly_forecast[i].hour_weather_h;
        const hour_weather_l = active_place.place_hourly_forecast[i].hour_weather_l;
        const forecast_hour = active_place.place_hourly_forecast[i].place_hourly_forecast_hour;
        const forecast_celsius = Math.ceil((hour_weather_h + hour_weather_l) / 2);
        const is_hour = forecast_hour == nearest_hour;
        main_screen_1_weather_schedule_results.innerHTML += `
            <div class='${is_hour ? 'main-screen-1-weather-schedule-results-result highlighted' : 'main-screen-1-weather-schedule-results-result'}'>
                <div class='main-screen-1-weather-schedule-results-result-hour'>
                    <h3>${is_hour ? 'Now' : `${(forecast_hour % 12) || 12} ${forecast_hour < 12 ? 'AM' : 'PM'}`}</h3>
                <div class='main-screen-1-weather-schedule-results-result-weather-icon'>
                    <img src='images/weather-icons/${active_place.place_hourly_forecast[i].place_hourly_forecast_icon}' alt='' draggable="false">
                </div>
                <div class='main-screen-1-weather-schedule-results-result-celsius'>
                    <h3>${forecast_celsius}°</h3>
                </div>
            </div> 
        `
        if (is_hour) {
            active_object = {
                place_name: active_place.place_name,
                place_celsius: forecast_celsius,
                place_weather_status: active_place.place_weather_status,
                place_weather_h: hour_weather_h,
                place_weather_l: hour_weather_l,
            }
        }
    }
    if(active_object) {
        get_main_screen_1_place_info(active_object);
    }
}

function get_main_screen_1_hourly_forecast_onclick(active_place) {
    main_screen_1_hourly_forecast_btn.addEventListener('click', () => {
        keeper.classList.remove('weekly');
        keeper.classList.add('hourly');
        get_main_screen_1_hourly_forecast(active_place);
    });
}


export { get_main_screen_1_hourly_forecast, get_main_screen_1_hourly_forecast_onclick };
const main_screen_1_weather_city = document.querySelector('.main-screen-1-weather-city');
const main_screen_1_weather_celsius = document.querySelector('.main-screen-1-weather-celsius');
const main_screen_1_weather_status = document.querySelector('.main-screen-1-weather-status');
const main_screen_1_weather_h = document.querySelector('.main-screen-1-weather-h');
const main_screen_1_weather_l = document.querySelector('.main-screen-1-weather-l');

function fetch_main_screen_1_place_info (place) {
    main_screen_1_weather_city.textContent = place.place_name;
    main_screen_1_weather_celsius.textContent = `${place.place_celsius}°`
    main_screen_1_weather_status.textContent = place.place_weather_status;
    main_screen_1_weather_h.textContent = `H: ${place.place_weather_h}°`;
    main_screen_1_weather_l.textContent = `L: ${place.place_weather_l}`;
}

export default fetch_main_screen_1_place_info;
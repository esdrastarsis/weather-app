const main_screen_1_weather_city = document.querySelector('.main-screen-1-weather-city');
const main_screen_1_weather_celsius = document.querySelector('.main-screen-1-weather-celsius');
const main_screen_1_weather_status = document.querySelector('.main-screen-1-weather-status');
const main_screen_1_weather_h = document.querySelector('.main-screen-1-weather-h');
const main_screen_1_weather_l = document.querySelector('.main-screen-1-weather-l');

function get_main_screen_1_place_info (active_place) {
    main_screen_1_weather_city.textContent = active_place.place_name;
    main_screen_1_weather_celsius.textContent = `${active_place.place_celsius}°`
    main_screen_1_weather_status.textContent = active_place.place_weather_status;
    main_screen_1_weather_h.textContent = `H: ${active_place.place_weather_h}°`;
    main_screen_1_weather_l.textContent = `L: ${active_place.place_weather_l}°`;
}

export default get_main_screen_1_place_info;
import set_image from "../random_helper_methods/set_image.js";
import set_active_place_onclick from "./set_active_place_onclick.js";
const main_screen_2_weather_search_results = document.querySelector('.main-screen-2-weather-search-results');
let image;

function get_main_screen_2_search_results (places) {
    main_screen_2_weather_search_results.innerHTML = '';
    for(let i = 0; i < places.length; i++) {
        image = set_image(places[i].place_weather_status);
        main_screen_2_weather_search_results.innerHTML += `
            <div class='main-screen-2-weather-search-results-result' data-index="${i}">
                <div class='main-screen-2-weather-search-results-result-weather-status-icon'>
                    <img src='images/weather-icons/${image}' alt=''>
                </div>
                <div class='main-screen-2-weather-search-results-result-weather-info'>
                    <div class='main-screen-2-weather-search-results-result-weather-celsius'>
                        <h1>${Math.ceil((places[i].place_weather_h + places[i].place_weather_l) / 2)}°</h1>
                    </div>
                    <div class='main-screen-2-weather-search-results-result-weather-h-l'>
                        <h3>H: ${places[i].place_weather_h}°</h3>
                        <h3>L: ${places[i].place_weather_l}°</h3>
                    </div>
                    <h3 class='main-screen-2-weather-search-results-result-weather-city'>${places[i].place_name}</h3>
                </div>
                <div class='main-screen-2-weather-search-results-result-weather-status'>
                    <h3>${places[i].place_weather_status}</h3>
                </div>
            </div>  
        `
    };

    main_screen_2_weather_search_results.addEventListener('click', (e) => {
        const row = e.target.closest('.main-screen-2-weather-search-results-result');
        if (row) {
            const index = row.dataset.index;
            set_active_place_onclick('active_place', places[index]);
        }
    });
}

export default get_main_screen_2_search_results;
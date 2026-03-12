import set_image from '../random_helper_methods/set_image.js';
import set_active_place_onclick from './set_active_place_onclick.js';

const main_screen_2_weather_search_results = document.querySelector('.main-screen-2-weather-search-results');
const main_screen_2_weather_search_place_searchbar = document.querySelector('.main-screen-2-weather-search-place-searchbar input');
let image;

function search_main_screen_2_place (places, input) {
    main_screen_2_weather_search_results.innerHTML = '';
    const search_results = places.filter((i) => i.place_name.toLowerCase().startsWith(input.toLowerCase()));
    for(let i = 0; i < search_results.length; i++) {
        image = set_image(search_results[i].place_weather_status);
        main_screen_2_weather_search_results.innerHTML += `
            <div class='main-screen-2-weather-search-results-result' data-index='${i}'>
                <div class='main-screen-2-weather-search-results-result-weather-status-icon'>
                    <img src='images/weather-icons/${image}' alt=''>
                </div>
                <div class='main-screen-2-weather-search-results-result-weather-info'>
                    <div class='main-screen-2-weather-search-results-result-weather-celsius'>
                        <h1>${Math.ceil((search_results[i].place_weather_h + search_results[i].place_weather_l) / 2)}°</h1>
                    </div>
                    <div class='main-screen-2-weather-search-results-result-weather-h-l'>
                        <h3>H: ${search_results[i].place_weather_h}°</h3>
                        <h3>L: ${search_results[i].place_weather_l}°</h3>
                    </div>
                    <h3 class='main-screen-2-weather-search-results-result-weather-city'>${search_results[i].place_name}</h3>
                </div>
                <div class='main-screen-2-weather-search-results-result-weather-status'>
                    <h3>${search_results[i].place_weather_status}</h3>
                </div>
            </div>  
        `
    }

    main_screen_2_weather_search_results.addEventListener('click', (e) => {
        const row = e.target.closest('.main-screen-2-weather-search-results-result');
        if (row) {
            const index = row.dataset.index;
            set_active_place_onclick('active_place', search_results[index]);
        }
    });
}

function search_main_screen_2_place_on_input (places) {
    main_screen_2_weather_search_place_searchbar.addEventListener('input', (e) => {
        e.preventDefault();
        search_main_screen_2_place(places, main_screen_2_weather_search_place_searchbar.value);
    });
}

export default search_main_screen_2_place_on_input;
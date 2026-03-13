// Api
import fetch_places_api from './api/endpoints/fetch_places_api.js';
import fetch_place_api from './api/endpoints/fetch_place_api.js';
// Screen 1
import { open_screen_1_onclick } from './useCases/screen1/open_screen_1.js';
import { get_main_screen_1_hourly_forecast, get_main_screen_1_hourly_forecast_onclick } from './useCases/screen1/get_main_screen_1_hourly_forecast.js';
import get_main_screen_1_weekly_forecast_onclick from './useCases/screen1/get_main_screen_1_weekly_forecast.js';
// Screen 2
import open_screen_2 from './useCases/screen2/open_screen_2.js';
import get_main_screen_2_search_results from './useCases/screen2/get_main_screen_2_search_results.js';
import search_main_screen_2_place_on_input from './useCases/screen2/search_main_screen_2_place.js';
import { get_active_place } from './useCases/random_helper_methods/set_active_place_in_memory.js';

const main_screen_2 = document.querySelector('.main-screen-2');

document.addEventListener('DOMContentLoaded', async () => {
    main_screen_2.classList.add('invisible');
    const places = await fetch_places_api();
    get_main_screen_2_search_results(places);
    search_main_screen_2_place_on_input(places);
    let active_place = get_active_place('active_place');
    if (!active_place) {
        active_place = fetch_place_api(places, 'tokyo');
    }
    console.log(active_place);
    get_main_screen_1_hourly_forecast(active_place);
    get_main_screen_1_hourly_forecast_onclick(active_place);
    get_main_screen_1_weekly_forecast_onclick(active_place);
    open_screen_1_onclick();
    open_screen_2();
});


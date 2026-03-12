import fetch_place_api from './api/endpoints/fetch_place_api.js';
import fetch_places_api from './api/endpoints/fetch_places_api.js';
import { fetch_main_screen_1_hourly_forecast, fetch_main_screen_1_hourly_forecast_onclick } from './useCases/fetch_main_screen_1_hourly_forecast.js';
import fetch_main_screen_1_place_info from './useCases/fetch_main_screen_1_place_info.js';
import fetch_main_screen_1_weekly_forecast_onclick from './useCases/fetch_main_screen_1_weekly_forecast.js';
import open_screen_1 from './useCases/open_screen_1.js';
import open_screen_2 from './useCases/open_screen_2.js';
const main_screen_2 = document.querySelector('.main-screen-2');

document.addEventListener('DOMContentLoaded', async () => {
    main_screen_2.classList.add('invisible');
    const places = await fetch_places_api();
    const place = fetch_place_api(places, 'New York');
    console.log(JSON.parse(localStorage.getItem('active_place')));
    fetch_main_screen_1_place_info(place);
    fetch_main_screen_1_hourly_forecast(place);
    fetch_main_screen_1_hourly_forecast_onclick(place);
    fetch_main_screen_1_weekly_forecast_onclick(place);
    open_screen_1();
    open_screen_2();
});


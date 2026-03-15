import fetch_places_api from './fetch_places_api.js';
import get_listed_places from '../useCases/random_helper_methods/get_listed_places.js';
import { set_with_expiry, get_with_expiry } from '../useCases/random_helper_methods/save_places_in_memory.js';

async function fetch_listed_places_api () {
    const is_places = get_with_expiry('cached_places');
    if (is_places == null) {
       const listed_places = await get_listed_places();
       const promised_places = listed_places.map(p => fetch_places_api(p));
       const places = await Promise.all(promised_places);
       const ttl = 4 * 24 * 60 * 60 * 1000;
       set_with_expiry('cached_places', places, ttl);
       return places;
    }
    return is_places;
}

export default fetch_listed_places_api;
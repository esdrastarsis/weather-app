import { set_with_expiry, get_with_expiry } from '../../useCases/random_helper_methods/save_places_in_memory.js';

async function fetch_places_api () {
    const is_places = get_with_expiry('places');
    if (is_places == null) {
        const req = await fetch('../data/data.json', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
    
        const res = await req.json();
        const ttl = 1000 * 60;
        set_with_expiry('places', res, ttl);
        return res; 
    }
    return is_places;
}   

export default fetch_places_api;
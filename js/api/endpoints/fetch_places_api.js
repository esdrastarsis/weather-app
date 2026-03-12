import { setWithExpiry, getWithExpiry } from '../../useCases/save_places_in_memory.js';

async function fetch_places_api () {
    const is_places = getWithExpiry('places');
    if (is_places == null) {
        const req = await fetch('../data/data.json', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
    
        const res = await req.json();
        const ttl = 1000 * 60;
        setWithExpiry('places', res, ttl);
        return res; 
    }
    return places;
}   

export default fetch_places_api;
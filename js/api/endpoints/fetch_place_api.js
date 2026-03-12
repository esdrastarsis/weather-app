import { set_active_place, get_active_place } from "../../useCases/set_active_place_in_memory.js";

function fetch_place_api (places, requested_name) {
    const cached_place = get_active_place('active_place');
    if (cached_place && cached_place.place_name.toLowerCase() === requested_name.toLowerCase()) {
        return cached_place;
    }
    const found_place = places.find((i) => i.place_name.toLowerCase() === requested_name.toLowerCase());

    if (found_place) {
        set_active_place('active_place', found_place);
        return found_place;
    }

    return null;
}
export default fetch_place_api;
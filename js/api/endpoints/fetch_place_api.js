import { setActivePlace, getActivePlace } from "../../useCases/set_active_place_in_memory.js";

function fetch_place_api (places, place) {
    const is_place = getActivePlace('active_place');
    if(is_place == null) {
        const x_place = places.filter((i) => i.place_name == place);
        setActivePlace('active_place', JSON.stringify(x_place[0]));
        return x_place[0]; 
    }
    return is_place;
}   

export default fetch_place_api;
import { get_main_screen_1_hourly_forecast, get_main_screen_1_hourly_forecast_onclick } from "../screen1/get_main_screen_1_hourly_forecast.js";
import get_main_screen_1_place_info from "../screen1/get_main_screen_1_place_info.js";
import get_main_screen_1_weekly_forecast_onclick from "../screen1/get_main_screen_1_weekly_forecast.js";
import { open_screen_1 } from "../screen1/open_screen_1.js";
import { get_active_place, set_active_place } from "../random_helper_methods/set_active_place_in_memory.js";

function set_active_place_onclick (key, data) {
    set_active_place(key, data);
    const active_place = get_active_place(key);
    get_main_screen_1_place_info(active_place);
    get_main_screen_1_hourly_forecast(active_place);
    get_main_screen_1_hourly_forecast_onclick(active_place);
    get_main_screen_1_weekly_forecast_onclick(active_place);
    open_screen_1();
}

export default set_active_place_onclick;
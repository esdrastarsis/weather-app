import build_hourly_forecast from "../useCases/random_helper_methods/build_hourly_forecast.js";
import build_weekly_forecast from "../useCases/random_helper_methods/build_weekly_forecast.js";
import export_api_key from "./export_api_key.js";

const api_key = export_api_key() ?? '';

async function fetch_places_api({ lat, lon, timezone }) {
    const req_place_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`);
    const res_place_forecast = await req_place_forecast.json();
    console.log(res_place_forecast);
    const current = res_place_forecast.list[0];

    const place_object = {
        place_name: res_place_forecast.city.name,
        place_timezone: timezone,

        place_lon: res_place_forecast.city.coord.lon,
        place_lat: res_place_forecast.city.coord.lat,

        place_weather_status: current.weather[0].main,

        place_weather_h: Math.round(current.main.temp_max),
        place_celsius: Math.round(current.main.temp),
        place_weather_l: Math.round(current.main.temp_min),

        place_hourly_forecast: build_hourly_forecast(res_place_forecast.list),
        place_weekly_forecast: build_weekly_forecast(res_place_forecast.list, timezone),
    };

    return place_object;
}

export default fetch_places_api;
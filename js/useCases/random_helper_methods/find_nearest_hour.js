function find_nearest_forecast_hour(current_hour, forecast_list) {
    let nearest = forecast_list[0].place_hourly_forecast_hour;
    let min_diff = 24;

    for (const forecast of forecast_list) {
        const diff = Math.abs(forecast.place_hourly_forecast_hour - current_hour);

        if (diff < min_diff) {
            min_diff = diff;
            nearest = forecast.place_hourly_forecast_hour;
        }
    }

    return nearest;
}

export default find_nearest_forecast_hour;
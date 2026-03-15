function find_nearest_forecast_dt(now, forecast_list) {
    let nearest = forecast_list[0];
    let min_diff = Infinity;

    for (const forecast of forecast_list) {
        const diff = Math.abs(forecast.place_hourly_forecast_dt - now);
        if (diff < min_diff) {
            min_diff = diff;
            nearest = forecast;
        }
    }
    
    return nearest.place_hourly_forecast_dt;
}

export default find_nearest_forecast_dt;
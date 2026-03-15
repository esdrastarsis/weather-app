function find_nearest_forecast_dt(now, forecast_list) {

    let nearest = forecast_list[0];
    let min_diff = Infinity;

    for (const forecast of forecast_list) {

        const dt =
            forecast.place_hourly_forecast_dt ??
            forecast.place_weekly_forecast_dt;

        const diff = Math.abs(dt - now);

        if (diff < min_diff) {
            min_diff = diff;
            nearest = forecast;
        }
    }

    return (
        nearest.place_hourly_forecast_dt ??
        nearest.place_weekly_forecast_dt
    );
}

export default find_nearest_forecast_dt;
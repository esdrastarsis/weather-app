function build_hourly_forecast(list) {
    return list.slice(0, 35).map((item) => {
        const hour = new Date(item.dt * 1000).getHours();

        return {
            place_hourly_forecast_hour: hour,
            hour_weather_status: item.weather[0].main,
            place_hourly_forecast_dt: item.dt,
            hour_weather_h: Math.round(item.main.temp_max),
            hour_weather_l: Math.round(item.main.temp_min)
        };
    });
}

export default build_hourly_forecast;
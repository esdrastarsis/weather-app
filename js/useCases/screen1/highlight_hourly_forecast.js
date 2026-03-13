function highlight_hourly_forecast (active_place) {
    const hour = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false,
        timeZone: active_place.place_timezone
    }).format(new Date());
    return Number(hour);
}

export default highlight_hourly_forecast;
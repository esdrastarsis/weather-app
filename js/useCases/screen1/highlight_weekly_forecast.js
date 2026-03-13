function highlight_weekly_forecast (active_place) {
    const day = Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        timeZone: active_place.place_timezone
    }).format(new Date());

    return day;
}

export default highlight_weekly_forecast;
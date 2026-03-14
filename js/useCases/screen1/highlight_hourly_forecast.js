function highlight_hourly_forecast ({ place_timezone }) {
    const hour = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false,
        timeZone: place_timezone
    }).format(new Date());
    return Number(hour);
}

export default highlight_hourly_forecast;
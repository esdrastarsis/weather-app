function format_hourly_forecast (dt, timezone) {
     return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: true,
        timeZone: timezone
    }).format(new Date(dt * 1000));
}

export default format_hourly_forecast;
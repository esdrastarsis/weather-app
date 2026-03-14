function highlight_weekly_forecast ({ place_timezone }) {
    const day = Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        timeZone: place_timezone
    }).format(new Date());

    return day;
}

export default highlight_weekly_forecast;
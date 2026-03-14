function build_weekly_forecast(list, timezone) {

    const days = {};

    for (const item of list) {

        const day = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            timeZone: timezone
        }).format(new Date(item.dt * 1000));

        if (!days[day]) {
            days[day] = {
                highs: [],
                lows: [],
                statuses: []
            };
        }

        days[day].highs.push(item.main.temp_max);
        days[day].lows.push(item.main.temp_min);
        days[day].statuses.push(item.weather[0].main);
    }

    return Object.entries(days).slice(0, 8).map(([day, data]) => {

        const status_count = {};

        for (const status of data.statuses) {
            status_count[status] = (status_count[status] || 0) + 1;
        }

        const most_common_status =
            Object.entries(status_count).sort((a, b) => b[1] - a[1])[0][0];

        return {
            place_weekly_forecast_day: day,
            day_weather_status: most_common_status,
            day_weather_h: Math.round(Math.max(...data.highs)),
            day_weather_l: Math.round(Math.min(...data.lows))
        };

    });
}

export default build_weekly_forecast;
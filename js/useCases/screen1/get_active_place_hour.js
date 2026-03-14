const clock = document.querySelector('.header-clock h3');

function get_active_place_hour (timezone) {
    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: timezone
    }
    const settled_hour = new Intl.DateTimeFormat("en-US", options).format(new Date());
    clock.textContent = settled_hour;
}

function change_hour (active_place) {
    setInterval(get_active_place_hour(active_place.place_timezone), 1000 * 60);
}

export default change_hour;

const clock = document.querySelector('.header-clock h3');
let interval_id = null;
let timeout_id = null;

function get_active_place_hour(timezone) {
    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: timezone
    }
    const settled_hour = new Intl.DateTimeFormat("en-US", options).format(new Date());
    clock.textContent = settled_hour;
}

function change_hour(active_place) {
    const timezone = active_place.place_timezone;
    clearInterval(interval_id);
    clearTimeout(timeout_id);
    get_active_place_hour(timezone);
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    timeout_id = setTimeout(() => {

        get_active_place_hour(timezone);

        interval_id = setInterval(() => {
            get_active_place_hour(timezone);
        }, 60000);

    }, delay);
}

export default change_hour;

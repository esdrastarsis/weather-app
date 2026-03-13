function set_active_place (key, value) {
    const stringfied_value = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.removeItem(key);
    localStorage.setItem(key, stringfied_value);
}

function get_active_place (key) {
    const place_object = localStorage.getItem(key);
    if (!place_object || place_object === "undefined" || place_object === "[object Object]") {
        return null;
    }
    try {
        return JSON.parse(place_object);
    } catch (e) {
        console.error("Error parsing local storage JSON:", e);
        return null; 
    }
}

export { set_active_place, get_active_place };

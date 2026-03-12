function setActivePlace (key, value) {
    localStorage.setItem(key, value);
}

function getActivePlace (key) {
    const place_object = localStorage.getItem(key);
    if(!place_object) return null;
    const place = JSON.parse(place_object);
    return place;
}

export { setActivePlace, getActivePlace };

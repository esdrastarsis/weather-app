function setWithExpiry(key, value, ttl) {
    const object = {
        value: value,
        expiry: Date.now() + ttl
    };
    localStorage.setItem(key, JSON.stringify(object));
}

function getWithExpiry(key) {
    const object_str = localStorage.getItem(key);
    if(!object_str) return null;
    const object = JSON.parse(object_str);
    if(Date.now() > object.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return object.value;
}

export { setWithExpiry, getWithExpiry };
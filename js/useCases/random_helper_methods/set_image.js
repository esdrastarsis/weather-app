function set_image(status) {
    let image;
    if (status.toLowerCase().includes('sunny', 'warm')) {
        image = 'sun_cloud_mid_rain.svg';
        return image;
    } 
    if (status.toLowerCase() == 'rainy') {
        image = 'sun_cloud_angled_rain.svg';
        return image;
    }
    if(status.toLowerCase() == 'cloudy') {
        image = 'moon_cloud_mid_rain.svg';
        return image;
    }
    if(status.toLowerCase() == 'windy') {
        image = 'tornado.svg';
        return image;
    }
    if(status.toLowerCase() == 'breezy') {
        image = 'moon_cloud_angled_rain.svg';
        return image;
    }
    return 'moon_cloud_angled_rain.svg';
}

export default set_image;
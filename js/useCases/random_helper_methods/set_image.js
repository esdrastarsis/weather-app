function set_image(status) {
    let image;
    if(!status) {
        return 'moon_cloud_angled_rain.svg';
    }
    if (status.toLowerCase().includes('sun', 'warm', 'clear')) {
        image = 'sun_cloud_mid_rain.svg';
        return image;
    } 
    if (status.toLowerCase() == 'rain') {
        image = 'sun_cloud_angled_rain.svg';
        return image;
    }
    if(status.toLowerCase() == 'clouds') {
        image = 'moon_cloud_mid_rain.svg';
        return image;
    }
    if(status.toLowerCase() == 'wind') {
        image = 'tornado.svg';
        return image;
    }
    if(status.toLowerCase() == 'breez') {
        image = 'moon_cloud_angled_rain.svg';
        return image;
    }
    return 'moon_cloud_angled_rain.svg';
}

export default set_image;
async function get_listed_places () {
    const req = await fetch('https://mockly.me/custom/weather-app/api');
    const res = await req.json();
    console.log(res);
    return res.places;
}

export default get_listed_places;
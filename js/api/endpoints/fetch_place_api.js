async function fetch_place_api (place) {
    const req = await fetch('../data/data.json', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const res = await req.json();
    const x_place = res.filter((i) => i.place_name == place);
    return x_place[0]; 
}   

export default fetch_place_api;
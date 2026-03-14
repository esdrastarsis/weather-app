async function get_listed_places () {
    const req = await fetch('../data/cities.json');
    const res = await req.json();
    console.log(res);
    return res;
}

export default get_listed_places;
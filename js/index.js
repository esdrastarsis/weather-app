const app = document.querySelector('.app');
const main_screen_1 = document.querySelector('.main-screen-1');
const main_screen_2 = document.querySelector('.main-screen-2');
const main_location_btn = document.querySelector('.main-screen-1-weather-schedule-btns-location-btn button');
const main_search_place_return_btn = document.querySelector('.main-screen-2-weather-search-place-return-btn');

document.addEventListener('DOMContentLoaded', () => {
    main_screen_2.classList.add('invisible');
});

main_location_btn.addEventListener('click', (e) => {
    e.preventDefault();
    main_screen_1.classList.add('invisible');
    main_screen_2.classList.remove('invisible');
    app.classList.add('nobackground');
});

main_search_place_return_btn.addEventListener('click', (e) => {
    e.preventDefault();
    main_screen_2.classList.add('invisible');
    main_screen_1.classList.remove('invisible');
    app.classList.remove('nobackground');
})

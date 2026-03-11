const app = document.querySelector('.app');
const main_screen_1 = document.querySelector('.main-screen-1');
const main_search_place_return_btn = document.querySelector('.main-screen-2-weather-search-place-return-btn');
const main_screen_2 = document.querySelector('.main-screen-2');

function open_screen_1 () {
     main_search_place_return_btn.addEventListener('click', (e) => {
        e.preventDefault();
        main_screen_2.classList.add('invisible');
        main_screen_1.classList.remove('invisible');
        app.classList.remove('nobackground');
    });
}

export default open_screen_1;
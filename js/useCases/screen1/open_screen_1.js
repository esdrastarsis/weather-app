const app = document.querySelector('.app');
const main_screen_1 = document.querySelector('.main-screen-1');
const main_search_place_return_btn = document.querySelector('.main-screen-2-weather-search-place-return-btn');
const main_screen_2 = document.querySelector('.main-screen-2');

function open_screen_1 () {
    main_screen_2.classList.add('invisible');
    main_screen_1.classList.remove('invisible');
    app.classList.remove('nobackground');
}

function open_screen_1_onclick () {
      main_search_place_return_btn.addEventListener('click', (e) => {
        e.preventDefault();
        open_screen_1();
      });
}

export { open_screen_1, open_screen_1_onclick };
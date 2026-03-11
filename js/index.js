import open_screen_1 from './useCases/open_screen_1.js';
import open_screen_2 from './useCases/open_screen_2.js';
const main_screen_2 = document.querySelector('.main-screen-2');

document.addEventListener('DOMContentLoaded', () => {
    main_screen_2.classList.add('invisible');
    open_screen_1();
    open_screen_2();
});


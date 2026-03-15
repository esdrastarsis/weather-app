const slider = document.querySelector('.main-screen-1-weather-schedule-results');
let isDown = false;
let startX;
let scrollLeft;

function drag_schedule_results() {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 0.8;
        slider.scrollLeft = scrollLeft - walk;
    });
}

export default drag_schedule_results;
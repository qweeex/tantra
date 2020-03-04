$(document).ready(function () {

    // Massages slider
    const massages = new Swiper('.massages-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
    });

    $('.massages-title').on('click', () => {
        massages.update();
    });


});
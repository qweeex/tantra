$(document).ready(() => {

    // Massages slider
    let massages = new Swiper('.massages-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});
$(document).ready(function () {

    // Massages slider
    let countSlides = 3;
    let massages = new Swiper('.massages-slider', {
        slidesPerView: countSlides,
        spaceBetween: 30,
        init: false,
        breakpoints: {
            // when window width is >= 320px
            1000: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            620: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 640px
            500: {
                slidesPerView: 1,
                spaceBetween: 0
            },
        }
    });
    massages.on('init', () => {
        updateCount(massages.activeIndex, massages.slides.length);
    });
    massages.on('slideChange', function () {
        updateCount(massages.activeIndex, massages.slides.length);
    });
    $('.massages-slide-prev').on('click', () => {
        massages.slidePrev();
    });
    $('.massages-slide-next').on('click', () => {
        massages.slideNext();
    });
    function updateCount(num, all) {
        let current = parseInt(num);
        let total = parseInt(all);

        current = current + 1;

        if (current < 10) {
            current = '0' + current;
        }
        if (total < 10) {
            total = '0' + total;
        }

        $('.count-info').html(
            `
             <p>
                <span class="count-current">${current}</span>
                / <span class="count-all">${total}</span>
            </p>
            `
        );

        updatePaginationMassages(num, massages.slides);
    }
    function updatePaginationMassages(num, all) {
        $('.massages-slide-count').empty();
        $.each(all, function(index, value) {
            if (index === num) {
                $('.massages-slide-count').append(`
                    <a href="#" data-pag="${index}" class="arrow-slide__active"><span></span></a>
                `);
            } else {
                $('.massages-slide-count').append(`
                    <a href="#" data-pag="${index}" ><span></span></a>
                `);
            }
            $('[data-pag]').on('click', (e) => {

                e.preventDefault();
                let id = parseInt(e.target.dataset.pag);
                massages.slideTo(id);

            });
        });


    }

    // Apartments slider
    var Apartments = new Swiper('.apartments-slider', {
        slidesPerView: 1,
        effect: 'fade',
        init: false
    });
    Apartments.on('init', () => {
        updatePaginationApartments(Apartments.activeIndex, Apartments.slides)
    });
    Apartments.on('slideChange', function () {
        updatePaginationApartments(Apartments.activeIndex, Apartments.slides)
    });
    $('.apartments-slide-prev').on('click', (e) => {
        e.preventDefault();
        Apartments.slideNext();
    });
    $('.apartments-slide-next').on('click', (e) => {
        e.preventDefault();
        Apartments.slidePrev();
    });
    function updatePaginationApartments(num, all) {
        $('.apartments-slide-count').empty();
        $.each(all, function(index, value) {
            if (index === num) {
                $('.apartments-slide-count').append(`
                    <a href="#" data-pag="${index}" class="arrow-slide__active"><span></span></a>
                `);
            } else {
                $('.apartments-slide-count').append(`
                    <a href="#" data-pag="${index}" ><span></span></a>
                `);
            }
            $('[data-pag]').on('click', (e) => {

                e.preventDefault();
                let id = parseInt(e.target.dataset.pag);
                Apartments.slideTo(id);

            });
        });


    }

    //
    $(window).on('load', () => {
        Apartments.init();
        setTimeout(function () {
            Apartments.init();
        }, 1000);
        massages.init();
        massages.update();
        setTimeout(function () {
            massages.init();
            massages.update();
        }, 1000);
    });

    // Header mobile menu
    $('.header-menu__btn > a').on('click', (e) => {
        e.preventDefault();
        $('.header-menu-mob').addClass('header-menu-mob__active');
    });
    $('.menu-back > a').on('click', (e) => {
        e.preventDefault();
        $('.header-menu-mob').removeClass('header-menu-mob__active');
    });

    // Video background
    $('.jquery-background-video').bgVideo();

    // Popup show
    $('[data-popup]').on('click', (e) => {
        if (e.target.parentElement.tagName == 'A' || e.target.tagName == 'A'){
            e.preventDefault();
        }
        $('.popup').addClass('popup-show');
    });
    $('.popup-bg').on('click', () => {
        $('.popup').removeClass('popup-show');
    });

});

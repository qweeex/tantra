$(document).ready(function () {

    // Massages slider
    InitMassagesSlider();

    // Apartments slider
    InitApartmentsSlider();

});

function InitMassagesSlider() {

    let countSlides = 3;

    var massages = new Swiper('.massages-slider', {
        slidesPerView: countSlides,
        spaceBetween: 30,
        init: false,
    });


    massages.on('init', () => {
        updateCount(massages.activeIndex, massages.slides.length)
    });

    massages.on('slideChange', function () {
        updateCount(massages.activeIndex, massages.slides.length)
    });

    $(window).on('load', () => {
        massages.init();
        setTimeout(function () {
            massages.init();
        }, 1000);
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

        updatePagination(num, massages.slides);
    }

    function updatePagination(num, all) {
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

}

function InitApartmentsSlider() {

    var Apartments = new Swiper('.apartments-slider', {
        slidesPerView: 1,
        effect: 'fade',
        init: false
    });

    Apartments.on('init', () => {
        updatePagination(Apartments.activeIndex, Apartments.slides)
    });

    Apartments.on('slideChange', function () {
        updatePagination(Apartments.activeIndex, Apartments.slides)
    });

    $(window).on('load', () => {
        Apartments.init();
        setTimeout(function () {
            Apartments.init();
        }, 1000);
    });

    $('.apartments-slide-prev').on('click', (e) => {
        e.preventDefault();
        Apartments.slideNext();
    });

    $('.apartments-slide-next').on('click', (e) => {
       e.preventDefault();
       Apartments.slidePrev();
    });


    function updatePagination(num, all) {
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

}

jQuery(document).ready(function($){
    $('.slider-home').slick({
            autoplay: false,
            arrows: true,
            dots: false,
            mobileFirst: true,
            adaptiveHeight: true
        }
    );

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    if(windowHeight > 600) {
        $('.region-01').css('height', (windowHeight - 140) + 'px');
    }

    $('.slider-home, .slider-home-item').css('height', (windowHeight - 140) + 'px');
    $('.slider-home,  .slider-home-item').css('width', (windowWidth) + 'px');

    $('.slider-home-customers').slick({
            autoplay: false,
            arrows: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            mobileFirst: true,

            responsive: [
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true

                    }
                }
            ]

        }
    );



});
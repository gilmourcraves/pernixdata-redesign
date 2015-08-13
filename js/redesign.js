
jQuery(document).ready(function($){
    $('.slider-home').slick({
            autoplay: true,
            arrows: false,
            dots: true,
            mobileFirst: true

        }
    );

    var windowHeight = $(window).height();
    console.log(windowHeight);
    if(windowHeight > 600) {
        $('.region-01').css('height', (windowHeight - 132) + 'px');
    }

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
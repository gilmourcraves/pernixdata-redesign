


jQuery(document).ready(function($){


    $(window).on('scroll', function(){
        // Loop over each container, and check if it's visible.
        $('.region-parallax').each(function(){
            var visible = $(this).visible();
            var circleId = $(this).data('circleid');

            //console.log(visible);

            if(visible == true){
                $('.circle').removeClass('circle-on');
                $('[data-id="' + circleId +'"]').addClass('circle-on');
            }
        });
    });



    $('.slider-home').slick({
            autoplay: true,
            arrows: false,
            dots: false,
            mobileFirst: true,
            adaptiveHeight: true,
            pauseOnHover: false
        }
    );

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var centerVertical = ((windowHeight - 120) / 2) - 115;
    var contentWidth =  1109;
    var arrowsLR = ((windowWidth - contentWidth) / 2) -250;

    if(windowHeight > 600) {
        $('.region-01').css('height', (windowHeight - 120) + 'px');
        $('.container-slideshow').css('top', centerVertical + 20 + 'px');
        $('#right-utility').css('top', centerVertical + 140 + 'px');
        $('#right-utility-nav').css('top', centerVertical + 143 + 'px').css('right','5%');
        $('.slick-prev').css('left', arrowsLR + 'px');
        $('.slick-next').css('right', arrowsLR + 'px');
        $('.container-slideshow-buttons-below').css('top', centerVertical + 436 + 'px');
    }

    $('.circle').click(function(){
        var goto = $(this).data('target');
        var gotoTarget = $(goto);
        var gotoOffset = 160;

        if(goto == '.region-01'){
            gotoOffset = 120
        }

        $('.circle').removeClass('circle-on');

        $(this).addClass('circle-on');

        $('html,body').animate({scrollTop: gotoTarget.offset().top - gotoOffset});
    });

    $('.slider-home-customers').slick({
            autoplay: false,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
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
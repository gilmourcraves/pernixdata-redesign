


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
            autoplay: false,
            arrows: true,
            dots: false,
            mobileFirst: true,
            adaptiveHeight: true,
            pauseOnHover: false,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        settings: "unslick"

                    }
                }
            ]
        }
    );

    var navHeight = 104;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var centerH1 = ((windowHeight - navHeight) / 2) - 115;
    var contentWidth =  1109;
    var arrowsLR = ((windowWidth - contentWidth) / 2) -100;

    $('.region-01').css('height', (windowHeight - navHeight) + 'px');
    $('.slider-home, .slider-home-item').css('height', (windowHeight - navHeight) + 'px').css('width', (windowWidth) + 'px');
    $('.slider-home-center').css('margin-top', centerH1 + 'px');
    /*$('#right-utility').css('top', centerH1 - 140 + 'px');*/
    $('#right-utility-nav').css('top', centerH1 + 130 + 'px');
    $('.slick-prev').css('left', arrowsLR + 'px');
    $('.slick-next').css('right', arrowsLR + 'px');


    if(windowWidth > 1084) {
        $('.region-01').css('height', (windowHeight - navHeight) + 'px');
        $('.slider-home, .slider-home-item').css('height', (windowHeight - navHeight) + 'px').css('width', (windowWidth) + 'px');
        $('.slider-home-center').css('margin-top', centerH1 + 'px');
        /*$('#right-utility').css('top', centerH1 - 140 + 'px');*/
        $('#right-utility-nav').css('top', centerH1 + 130 + 'px');
        $('.slick-prev').css('left', arrowsLR + 'px');
        $('.slick-next').css('right', arrowsLR + 'px');
    }

    $(window).on('resize', function() {
            //console.log('window resized');
    });

    $(window).on('resize', function() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var centerH1 = ((windowHeight - 120) / 2) - 115;
        var contentWidth =  1109;
        var arrowsLR = ((windowWidth - contentWidth) / 2) -100;
        var gotoNav = ((windowWidth - contentWidth) / 2) -200;

        $('.region-01').css('height', (windowHeight - 60) + 'px');
        $('.slider-home, .slider-home-item').css('height', (windowHeight - 120) + 'px').css('width', (windowWidth) + 'px');
        $('.slider-home-center').css('margin-top', centerH1 + 'px');
        $('#right-utility').css('top', centerH1 + 140 + 'px');
        $('#right-utility-nav').css('top', centerH1 + 140 + 'px').css('right', gotoNav + 'px');
        $('.slick-prev').css('left', arrowsLR + 'px');
        $('.slick-next').css('right', arrowsLR + 'px');


        if(windowWidth > 1084) {
            $('.region-01').css('height', (windowHeight - 60) + 'px');
            $('.slider-home, .slider-home-item').css('height', (windowHeight - 60) + 'px').css('width', (windowWidth) + 'px');
            $('.slider-home-center').css('margin-top', centerH1 + 'px');
            $('#right-utility').css('top', centerH1 + 140 + 'px');
            $('#right-utility-nav').css('top', centerH1 + 140 + 'px').css('right', gotoNav + 'px');
            $('.slick-prev').css('left', arrowsLR + 'px');
            $('.slick-next').css('right', arrowsLR + 'px');
        } else {
         /*   $('.region-01').hide();*/
        }
    });

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
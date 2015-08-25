var utility = {

    sliderHomeHeroResize: function(){

        var windowHeight = jQuery(window).height();
        var windowWidth = jQuery('body').innerWidth();
        var navHeight = 120;

        if (windowWidth < 880 ){
            navHeight = 60;
        }

        var centerH1 = ((windowHeight - navHeight) / 2) - 120;
        var contentWidth =  1109;
        var arrowsLR = ((windowWidth - contentWidth) / 2) -120;
        var scrollBarWidth = 17;
        var slidesHomeHero = jQuery('.region-01, #slider-home-hero, ul#slider-home-hero li');

        jQuery(slidesHomeHero).css('height', (windowHeight - navHeight) + 'px');
        jQuery(slidesHomeHero).css('width', (windowWidth) + 'px');
        jQuery('.slider-home-center').css('margin-top', centerH1 + 'px');
        jQuery('#right-utility').css('bottom', '40px');
        jQuery('#right-utility-nav').css('top', centerH1 + 130 + 'px');

    }

};




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

    utility.sliderHomeHeroResize();

    var sliderHomeHero;

    sliderHomeHero =
        $('#slider-home-hero').bxSlider({
            pager: false,
            adaptiveHeight: true,
            preloadImages: 'all',
            autoStart: false,
            onSliderLoad: function(){
                $("#container-slider-home-hero").css("visibility", "visible")
            }
         });

    $(window).on('resize', function() {
        //sliderHomeHero.reloadSlider();
        utility.sliderHomeHeroResize();
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
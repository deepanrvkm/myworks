jQuery(function () {

    /*===============================================
    	Foundation
    ==================================================*/
    jQuery(document).foundation();


    /*===============================================
        Sticky Header
    ==================================================*/
    jQuery(window).scroll(function () {
        var sticky = jQuery('body'),
            scroll = jQuery(window).scrollTop();
        if (scroll >= 1) {
            sticky.addClass('is-sticky');
        } else {
            sticky.removeClass('is-sticky');
        }
        if (scroll >= 200) {
            jQuery('.back-to-top').addClass('view');
        } else {
            jQuery('.back-to-top').removeClass('view');
        }
    });



    /*===============================================
    	Slick slider
    ==================================================*/
    if (jQuery.fn.slick) {

        jQuery(".banner-block").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        jQuery(".logo-list ul").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            draggable: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
            },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }
        ]
        });

        jQuery(".testimonial-list ul").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        adaptiveHeight: true
                    }
            }
        ]
        });

    }


    /*===============================================
    	imageBg
    ==================================================*/
    imageBg();


    /*===============================================
        equalHeight
    ==================================================*/
    equalHeight();



    /*===============================================
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //imageBg
        imageBg();

        //equalHeight
        equalHeight();

        //sticky footer
        jQuery('.footer-push').css({
            'height': (jQuery(".footer").outerHeight()) + 'px'
        });

    });


    /*===============================================
        scroll to top
    ==================================================*/
    jQuery(".back-to-top").click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    })


    /*===============================================
        Event month toggle
    ==================================================*/
    jQuery('.month-btn .btn').click(function () {
        if (jQuery('.mobile-visible').is(":visible")) {
            jQuery(this).parent().next('.month-row').slideToggle();
            jQuery(this).toggleClass('open');
        } else {
            jQuery(this).parent().parent().toggleClass('show');
        }
    });

    /*===============================================
        sticky footer
    ==================================================*/
    jQuery('.footer-push').css({
        'height': (jQuery(".footer").outerHeight()) + 'px'
    });


    /*===============================================
        SumoSelect
    ==================================================*/
    if (jQuery.fn.SumoSelect) {
        jQuery('.SelectBox').SumoSelect();
    }

});


/*===============================================
	imageBg
==================================================*/
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image, .grid-thumb, .inner-banner, .content-top-box .image-box, .testimonial-thumb, .event-img-box, .block-image, .story-image, .landing-header, .grid-image, .enquiry-section, .story-thumb").imgLiquid({
            fill: true
        });
    }
}

/*===============================================
    equalHeight
==================================================*/
function equalHeight() {
    if (jQuery.fn.matchHeight) {
        jQuery('.eq-height').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }
}
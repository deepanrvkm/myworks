jQuery(function () {

    /*===============================================
    	Foundation
    ==================================================*/
    jQuery(document).foundation();


    /*===============================================
    	Slick slider
    ==================================================*/
    if (jQuery.fn.slick) {

        jQuery('.slider-wrap').slick({
            arrows: true,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });


        jQuery(".banner-slider").slick({
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            lazyLoad: 'ondemand',
            speed: 1000,
            swipe: true,
            fade: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }]
        });
        jQuery('.banner-slider').on('setPosition', function (event, slick) {
            jQuery('.slick-slide.slick-current.slick-active').addClass('active-slide');
        });
        jQuery('.banner-slider').on('afterChange', function (event, slick, currentSlide) {
            jQuery('.slick-slide').removeClass('active-slide');
            jQuery(slick.$slides.get(currentSlide)).addClass('active-slide');
        });



        jQuery('.product-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 800,
            prevArrow: jQuery('.arrows.prev'),
            nextArrow: jQuery('.arrows.next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }]
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
    });



    /*===============================================
            Language switcher
    ==================================================*/
    if (jQuery.fn.polyglotLanguageSwitcher) {
        jQuery('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
        });
        jQuery('#polyglotLanguageSwitcher1').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
        });
    }
    /*===============================================
           Cart view
    ==================================================*/
    jQuery(".view-cart").click(function () {
        jQuery(".cart-block").slideToggle();
    });

    /*===============================================
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //imageBg
        imageBg();

        //equalHeight
        equalHeight();


        jQuery('.slider-wrap').slick({
            arrows: true,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

    });




    /*===============================================
        Product sidebar Submenu & Overlay
    ==================================================*/
    jQuery(".sub-blocks ul li.submenu a").click(function (e) {
        e.preventDefault();
        jQuery(this).next('ul').slideToggle();
    });

    jQuery(".filter-btn").click(function () {
        jQuery('.listing-outer').toggleClass('filter-open');
        jQuery('.filter-overlay').toggleClass('in');
    });

    jQuery(".filter-overlay").click(function () {
        jQuery('.listing-outer').toggleClass('filter-open');
        jQuery(this).toggleClass('in');
    });



});


/*===============================================
	imageBg
==================================================*/
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image,.content-banner").imgLiquid({
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

/*===============================================
    parallax
==================================================*/
setTimeout(function () {
    jQuery(window).trigger('resize.px.parallax');
}, 3000);

/*===============================================
    background 
==================================================*/
jQuery('.para-image').each(function () {
    jQuery(this).find('img').hide();
    var imgURL = jQuery(this).find('img').attr('src');
    jQuery(this).css('background-image', 'url(' + imgURL + ')');

});
/*===============================================
    Input number 
==================================================*/
jQuery(function () {
    var spinner = jQuery("#spinner").spinner();
    jQuery("#disable").on("click", function () {
        if (spinner.spinner("option", "disabled")) {
            spinner.spinner("enable");
        } else {
            spinner.spinner("disable");
        }
    });
    jQuery("#destroy").on("click", function () {
        if (spinner.spinner("instance")) {
            spinner.spinner("destroy");
        } else {
            spinner.spinner();
        }
    });
    jQuery("#getvalue").on("click", function () {
        alert(spinner.spinner("value"));
    });
    jQuery("#setvalue").on("click", function () {
        spinner.spinner("value", 5);
    });
    jQuery("button").button();
});

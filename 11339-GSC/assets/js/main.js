jQuery(function () {

    jQuery(".menu-icon").click(function () {
        jQuery(".canvas-menu").toggleClass("open");
    });

    jQuery(".menu ul li a").click(function () {
        jQuery(this).parent("li").siblings("li").removeClass("active");
        jQuery(this).parent("li").toggleClass("active");
        jQuery(this).parent("li").siblings("li").children("ul").slideUp();
        jQuery(this).parent("li").siblings("li").children("ul").children("li").removeClass("active");
        jQuery(this).siblings("ul").slideToggle();
    });
    /*Slider*/
    if (jQuery.fn.imgLiquid) {
        jQuery(".slide ").imgLiquid();
    }
    if (jQuery.fn.slick) {
        jQuery('.slider-block').slick({
            dots: true,
            arrows: false
        });
        setTimeout(function () {
            var topPos = jQuery('.slick-active .slide-content').outerHeight() - 12;

            jQuery('.slick-dots').css("bottom", topPos);

        }, 500);
        jQuery(window).resize(function () {
            setTimeout(function () {
                var topPos = jQuery('.slick-active .slide-content').outerHeight() - 12;
                jQuery('.slick-dots').css("bottom", topPos);
            }, 500);
        });

        jQuery('.slider-block').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            jQuery('.slick-dots').hide();
        });
        jQuery('.slider-block').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            var topPos = jQuery('.slick-active .slide-content').outerHeight() - 12;
            jQuery('.slick-dots').css("bottom", topPos);
            jQuery('.slick-dots').show();
        });
    }
});
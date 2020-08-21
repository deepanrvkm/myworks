jQuery(function () {

    /*===============================================
    		menu 
    ==================================================*/
    jQuery('.menuicon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".main-menu").slideToggle();
    });

    /*===============================================
        Language switcher
    ==================================================*/
    if (jQuery.fn.polyglotLanguageSwitcher) {
        jQuery('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
        });
    }

    /*===============================================
    	Slick slider
    ==================================================*/
    if (jQuery.fn.slick) {
        jQuery(".slider-block").slick({
            dots: true,
            arrows: false,
            autoplay: false,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        jQuery(".product-slider").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            draggable: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
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
        jQuery(".large-slider").slick({
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.thumb-slider'
        });
        jQuery(".thumb-slider").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            draggable: true,
            centerMode: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.large-slider',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
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
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //imageBg
        imageBg();

    });





});


/*===============================================
	imageBg
==================================================*/
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image,.quick-link-image, .grid-items, .news-image, .information-image").imgLiquid({
            fill: true
        });
    }
}
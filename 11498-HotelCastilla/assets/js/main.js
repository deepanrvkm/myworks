jQuery(function () {

    /*===============================================
        Foundation
    ==================================================*/
    jQuery(document).foundation();
    
    /*===============================================
     Submenu
    ==================================================*/     	
         jQuery(".canvas-menu .submenu").click(function () {
             jQuery(this).children("ul").slideToggle();
         });


    /*===============================================
        Slick slider
    ==================================================*/
    if (jQuery.fn.slick) {
        jQuery(".banner-block").slick({
            fade: true,
            speed: 2000,
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        jQuery(".block-slider").slick({
            fade: true,
            speed: 2000,
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        jQuery(".popup-slider").slick({
            dots: false,
            arrows: true,
            autoplay: false,
            infinite: true,
            speed: 600,
            fade: true,
            cssEase: 'linear'
        });

        jQuery('.offer-list ul').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 800,
            prevArrow: jQuery('.arrows.prev'),
            nextArrow: jQuery('.arrows.next'),
            responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
        });

    }

    
     jQuery(document).on( 'open.zf.reveal', function () { 
		if (jQuery.fn.slick) {
			jQuery(".popup-slider").slick('resize');
			jQuery(".popup-slider").slick('refresh');
		}
     } );

    /*===============================================
        imageBg
    ==================================================*/
    imageBg();


    /*===============================================
        equalHeight
    ==================================================*/
    equalHeight();


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
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //imageBg
        imageBg();

        //equalHeight
        equalHeight();
        
        
    });


    /*===============================================
        SumoSelect
    ==================================================*/
    if (jQuery.fn.SumoSelect) {

        //Single Select
        jQuery('.simple-select').SumoSelect();

    }


    /*===============================================
        Datepicker
    ==================================================*/
    if (jQuery.fn.fdatepicker) {
        jQuery('.dpicker').fdatepicker({
            format: 'dd-mm-yyyy',
            language: 'es',
            leftArrow: '<<',
            rightArrow: '>>',
            disableDblClickSelection: true,
        });
    }


});


/*===============================================
    imageBg
==================================================*/
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image, .table-img, .card-image, .slide-single, .image-box, .slider-image, .category-thumb").imgLiquid({
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

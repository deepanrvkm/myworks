jQuery(function () {

    /*===============================================
		menu 
	==================================================*/
    jQuery('#nav-icon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".menu").slideToggle();
        jQuery(".has-sub").siblings(".submenu").slideUp();
        jQuery(".has-sub").removeClass("active");
        jQuery(".has-sub").parent("li").removeClass("active");
    });
    jQuery(".has-sub").click(function () {
        jQuery(this).siblings(".submenu").slideToggle();
        jQuery(this).toggleClass("active");
        jQuery(this).parent("li").toggleClass("active");
    });


    /*===============================================
	    side menu
	==================================================*/

    jQuery(".toggling  .widget-title").click(function () {
        jQuery(this).siblings(".widget-content").slideToggle();
        jQuery(this).toggleClass("active");
    });

    /*===============================================
	    range slider
	==================================================*/
    if (jQuery.fn.slider) {
        jQuery("#slider-range").slider({
            range: true,
            min: 1.00,
            max: 50.00,
            step: 0.01,
            values: [1.00, 50.00],
            slide: function (event, ui) {
                jQuery("#amount1").val("£" + ui.values[0]);
                jQuery("#amount2").val("£" + ui.values[1]);
            }
        });
        jQuery("#amount1").val("£" + jQuery("#slider-range").slider("values", 0));
        jQuery("#amount2").val("£" + jQuery("#slider-range").slider("values", 1));

    }



    //Slider
    if (jQuery.fn.slick) {
        jQuery('.banner-outer').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            dots: false,
            draggable: true
        });

        jQuery('.product-carousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            dots: false,
            draggable: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                    }
				},
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
				},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
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

        jQuery('.product-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            autoplay: true,
            arrows: true,
            dots: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            dotsClass: 'custom_paging',
            draggable: true,
            customPaging: function (slider, i) {
                return '<span class="current-no">' + (i + 1) + '</span>' + '<span>' + slider.slideCount + '</span>';
            }
        });

    }

    //Image Bg
    imageBg();

    //Image equalHeight
    equalHeight();

    //debouncedresize
    jQuery(window).bind("debouncedresize", function () {

        //Image Bg
        imageBg();

        //Image equalHeight
        equalHeight();

    });

    jQuery(".scroll-top a").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".header").offset().top
        }, 1000);
    });



    //Selectbox
    if (jQuery.fn.selectbox) {
        jQuery("#select").selectbox();
    }


    //Content toggle
    jQuery(".toggle-title h4").click(function () {
        jQuery(this).parent().next(".product-inner-con").slideToggle();
        jQuery(this).parent().toggleClass("toggled");
    });


    //Quantity counter
    var quantitiy = 0;
    jQuery('.plus-btn').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt(jQuery('#quantity').val());

        // If is not undefined
        jQuery('#quantity').val(quantity + 1);
        // Increment

    });

    jQuery('.minus-btn').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt(jQuery('#quantity').val());
        // If is not undefined
        // Increment
        if (quantity > 0) {
            jQuery('#quantity').val(quantity - 1);
        }
    });
    
    
    if (navigator.userAgent.indexOf('Mac') > 0) jQuery('body').addClass('mac-os');
    if (navigator.userAgent.indexOf('Safari') > 0) jQuery('body').addClass('safari');


});


//Image Bg
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image").imgLiquid({
            fill: true
        });
    }
}

//Image equalHeight
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

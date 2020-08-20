jQuery(function () {

    /*===============================================
    	Foundation
    ==================================================*/
    jQuery(document).foundation();


    /*===============================================
    	Slick slider
    ==================================================*/
    if (jQuery.fn.slick) {
        jQuery(".banner-slider").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        jQuery(".logo-slider").slick({
            dots: false,
            arrows: true,
            autoplay: false,
            infinite: true,
            draggable: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }


    /*===============================================
    	bgImage
    ==================================================*/
    imageBg();

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
       Shopping Basket
    ==================================================*/
    jQuery(".cart-box").click(function () {
        jQuery(".shopping-basket").slideToggle();
    });


    /*===============================================
                Selectbox 
        ==================================================*/
    if (jQuery.fn.SumoSelect) {
        jQuery(".selectbox").SumoSelect();
    }


    /*===============================================
       Qty
    ==================================================*/
    var incrementPlus, incrementMinus;
    var buttonPlus = $(".qty-plus");
    var buttonMinus = $(".qty-minus");
    var incrementPlus = buttonPlus.click(function () {
        var $n = $(this)
            .parent(".button-container")
            .parent(".qty-box")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });
    var incrementMinus = buttonMinus.click(function () {
        var $n = $(this)
            .parent(".button-container")
            .parent(".qty-box")
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 1) {
            $n.val(amount - 1);
        }
    });

    /*===============================================
        More less
    ==================================================*/
    jQuery('.filter-block ul').each(function () {
        var $ul = $(this),
            $lis = $ul.find('li:gt(8)'),
            isExpanded = $ul.hasClass('expanded');
        $lis[isExpanded ? 'show' : 'hide']();

        if ($lis.length > 0) {
            $ul
                .append(jQuery('<li class="expand"><span>' + (isExpanded ? 'Ver menos' : 'Ver más') + '</span></li>')
                    .click(function (event) {
                        var isExpanded = $ul.hasClass('expanded');
                        event.preventDefault();
                        jQuery(this).text(isExpanded ? 'Ver más' : 'Ver menos');
                        $ul.toggleClass('expanded');
                        $lis.toggle();
                    }));
        }
    });

    /*===============================================
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //bgImage
        imageBg();

    });


});


/*===============================================
	bgImage
==================================================*/
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image, .sm-slide, .image-holder, .product-image").imgLiquid({
            fill: true
        });
    }
}
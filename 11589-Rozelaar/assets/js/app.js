(function ($) {
    var $event = $.event,
        $special,
        resizeTimeout;

    $special = $event.special.debouncedresize = {
        setup: function () {
            $(this).on("resize", $special.handler);
        },
        teardown: function () {
            $(this).off("resize", $special.handler);
        },
        handler: function (event, execAsap) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function () {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply(context, args);
                };

            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, $special.threshold);
        },
        threshold: 150
    };
})(jQuery);

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
    });


    /*===============================================
        menu overlay
    ==================================================*/
	if(jQuery('.mobile-menu > ul > li:has(> ul)')) {
		jQuery('.mobile-menu > ul > li.sub-menu').append('<span class="submenu-trigger"><span></span><span></span></span>');
	}
    jQuery(".sub-menu").hover(
        function () {
            jQuery(".overlay").stop().fadeIn();
        },
        function () {
            jQuery(".overlay").stop().fadeOut();
        }
    );
    jQuery(".overlay").click(function () {
        jQuery(this).fadeOut();
    });
	jQuery('body').on('click', '.submenu-trigger', function (e) {
		jQuery(this).toggleClass('open-sub');
        jQuery(this).parent('li').children("ul").slideToggle();
        return false;
    });

    /*===============================================
        search
    ==================================================*/
    /*jQuery(".search-icon a").click(function () {
        jQuery(".search-box").toggleClass("active");
    });*/

    jQuery('.search-btn').on('click keydown', function (e) {
        if (e.type === 'click' || e.type === 'keydown' && (e.which === 13 || e.which === 32)) {
            if (jQuery('.search-box').hasClass('active')) {
                jQuery('.search-form').submit();
            } else {
                e.preventDefault();
                jQuery(".search-box").toggleClass("active");
                $('.search-box input').focus();
            }
        }
    });

    /*jQuery( ".header-top .search-btn" ).click(function(event) {
		if(jQuery(".search").val()== "") {
			event.preventDefault();
  			jQuery(".search-box").toggleClass("active");
  			jQuery(".temp-focus").toggle();
  		} else {
			jQuery('.search-form').submit();
		}
	});
    
    $('.temp-focus').on('focus', function(e){
        $(window).keyup(function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 9) {
               jQuery(".search-btn").focus();
            }
        });
    });*/


    /*===============================================
        sticky footer
    ==================================================*/
    stickyFooter();

    /*===============================================
       shift content
    ==================================================*/
    shiftContent();


    /*============================================
       slick
    ============================================ */
    if (jQuery.fn.slick) {
        jQuery(".content-slider").slick({
            arrows: true,
            infinite: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    autoplay: true
                }
            },]
        });
        jQuery(".list-slider").slick({
            arrows: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
        
    }




    /*===============================================
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //sticky footer
        stickyFooter();

        //shiftContent
        shiftContent();

    });


    /*===============================================
        SumoSelect
    ==================================================*/
    if (jQuery.fn.SumoSelect) {
        jQuery('.SelectBox').SumoSelect();
    }

    /*===============================================
        Datepicker
    ==================================================*/
    if (jQuery.fn.fdatepicker) {
        jQuery('.dpicker').fdatepicker({
            format: 'dd-mm-yyyy',
            /*language: 'es',*/
            leftArrow: '<<',
            rightArrow: '>>',
            disableDblClickSelection: true,
        });
    }

});


/*===============================================
    sticky footer
==================================================*/
function stickyFooter() {
    jQuery('.footer-push').css({
        'height': (jQuery(".footer").outerHeight()) + 'px'
    });
}



/*===============================================
    shift content
==================================================*/
function shiftContent() {
    if (jQuery(".display-mob").is(":visible")) {
        jQuery(".main-outercon").each(function (index) {
            jQuery('.header-top').insertAfter(".mobile-menu");
            jQuery('.search-icon').insertAfter(".search-box");
        });
    } else {
        jQuery(".main-outercon").each(function (index) {
            jQuery('.header-top').insertBefore(".main-menu");
            jQuery('.search-icon').insertAfter(".search-box");
        });
    }
}


/*===============================================
    Menufocus
==================================================*/

(function (window, document) {
    'use strict';
    var slice = [].slice;
    var removeClass = function (elem) {
        elem.classList.remove('focus-within');
    };
    var update = (function () {
        var running, last;
        var action = function () {
            var element = document.activeElement;
            running = false;
            if (last !== element) {
                last = element;
                slice.call(document.getElementsByClassName('focus-within')).forEach(removeClass);
                while (element && element.classList) {
                    element.classList.add('focus-within');

                    element = element.parentNode;
                }
            }
        };
        return function () {
            if (!running) {
                requestAnimationFrame(action);
                running = true;
            }
        };
    })();
    document.addEventListener('focus', update, true);
    document.addEventListener('blur', update, true);
    update();
})(window, document);
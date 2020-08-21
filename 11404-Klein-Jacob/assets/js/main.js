jQuery(function () {

    /*===============================================
		menu 
	==================================================*/
    jQuery('.menu-icon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".menu").slideToggle();
        jQuery(".has-sub").siblings(".mega-menu").slideUp();
        jQuery(".has-sub").removeClass("active");
        jQuery(".has-sub").parent("li").removeClass("active");
    });
    jQuery(".has-sub").click(function () {
        jQuery(this).siblings(".mega-menu").slideToggle();
        jQuery(this).toggleClass("active");
        jQuery(this).parent("li").toggleClass("active");
    });

    /*===============================================
        Header fix
    ==================================================*/

    jQuery(window).scroll(function () {
        scroll = jQuery(window).scrollTop();
        if (scroll >= 1) {
            jQuery('.main-outercon').addClass('fixed');
        } else {
            jQuery('.main-outercon').removeClass('fixed');
        }
    });


    /*===============================================
    Slick Slider
==================================================*/
    if (jQuery.fn.slick) {

        if (jQuery('.slider-container').length) {
            var slider1 = jQuery('.slider-container').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1000,
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                dotsClass: 'custom_paging',
                nextArrow: "<button  class='slick-next'></button>",
                customPaging: function (slider, i) {
                    return '<span>' + (i * slider.originalSettings.slidesToScroll + 1) + '</span>   ' + slider.slideCount;
                }
               

            });
            //Hide the Previous button.
            jQuery('.slider-container .slick-prev').hide();

            slider1.on('afterChange', function (event, slick, currentSlide) {
                console.log(currentSlide);
                //If we're on the first slide hide the Previous button and show the Next
                if (currentSlide === 0) {
                    jQuery('.slider-container .slick-prev').hide();
                    jQuery('.slider-container .slick-next').show();
                } else {
                    jQuery('.slider-container .slick-prev').show();
                }
                //If we're on the last slide hide the Next button.
                if (currentSlide + 1 === slick.slideCount) {
                    jQuery('.slider-container .slick-next').hide();
                    jQuery('.slider-container .slick-prev').show();
                } else {
                    jQuery('.slider-container .slick-next').show();
                }
            });
        }

        if (jQuery('.slider-container-block').length) {
            var slider2 = jQuery('.slider-container-block').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1000,
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                dotsClass: 'custom_paging',
                nextArrow: "<button  class='slick-next'></button>",
                customPaging: function (slider, i) {
                    return '<span>' + (i * slider.originalSettings.slidesToScroll + 1) + '</span>   ' + slider.slideCount;
                }

            });
            //Hide the Previous button.
            jQuery('.slider-container-block .slick-prev').hide();

            slider2.on('afterChange', function (event, slick, currentSlide) {
                console.log(currentSlide);
                //If we're on the first slide hide the Previous button and show the Next
                if (currentSlide === 0) {
                    jQuery('.slider-container-block .slick-prev').hide();
                    jQuery('.slider-container-block .slick-next').show();
                } else {
                    jQuery('.slider-container-block .slick-prev').show();
                }
                //If we're on the last slide hide the Next button.
                if (currentSlide + 1 === slick.slideCount) {
                    jQuery('.slider-container-block .slick-next').hide();
                    jQuery('.slider-container-block .slick-prev').show();
                } else {
                    jQuery('.slider-container-block .slick-next').show();
                }
            });
        }





        jQuery('.slider-right').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            draggable: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1
                    }
            }
          ]
        });



    }

    
    /*============================================
    Scroll Down
    ============================================ */
    jQuery(".scroll-down").click(function(e) {
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: jQuery(".slider-block").offset().top
        }, 1000);
    });
    
	/*============================================
	   matchheight
	============================================ */
	if (jQuery.fn.matchHeight) {
		jQuery('.eq-height').matchHeight({
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		});
	}
    /*===============================================
        ImgLiquid
    ==================================================*/

    if (jQuery.fn.imgLiquid) {
        jQuery(".image-div,.split-img").imgLiquid();


        jQuery(window).bind("debouncedresize", function () {
            jQuery(".image-div,.split-img").imgLiquid();
        });
    }






    //Google Map
    if (jQuery("#map").length) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
    }





});


//Google map
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(49.4788516, 10.965572), //Dierenkliniek Hoofdstraat

        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#d9d9d9"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#a3a3a3"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#eaeaea"
            }, {
                "lightness": 17
            }, {
                "weight": 2.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.4788516, 10.965572),
        map: map,
        icon: 'images/marker.png',
        title: 'Snazzy!'
    });
}
jQuery(function () {

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
            more content 
    ==================================================*/
    jQuery('.moreless-button').click(function () {
        jQuery(this).addClass("read-more");
        jQuery('.moretext').slideToggle();
        if ($('.moreless-button').text() == "Read more") {
            jQuery(this).text("Read less")
        } else {
            jQuery(this).text("Read more")
        }
    });
    /*===============================================
            Selectbox 
    ==================================================*/

    if (jQuery.fn.SumoSelect) {
        jQuery(".selectbox").SumoSelect();
    }

    /*===============================================
            menu 
    ==================================================*/
    jQuery('.menuicon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".main-menu").slideToggle();
    });

    /*===============================================
        imageBg
    ==================================================*/
    imageBg();

    /*===============================================
	   Slick slider
    ==================================================*/
    if (jQuery.fn.slick) {
        jQuery(".banner").slick({
            dots: true,
            arrows: false,
            autoplay: true,
            speed: 800,
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '#slick_nav'
        });
    }
    jQuery('.pause-btn').on('click', function (e) {
        e.preventDefault();
        jQuery('.banner').slick('slickPause').slick('slickSetOption', 'autoplay', false);
    });

    jQuery('.play-btn').on('click', function (e) {
        e.preventDefault();
        jQuery('.banner').slick('slickPlay').slick('slickSetOption', 'autoplay', true);
    });
    jQuery('.banner').slick('slickPlay');

    /*===============================================
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //imageBg
        imageBg();

    });

    //Google Map
    if (jQuery("#map").length) {
        init();
    }


});

/*===============================================
	imageBg
==================================================*/
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".bg-image, li.large-image-blk .img-blok, li.small-image-blk .img-blok, .image-holder").imgLiquid({
            fill: true
        });
    }
}


/*===============================================
    Google-map
==================================================*/
if (jQuery('#map-canvas').length) {

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 10,
        center: new google.maps.LatLng(52.200141, 5.184127),
        disableDefaultUI: true,
        draggable: true,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                        },
                    {
                        "lightness": 17
                        }
                    ]
                },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                        },
                    {
                        "lightness": 20
                        }
                    ]
                },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                        },
                    {
                        "lightness": 17
                        }
                    ]
                },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                        },
                    {
                        "lightness": 29
                        },
                    {
                        "weight": 0.2
                        }
                    ]
                },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                        },
                    {
                        "lightness": 18
                        }
                    ]
                },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                        },
                    {
                        "lightness": 16
                        }
                    ]
                },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                        },
                    {
                        "lightness": 21
                        }
                    ]
                },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                        },
                    {
                        "lightness": 21
                        }
                    ]
                },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                        },
                    {
                        "color": "#ffffff"
                        },
                    {
                        "lightness": 16
                        }
                    ]
                },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                        },
                    {
                        "color": "#333333"
                        },
                    {
                        "lightness": 40
                        }
                    ]
                },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                        }
                    ]
                },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                        },
                    {
                        "lightness": 19
                        }
                    ]
                },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                        },
                    {
                        "lightness": 20
                        }
                    ]
                },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                        },
                    {
                        "lightness": 17
                        },
                    {
                        "weight": 1.2
                        }
                    ]
                }
            ]
    });

    var customMarker = 'assets/images/marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(52.161752, 5.396818),
        icon: customMarker,
        map: map,
        title: 'Alpha Audio & Light B.V.'
    })

}
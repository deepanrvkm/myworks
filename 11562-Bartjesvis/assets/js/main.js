jQuery(function() {
    
/*===============================================
   mean menu
==================================================*/
	if (jQuery.fn.meanmenu) {
		jQuery('.menu nav').meanmenu({
			meanMenuContainer: '.menu'
		});
	}
	
/*===============================================
	Google Map
==================================================*/
	if(jQuery("#map").length){
		init();
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
    jQuery(window).bind("debouncedresize", function() {
				
		//imageBg
        imageBg();
        
        //equalHeight
        equalHeight(); 
		
	});    
    
/*============================================
   slick
============================================ */ 
	if (jQuery.fn.slick) {
		jQuery(".banner-container").slick({
			dots: true,
            arrows: false,
			autoplay: true,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1
		}); 
        jQuery(".grid-slider").slick({
			dots: false,
            arrows: true,
			autoplay: false,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1,
            adaptiveHeight: true
		}); 
	}
	
});


/*===============================================
	imageBg
==================================================*/ 
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image, .grid-image, .insta-gallery li, .image-col, .product-image").imgLiquid({
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
    map style
==================================================*/ 
function init() {
        var isDraggable = $(document).width() > 767 ? true : false; 
        var mapOptions = {
            zoom: 17,
            panControl: false,
          	zoomControl:false,
        	streetViewControl:false,
        	mapTypeControl:false,
            draggable: isDraggable,
            scrollwheel: false,
            center: new google.maps.LatLng(52.3473751,6.6735329), 
            styles: [
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                }
            ]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            icon: 'assets/images/marker.png',
            position: new google.maps.LatLng(52.3473751,6.6735329),
            map: map,
            title: 'Bartjes vis'
        });
    }
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
			slidesToScroll: 1,
            nextArrow: '.next-aw',
			prevArrow: '.prev-aw'
		});
        jQuery(".new-offers").slick({
			dots: true,
			arrows: true,
			autoplay: false,
			infinite: true,
			draggable: true,
			slidesToShow: 4,
			slidesToScroll: 2,
            nextArrow: '.next-arrow',
			prevArrow: '.prev-arrow',
            appendDots: jQuery(".slide-dot"),            
            responsive: [
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
		});
        jQuery(".similar-properties").slick({
			dots: false,
			arrows: true,
			autoplay: false,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1,
            mobileFirst: true,
            responsive: [                
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
                    breakpoint: 992,
                    settings: 'unslick'
                }
            ]
		});
        jQuery(window).on('resize', function() {
            jQuery('.similar-properties').slick('resize');
        });
    }
    
    
/*===============================================
    Language switcher
==================================================*/
if (jQuery.fn.polyglotLanguageSwitcher) {
    jQuery('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
        effect: 'fade',
        testMode: true,
    });
    jQuery('#mpolyglotLanguageSwitcher').polyglotLanguageSwitcher({
        effect: 'fade',
        testMode: true,
    });
}
    
/*===============================================
	mobilemenu
==================================================*/   
    jQuery(".menu-trigger").click(function(){
        jQuery(this).siblings("ul").slideToggle();
    });
    
/*===============================================
	imageBg
==================================================*/ 
    imageBg();        
	
/*===============================================
    Shiftcontent
==================================================*/  
   shiftcontent();
  
   

	
/*===============================================
    debouncedresize
==================================================*/ 
    jQuery(window).bind("debouncedresize", function() {
				
		//imageBg
        imageBg();
         shiftcontent();
		
	});
 
/*===============================================
    SumoSelect
==================================================*/    
    if (jQuery.fn.SumoSelect) {

        //Single Select
        jQuery('.simple-select').SumoSelect();
        
        //Multi Select
        jQuery('.multi-select').SumoSelect();
        
        //Sumo Search
        jQuery('.search-box').SumoSelect({ 
            csvDispCount: 3, 
            search: true
        });
    }	
	
	//Google map
	if (jQuery('#map-canvas').length) {

		var map = new google.maps.Map(document.getElementById('map-canvas'), {
			zoom: 9,
			center: new google.maps.LatLng(38.2284776,-0.2671287),
			disableDefaultUI: true,
			draggable: true,
			zoomControl: false,
			scrollwheel: false,
			disableDoubleClickZoom: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		});

	}

	    
}); 
 

/*===============================================
	imageBg
==================================================*/ 
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".image-holder, .banner-image").imgLiquid({
            fill: true
        });
    }
}



 //Shiftcontent
function shiftcontent() {
    if (jQuery(".mob-show").is(":visible")) {

        jQuery(".content-container .detail-outer").each(function (index) {
            jQuery('.detail-right-div').insertAfter(".location-block");
        });    

    }else{
         jQuery(".content-container .location-block-outer").each(function (index) {
            jQuery('.detail-right-div').insertAfter(".detail-outer .detail-left-div");
        });    

    }
}

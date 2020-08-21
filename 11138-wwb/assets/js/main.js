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
        img liquid
    ==================================================*/
	
	if (jQuery.fn.imgLiquid) {
	    jQuery(".banner-image,.news-left").imgLiquid({fill:true});
	    jQuery(window).bind("debouncedresize", function() {
	         jQuery(".banner-image,.news-left").imgLiquid({fill:true});
	    });
	}
	
/*============================================
   slick
============================================ */ 
	if (jQuery.fn.slick) {
		jQuery(".banner-container").slick({
			infinite: true,
			arrows: true,
			speed: 300,
			autoPlay:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: '<div class="next"></div>',
			prevArrow: '<div class="prev"></div>'
		}); 
	}
	
	if (jQuery.fn.select2) { 
		jQuery(".custom-select").select2({
			minimumResultsForSearch: -1
		}); 
	}

});


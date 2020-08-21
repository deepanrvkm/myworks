jQuery(function () {

    jQuery(".menu-icon").click(function () {
        jQuery(".main-outer").toggleClass("menu-open")
    });
    
  // animation*
    
     AOS.init({
        easing: 'ease-in-out-sine'
      });
    

    //Client Slider
    if (jQuery.fn.owlCarousel) {
        jQuery('.client-list ul.owl-carousel').owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            margin: 110,
            autoplay: true,
            slideSpeed: 800,
            paginationSpeed: 800,
            autoplaySpeed: 600,
            autoWidth: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 80,
                },
                600: {
                    items: 3,
                    margin: 100,
                },
                800: {
                    items: 5,
                    margin: 55,
                },
                1024: {
                    items: 5,
                    margin: 80,

                },
                1279: {
                    items: 5,
                },
            }
        });

        //Testimonial Slider
        $(".testimonial-slider ul.owl-carousel").owlCarousel({
            slideSpeed: 800,
            paginationSpeed: 800,
            dots: true,
            nav: false,
            items: 1,
            autoplay: true,
            autoplaySpeed: 600,
            loop:true,
        });
        
       //Portfolio Slider
        jQuery('.slider-outer ul.owl-carousel').owlCarousel({
            nav: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            loop: true,
            singleItem: true,
            autoplay: true,
            animateIn: 'slideInRight',
            animateOut: 'slideOutDown',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1430: {
                    items: 1
                }
            }
        });
          
        
        
    }


     /*===============================================
        ImgLiquid
    ==================================================*/

    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image,.awarenes-img").imgLiquid();

        if (jQuery(".mob-visible").is(":visible")) {	
		   jQuery(".pattern-outer .video-wrap").imgLiquid();
        }
        
        jQuery(window).bind("debouncedresize", function () {
            jQuery(".banner-image,.awarenes-img").imgLiquid();
            
            if (jQuery(".mob-visible").is(":visible")) {	
               jQuery(".pattern-outer .video-wrap").imgLiquid();
            }
        });
    }
    
    /*===============================================
        ScrollToFixed
    ==================================================*/		
    if (jQuery.fn.sticky) {
        jQuery(".sticky-menu").sticky({ topSpacing: 0 });
    }
    
    
    
   
    jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollup').fadeIn();
		} else {
			jQuery('.scrollup').fadeOut();
		}
	}); 
    jQuery('.scrollup').click(function(){
		jQuery("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

     //Add class for body
    // Get browser Browser Information
    jQuery.each(jQuery.browser, function(i) {
        jQuery('body').addClass(i);
        return false;
    });
    // Get OS Information
    var os = [
        'iphone',
        'ipad',
        'windows',
        'mac',
        'linux'
    ];
    var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
    if (match) {
        jQuery('body').addClass(match[0]);
    };
    
        
    

});

jQuery(function () {
    
/*===============================================
	Foundation
==================================================*/	 
    jQuery(document).foundation();    
	
	
/*===============================================
	Slick slider
==================================================*/
	if (jQuery.fn.slick) {
		jQuery('.team-slider-outer').slick({
          dots: false,
          infinite: true,
          speed: 200,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: jQuery('.prev'),
          nextArrow: jQuery('.next'),
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });


        jQuery('.banner-slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 1000
        });

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
    video
==================================================*/    
 var videos  = jQuery(".video");
	videos.on("click", function(){
		var elm = jQuery(this),
			conts   = elm.contents(),
			le      = conts.length,
			ifr     = null;
		for(var i = 0; i<le; i++){
		  if(conts[i].nodeType == 8) ifr = conts[i].textContent;
		}
		elm.addClass("player").html(ifr);
		elm.off("click");
	});  
    
    
    /*===============================================
        Sticky Header
    ==================================================*/   
    jQuery(window).scroll(function(){
        var sticky = jQuery('body'),               
        scroll = jQuery(window).scrollTop();
        if (scroll >= 1) {
            sticky.addClass('is-sticky');
        } else {
            sticky.removeClass('is-sticky');
        }
    });
    
    
	
/*===============================================
    debouncedresize
==================================================*/ 
    jQuery(window).bind("debouncedresize", function() {
				
		//imageBg
        imageBg();
        
        //equalHeight
        equalHeight(); 
        
		
	});

/*===============================================
    Scroll Top
==================================================*/ 
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() >= 500) {        
            jQuery('.scroll-top').fadeIn(400);    
        } else {
            jQuery('.scroll-top').fadeOut(400);   
        }
    });
    jQuery('.scroll-top').click(function() {      
        jQuery('body,html').animate({
            scrollTop : 0                      
        }, 1000);
    });
	
	
/*===============================================
    Scroll bar
==================================================*/
    if (jQuery(".menu-icon").is(":visible")) {} else {
         jQuery('.scroll-pane').jScrollPane();
     }
    
    
    
	    
}); 
 

/*===============================================
	imageBg
==================================================*/ 
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image,.gallery-item,.slider-image").imgLiquid({
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

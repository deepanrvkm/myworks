jQuery(function() {
    
    
   /*===============================================
    imgLiquid
==================================================*/   

    if (jQuery.fn.imgLiquid) {
        jQuery(".image-div").imgLiquid({
            fill: true
        });
    }  
    
      
 /*===============================================
    debouncedresize
==================================================*/
	
    jQuery(window).bind("debouncedresize", function() {
		// imgLiquid
        if (jQuery.fn.imgLiquid) {
            jQuery(".image-div").imgLiquid({
                fill: true
            });
        }
    });    
    
     /*===============================================
       scroll top
    ==================================================*/ 
        jQuery('.scroll-top').click(function(){
            jQuery("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    
        
    jQuery(".menu-icon").click(function(){
        jQuery(".main-menu").slideToggle();
    });
	 
});


jQuery(function() {
    
    /*===============================================
        shiftContent
    ==================================================*/ 
        shiftContent();
        
	/*===============================================
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {        
        //shiftContent
        shiftContent();
    }); 
    
    /*===============================================
       Menu
    ==================================================*/ 
    jQuery(".menu-icon").click(function(){
        jQuery(".main-menu").slideToggle();
    });
    
    /*===============================================
       scroll top
    ==================================================*/ 
    jQuery('.scroll-top').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});


/*===============================================
    shift content
==================================================*/
function shiftContent() {
    if (jQuery(".display-mob").is(":visible")) {
        jQuery("body").each(function (index) {
            jQuery('.main-menu').insertBefore(".header-left");
        });
    } else {
        jQuery("body").each(function (index) {            
            jQuery('.main-menu').insertAfter(".logo");
        });
    }
}


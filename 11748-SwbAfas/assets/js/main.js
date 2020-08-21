jQuery(function () {

    /*===============================================
    	bgImage
    ==================================================*/
    imageBg();

    /*===============================================
    	menu
    ==================================================*/
    jQuery(".menu-icon").click(function () {
        jQuery(".menu").slideToggle();
    });

    /*===============================================
        debouncedresize
    ==================================================*/
    jQuery(window).bind("debouncedresize", function () {

        //bgImage
        imageBg();

    });

});

/*===============================================
	bgImage
==================================================*/
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".grid-image, .list-image").imgLiquid({
            fill: true
        });
    }
}
jQuery(function() {
    
   /*===slider=====*/ 
   $('.slider').slick({
      dots: false,
      infinite: true,
      autoplay: false, 
      speed: 300,
      slidesToShow: 1
   }); 
    
   /*===mobile offset=====*/ 
    var defaultAnchorOffset = 0;
    
    if (jQuery(".display-mob").is(":visible")) {
		jQuery(".container").each(function (index) {
			defaultAnchorOffset = jQuery(".grid-left").outerHeight();
		});

	} else {
		jQuery(".container").each(function (index) {
			defaultAnchorOffset = 0;
		});

	} 
   
   /*===scroll=====*/  
   $(".scroll").click(function(event) {
        event.preventDefault();          

        var anchor = $(this).attr('data-scroll');

        var anchorOffset = $('#'+anchor).attr('data-scroll-offset');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset; 

        $('html,body').animate({ 
            scrollTop: $('#'+anchor).offset().top - anchorOffset
        }, 500);        
    });
    
    
	 
});


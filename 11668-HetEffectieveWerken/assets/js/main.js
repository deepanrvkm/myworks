jQuery(function () {
				
	//foundation	 
	jQuery(document).foundation();
    
    //Image Bg
        imageBg();
    
	
    
    //Menu 
    var menuTrigger = ("<span class='trigger'></span>");  
    jQuery(".canvas-menu ul li.sub-menu").prepend(menuTrigger); 
    jQuery(".trigger").click(function(){
        jQuery(this).siblings("ul").slideToggle();
        jQuery(this).parent(".sub-menu").toggleClass("menuopen");        
    });
    
    
     //Slider 
    if (jQuery.fn.slick) {
            jQuery('.logo-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
            infinite: false,    
			autoplay: false,
			arrows: true,
			dots: false,
			responsive: [
                {
					breakpoint: 1024,
					settings: {
						slidesToShow: 3
					}
                },
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 2
					}
                }
            ]
		});
		jQuery('.common-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
            infinite: true,    
			autoplay: false,
			speed: 2000,
			arrows: false,
			dots: true,
			responsive: [
                {
					breakpoint: 1024,
					settings: {
						slidesToShow: 3
					}
                }
            ]
		});
        
         jQuery('.logos-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
            infinite: true,    
			autoplay: false,
			speed: 2000,
			arrows: false,
			dots: true,
			
		});
        
        jQuery('.testimonial-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
            infinite: true,    
			autoplay: false,
			speed: 2000,
			arrows: false,
			dots: true,
			
		});
        
       
    }

    
	//debouncedresize
	jQuery(window).bind("debouncedresize", function () {		
		   
	    //Image Bg
        imageBg();
        
	});
    
     /*===============================================
    video
    ==================================================*/      
    jQuery(document).on('click', '.js-videoPoster', function (e) {
        e.preventDefault();
        var poster = $(this);
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });
    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        var src = iframe.data('src');
        wrapper.addClass('videoWrapperActive');
        iframe.attr('src', src);
    }
    
	//sticky
        
        if (jQuery(".inner-content-block .main-block").length) {
        var stickyTopSection = jQuery('.inner-content-block .main-block').offset().top;

        var stickyTop = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyTopSection) {
               jQuery(".banner.registration-banner .text-div, .registration-banner").addClass('fixed');
           } else {
               jQuery(".banner.registration-banner .text-div, .registration-banner").removeClass('fixed');
           }
        };

           stickyTop();

           jQuery(window).scroll(function() {
               stickyTop();
            });
        }
      

});

jQuery(window).on("load", function (e) {
	jQuery('.videoIframe').removeClass('video_loading');
});

//Image Bg
function imageBg() {
	if (jQuery.fn.imgLiquid) {
		jQuery(".bgImage").imgLiquid({
			fill: true
		});
	}
}

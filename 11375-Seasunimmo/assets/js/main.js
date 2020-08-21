jQuery(function () {
    
/*===============================================
	Foundation
==================================================*/	 
    jQuery(document).foundation();
	
	
/*===============================================
	Language switcher
==================================================*/
	if (jQuery.fn.polyglotLanguageSwitcher) {
		jQuery('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
			effect: 'fade',
			testMode: true,
		});
	}
	
/*============================================
Selectbox
============================================ */    

if (jQuery.fn.selectbox) {
	jQuery(".select").selectbox();
}
/*===============================================
	Shiftcontent
==================================================*/ 
	shiftcontent();  
	
	
	
/*===============================================
    imgLiquid
==================================================*/ 
    if (jQuery.fn.imgLiquid) {
		jQuery(".banner-image,.image-blk,.quick-image").imgLiquid({fill:true});
	}
	
	
	
/*===============================================
    debouncedresize
==================================================*/ 
    jQuery(window).bind("debouncedresize", function() {
		
		if (jQuery.fn.imgLiquid) {
			jQuery(".banner-image,.image-blk,.quick-image").imgLiquid({fill:true});
		}
		
		shiftcontent();  
		
		if (jQuery(".tab-only").is(":visible")) {
			if (jQuery.fn.slick) {
				jQuery(".grid-slider").slick({
					dots: false,
					arrows: true,
					autoplay: false,
					infinite: true,
					draggable: true,
					slidesToShow: 1,
					slidesToScroll: 1
				});
			}
		}else {
			if (jQuery.fn.slick) {
				jQuery('.grid-slider').slick('unslick');
			}
		}
		
		
		if (jQuery(".tab-only").is(":visible")) {
			if (jQuery.fn.slick) {
				jQuery('.grid-outer').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay:false,
					autoplaySpeed:5000,
					arrows: true,
					dots:true,
					draggable: true,
					responsive: [              
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2
							}
					},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								centerMode: true,
								centerPadding: '0'
							}
					}
				  ]
				});
			}
		}
		else {
				if (jQuery.fn.slick) {
					jQuery('.grid-outer').slick('unslick');
				}
			}
		
	});
	

	
/*===============================================
	Tab Submenu
==================================================*/
	jQuery(".submenu > a").click(function () {
		jQuery(".submenu ul").slideToggle();
	});
	
	
/*===============================================
	MatchHeight
==================================================*/   
	if (jQuery.fn.matchHeight) {
		jQuery('.eq-height').matchHeight({
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		});
		
		jQuery('.eqs-height').matchHeight({
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		});
	} 
	
/*===============================================
	Favorite
==================================================*/	
	jQuery(".favorite-btn a").click(function (e) {
		e.preventDefault();
		jQuery(this).toggleClass("activated");
	});
	
	
/*===============================================
	Slick slider
==================================================*/
	if (jQuery.fn.slick) {
		jQuery(".banner-block").slick({
			dots: false,
			arrows: true,
			autoplay: true,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: '<div class="next"></div>',
			prevArrow: '<div class="prev"></div>'
		});
		
		jQuery(".property-slider").slick({
			dots: true,
			arrows: true,
			autoplay: false,
			infinite: true,
			draggable: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [	
				{
					breakpoint: 1199,
					settings: {
					slidesToShow: 4,
					}
				},
				{
					breakpoint: 1024,
					settings: {
					slidesToShow: 4,
					}
				},
				{
					breakpoint: 769,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					}
				},
				{
					breakpoint: 481,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					}
				}
			]
		});
	}
	
	
	if (jQuery(".tab-only").is(":visible")) {
		if (jQuery.fn.slick) {
			jQuery(".grid-slider").slick({
				dots: false,
				arrows: true,
				autoplay: false,
				infinite: true,
				draggable: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	}else {
		if (jQuery.fn.slick) {
			jQuery('.grid-slider').slick('unslick');
		}
	} 
	
		if (jQuery(".tab-only").is(":visible")) {
			if (jQuery.fn.slick) {
				jQuery('.grid-outer').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay:false,
					autoplaySpeed:5000,
					arrows: true,
					dots:true,
					draggable: true,
					responsive: [              
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2
							}
					},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								centerMode: true,
								centerPadding: '0'
							}
					}
				  ]
				});
			}
		}
		else {
				if (jQuery.fn.slick) {
					jQuery('.grid-outer').slick('unslick');
				}
			}
    
    
}); 
 
//shiftcontent
function shiftcontent() {
    if (jQuery(".menu-icon").is(":visible")) {		
        jQuery(".main-outercon").each(function (index) {
            jQuery('.menu').appendTo(".right-off-canvas");
            jQuery('.header-top-left').appendTo(".right-off-canvas");
            jQuery('.social-apps').appendTo(".right-off-canvas");
        });                
    } else {
        jQuery(".main-outercon").each(function (index) {
            jQuery('.menu').insertBefore("#polyglotLanguageSwitcher");
            jQuery('.header-top-left').insertBefore(".header-top-right");
            jQuery('.social-apps').insertBefore(".wheather");
        });                      
    } 
	if (jQuery(".mobile-only").is(":visible")) {		
        jQuery(".main-outercon").each(function (index) {
            jQuery('.header-top-left').appendTo(".right-off-canvas");
            jQuery('.social-apps').appendTo(".right-off-canvas");
        });                
    } else {
        jQuery(".main-outercon").each(function (index) {
            jQuery('.header-top-left').insertBefore(".header-top-right");
            jQuery('.social-apps').insertBefore(".wheather");
        });                      
    } 
}

jQuery(function() {
	
    
/*===============================================
    slider  
==================================================*/ 
    jQuery('.slider-outer .carousel').carousel({
        hAlign: 'center',
        vAlign: 'center',
        carouselWidth:1380, 
        carouselHeight:500, 
        directionNav: false,
        buttonNav: 'bullets', 
        slidesPerScroll: 3,
        top: 0,
        hMargin: 0.4,
        frontWidth: 820,
        frontHeight:480, 
        description: true,
        directionNav:true,
        autoplay:false, 
        shadow:false, 
        autoplayInterval:0, 
        descriptionContainer: '.description',
        after: function(carousel){
          //alert(carousel.carouselWidth);
        }

    });
    
    jQuery(".carousel .slideItem").click(function () {
        if(jQuery(this).hasClass("current-one")){
            
        }else{
            jQuery(".carousel .slideItem.current-one").removeClass("current-one");
            jQuery(this).addClass("current-one");
            if(jQuery(this).siblings().hasClass("current-one")){
                
            }
        }
    });  
    
    
    jQuery(".carousel .buttonNav .bullet").click(function () {        
        var inder = jQuery(this).index();
        jQuery(this).parent().siblings(".slides").children(".slideItem");
        
        jQuery(".carousel .slideItem").each(function() {
            if (jQuery(this).index() == inder) {
                jQuery(".carousel .slideItem.current-one").removeClass("current-one");
                jQuery(this).addClass("current-one");    
            }
        });
    }); 
    
    
    
    
    $container = jQuery('.button-wrapper');
    jQuery('.nextButton').insertAfter('.buttonNav');
    jQuery('.prevButton').appendTo($container);
    jQuery('.buttonNav').appendTo($container);
    jQuery('.nextButton').appendTo($container);
	

     jQuery(".footer-list h5").click(function () {
         if (jQuery(".mobile-visible").is(":visible")) {
             jQuery(this).next("ul").slideToggle("slow");
             jQuery(this).toggleClass("open");
         }        

    });   
    
    
    
});





/*===============================================
    slider  responsive
==================================================*/ 
 var windowSize = $(window).width(); 
    if (windowSize <= 1400 && windowSize >= 1200){		 
            jQuery('.slider-outer .carousel').carousel({  
            carouselWidth:1200, 
            carouselHeight:600,  
            slidesPerScroll: 3, 
            frontWidth:600,
            frontHeight:500,  
              }); 
    } 
	 
 else  if (windowSize <= 1199 && windowSize >= 1024){	
        jQuery('.slider-outer .carousel').carousel({  
        carouselWidth:1024, 
        carouselHeight:450,   
        slidesPerScroll: 3, 
        frontWidth:550,
        frontHeight:500,  
          });
 }
 else  if (windowSize <= 1023 && windowSize >= 768){
        jQuery('.slider-outer .carousel').carousel({  
        carouselWidth:768, 
        carouselHeight:450,   
        slidesPerScroll: 1, 
        frontWidth:700,
        frontHeight:500,  
          });
 }

 else  if  (windowSize <= 767 && windowSize >= 480){
        jQuery('.slider-outer .carousel').carousel({  
        carouselWidth:480, 
        carouselHeight: 570,   
        slidesPerScroll: 1, 
        frontWidth:400,
        frontHeight:500,  
          });
 }

 else  if  (windowSize <= 479 && windowSize >= 320){
        jQuery('.slider-outer .carousel').carousel({  
        carouselWidth:290, 
        carouselHeight: 500,   
        slidesPerScroll: 1, 
        frontWidth:280,
        frontHeight:500,  
          });
 }
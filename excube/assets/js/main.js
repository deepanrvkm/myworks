jQuery(function() {
    
   /*===slider=====*/ 
   $('.slider').slick({
      dots: false,
      infinite: true,
      autoplay: true, 
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
        }, 1000);        
    });
    
    
    //Google map
	if (jQuery('#map-canvas').length) {
      let map;
      map = new google.maps.Map(document.getElementById("map-canvas"), {
            center: { lat: 25.116676751753822, lng: 55.39001311300566 }, 
            zoom: 15,
            disableDefaultUI: true,
            draggable: true,
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,        
        });
        var customMarker = 'assets/images/marker.png';
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.11646880833079, 55.390344841991336), 
            icon: customMarker,
            map: map,
            title: 'ExCube Management Services'
        });          
	}
    
    
	 
});


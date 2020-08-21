jQuery(function () {
    
/*===============================================
	Foundation
==================================================*/	 
    jQuery(document).foundation();    
	
	
/*===============================================
        Sticky Header
    ==================================================*/
    jQuery(window).scroll(function () {
        var sticky = jQuery('body'),
            scroll = jQuery(window).scrollTop();
        if (scroll >= 1) {
            sticky.addClass('is-sticky');
        } else {
            sticky.removeClass('is-sticky');
        }
    });
    
     
	
	
/*===============================================
    sticky footer
==================================================*/
    stickyFooter();
    
  
/*===============================================
    Menu spacebar trigger
==================================================*/
	
	jQuery(".menuicon").keypress(function(e) {
		if (e.keyCode == 0 || e.keyCode == 32) {
			// jQuery('#element').foundation('toggle', e);
			// var popup = new Foundation.Reveal($('#popup-modal'));
		   
			// var $menu = new Foundation.OffCanvas(jQuery('#offCanvasTop'));
			// $menu.toggle();
		   
			jQuery(this).trigger("click");
			e.preventDefault();
			
			// alert('test');
		}
	});
    

/*===============================================
    Fontsize changer
==================================================*/
    jQuery(".size-changer span").click(function(){
      jQuery(".size-changer span").removeClass("active");
      jQuery(this).addClass("active");
    });
    
   if (jQuery.fn.jfontsize) { 
    
    jQuery('.size-change, h1, h2, h3, h4, h5, h6, p, .banner-text p, .btn, .mid-block ul li, .list-top').jfontsize({
        btnMinusClasseId: "#jfontsize-minus",
		btnDefaultClasseId: "#jfontsize-default",
		btnPlusClasseId: "#jfontsize-plus",
		btnPlusPlusClasseId: "#jfontsize-plus-plus",
		btnMinusMaxHits: 1,
		btnPlusMaxHits: 1,
		btnPlusPlusMaxHits: 2,
		sizeChange: 4
      });
   }
    
/*===============================================
    debouncedresize
==================================================*/ 
    jQuery(window).bind("debouncedresize", function() {
				
		        
        //sticky footer
        stickyFooter();
		
	});
    
    /*===============================================
        SumoSelect
    ==================================================*/
    if (jQuery.fn.SumoSelect) {
        jQuery('.SelectBox').SumoSelect();
    }
    
  /*===============================================
        fdatepicker
    ==================================================*/ 
    
    if (jQuery.fn.fdatepicker) { 
        $('#dp1,#dp2').fdatepicker({
            initialDate: 'dd/mm/yyyy',
            format: 'dd/mm/yyyy',
            disableDblClickSelection: true,
            leftArrow:'<<',
            rightArrow:'>>',
            closeIcon:'X',
            closeButton: true
        });
    }
	
        
/*===============================================
	datatable
==================================================*/
     if (jQuery.fn.DataTable) {
            jQuery('#sorting-div').DataTable( );
                
     }
/*===============================================
	Google Map
==================================================*/
	if(jQuery("#map").length){
		init();
	}
    
}); 
 


/*===============================================
	sticky footer
==================================================*/ 
function stickyFooter() {
    jQuery('.footer-push').css({
        'height': (jQuery(".footer").outerHeight()) + 'px'
    });
}


function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var isDraggable = $(document).width() > 767 ? true : false; 
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 13,
            panControl: false,
          	zoomControl:false,
        	streetViewControl:false,
        	mapTypeControl:false,
         
            draggable: isDraggable,
            scrollwheel: false,
            
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(52.0299035,5.0616126), // New York

           styles: [
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                }
            ]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);


        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            icon: 'assets/images/marker.png',
            position: new google.maps.LatLng(52.0299035,5.0616126),
            map: map,
            title: 'Avenida Estate!'
        });
    }

 
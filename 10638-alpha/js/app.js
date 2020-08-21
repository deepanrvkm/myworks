jQuery(function () {

	jQuery(document).foundation();

	jQuery(".menuicon").click(function () {
		jQuery(this).toggleClass("active");
		jQuery(".main-menu").slideToggle();
	});

	//slick slider
	if (jQuery.fn.slick) {
		jQuery(".banner-outer").slick({
			dots: true,
			autoplay: true,
			infinite: true,
			draggable: false,
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true
		});

		jQuery(".sub-banner").slick({
			dots: true,
			arrows: false,
			autoplay: false,
			infinite: true,
			draggable: false,
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		jQuery(".reference").slick({
			dots: true,
			arrows: false,
			autoplay: true,
			infinite: true,
			draggable: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		jQuery(".banner-slick").slick({
			dots: false,
			autoplay: false,
			fade: true,
			infinite: false,
			draggable: false,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		jQuery(".box-slider").slick({
			dots: true,
			autoplay: false,
			fade: true,
			infinite: true,
			draggable: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});


	}


	//    load more
	if (jQuery.ias) {
		var ias = jQuery.ias({
			container: '#listing',
			item: '.small-12',
			pagination: '.navigation',
			next: '.navigation a',
		});
		ias.extension(new IASTriggerExtension({
			text: '<span class="btn gray">toon alles</span>', // optionally
		}));

	}


	//image
	imageHeight();

	//Content shifting
	shiftcontent();

	//debouncedresize
	jQuery(window).bind("debouncedresize", function () {
		//image
		imageHeight();

		//Content shifting
		shiftcontent();

	});

	//Video
	var $video = jQuery("#video");
	jQuery(".play").click(function () {
		$video[0].play();
		jQuery(this).removeClass("active");
		jQuery(".video-banner").addClass("video-play");
	});

	jQuery("#video").click(function () {
		$video[0].pause();
		jQuery(".play").addClass("active");
		if ($video[0].paused) {
			jQuery(".video-banner").removeClass("video-play");
		}
	});

	//Video small
	var $videosm = jQuery(".video-sm");
    var $videolg = jQuery(".video-lg");

	function playVideo() {
		if ($videosm[0].paused) {
			$videosm[0].play();

		} else {
			$videosm[0].pause();
		}

	}
    function playVideo1() {
		if ($videolg[0].paused) {
			$videolg[0].play();

		} else {
			$videolg[0].pause();
		}

	}
    
    jQuery(".play-sm").click(function () {
		playVideo();
        playVideo1();
		jQuery(this).toggleClass("active");
	});

	//Google map
	if (jQuery('#map-canvas').length) {

		var map = new google.maps.Map(document.getElementById('map-canvas'), {
			zoom: 17,
			center: new google.maps.LatLng(52.1816616, 5.9714773),
			disableDefaultUI: true,
			draggable: true,
			zoomControl: false,
			scrollwheel: false,
			disableDoubleClickZoom: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		});

		var customMarker = 'images/marker.png';
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(52.1816616, 5.9714773),
			icon: customMarker,
			map: map,
			title: 'Alpha Audio & Light B.V.'
		})

	}

});


//window height
function imageHeight() {
	if (jQuery.fn.imgLiquid) {
		jQuery(".banner-image").imgLiquid({
			fill: true
		});
	}
}

function shiftcontent() {
	if (jQuery(".display-mob").is(":visible")) {
		jQuery(".main-outercon").each(function (index) {
			jQuery('.logo-block').insertAfter(".header-block");
		});


	} else {
		jQuery(".main-outercon").each(function (index) {
			jQuery('.logo--block').insertBefore(".header-block");
		});

	}
}

function myFunction() {
	jQuery(".play-sm").removeClass("active");
}
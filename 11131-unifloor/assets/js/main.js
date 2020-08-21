jQuery(function () {

	//foundation	 
	jQuery(document).foundation();

	//Image Bg
	imageBg();

	//Slider
	if (jQuery.fn.slick) {
		jQuery('.brands-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 2,
			autoplay: true,
			arrows: true,
			dots: true,
			draggable: true,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 4
					}
                },
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3
					}
                },
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
                },
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
                }
            ]
		});



		// SLICK
		jQuery('.slider-for').slick({
			dots: true,
			arrows: false,
			swipe: false,
			adaptiveHeight: true,
			customPaging: function (slick, index) {
				return '<button style="background:url(' + $(slick.$slides[index]).data('src') + ') center center;"></button>';
			}
		});



	}
	if (jQuery.fn.zoom) {
		$('.ex1').zoom({ on:'click' });

	}
	//debouncedresize
	jQuery(window).bind("debouncedresize", function () {

		//Image Bg
		imageBg();

	});



	//Isotope Category
	if (jQuery(".filter-cotainer").length) {
		var $container = jQuery('.filter-cotainer.isotopes').isotope({
			itemSelector: '.filter-cotainer .medium-4',
			layoutMode: 'fitRows',
			resizable: false,
			transitionDuration: '.8s'
		});

		$container.isotope('on', 'layoutComplete', function (isoInstance, laidOutItems) {
			var SearchItemCount = laidOutItems.length;
			jQuery('.result-count .result').text(SearchItemCount);
		});
	}

	$checkboxes = jQuery('#filters input');
	$checkboxes.change(function () {
		var filters = [];
		$checkboxes.filter(':checked').each(function () {
			filters.push(this.value);
		});
		filters = filters.join(', ');
		$container.isotope({
			filter: filters
		});
	});

	//Isotope item individual count
	var $itembox = $('.filter-cotainer .medium-4');
	$checkboxes.each(function (i, elem) {
		var el_val = elem.value;
		var el_val = el_val.replace('.', '');

		var cnt = 0;
		$itembox.each(function () {
			if (jQuery(this).hasClass(el_val)) {
				cnt = cnt + 1;
			}
		});
		jQuery(this).siblings("span.itemcount").text("(" + cnt + ")");
	});


	jQuery('#filters li a').click(function () {
		jQuery(this).toggleClass('active');
		var target = jQuery(this).next().slideToggle();
		jQuery('.filter-select').not(target).hide();
		jQuery('.filter-select').not(target).siblings('a').removeClass('active');
	});

	//filter result count
	var TotalCount = jQuery('.filter-cotainer .medium-4').length;
	jQuery('.result-count .total').text(TotalCount);
	jQuery('.result-count .result').text(TotalCount);

	//filter submit on mobile
	jQuery('#filters li.filter-submit .button').click(function () {
		jQuery(this).parent().parent().parent().parent().removeClass('overlay');
		jQuery(this).parent().parent().siblings('.filter-hamburger').removeClass('clicked');
		jQuery(this).parent().parent().slideUp();
	});



	//filter hamburger on mobile
	jQuery('.filter-hamburger').click(function () {
		jQuery(this).toggleClass('clicked');
		jQuery(this).next('ul').slideToggle();
		jQuery(this).parent().parent().toggleClass('overlay');
	});



	//references content 
	if (jQuery(".references-pict img").length) {
		jQuery(".references").removeClass("no-image");
	} else {
		jQuery(".references").addClass("no-image");
	}

	jQuery(".submenu").click(function () {
		jQuery(this).children("ul").slideToggle();
	});
	
	//content sidebar toggle
	jQuery('.sidebar-toggle').click(function () {
		jQuery(this).toggleClass('clicked');
		jQuery(this).next('ul').slideToggle();
	});

	//Selectbox 
	if (jQuery.fn.selectbox) {
		jQuery(".select").selectbox();
	}
	/*===============================================
    language switcher
	==================================================*/
	if (jQuery.fn.polyglotLanguageSwitcher) {
		jQuery('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
			effect: 'fade',
			testMode: true,
		});
		jQuery('#polyglotLanguageSwitcher1').polyglotLanguageSwitcher({
			effect: 'fade',
			testMode: true,
		});
	}

	jQuery(".search-mob").click(function () {
		jQuery(".search-blk").slideToggle();

	});

	//Sticky
	if (jQuery.fn.sticky) {
		jQuery(".header-bottom").sticky({
			topSpacing: 0
		});
	}

});

//Image Bg
function imageBg() {
	if (jQuery.fn.imgLiquid) {
		jQuery(".banner-image, .inner-image, .overview-image, .references-pict").imgLiquid({
			fill: true
		});
	}
}

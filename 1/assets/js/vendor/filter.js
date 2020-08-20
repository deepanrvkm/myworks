jQuery(document).ready(function(){
    
    jQuery('#container').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

	updateCount();
});

	var filters = {};
	// do stuff when checkbox change
	$('#options').on( 'change', function( jQEvent ) {
		var $checkbox = $( jQEvent.target );
		manageCheckbox( $checkbox );

		var comboFilter = getComboFilter( filters );

		$('#container').isotope({ filter: comboFilter });

		$('#container').isotope( 'on', 'layoutComplete', function( isoInstance, laidOutItems ) {
			updateCount();
		} );

	});

	$.expr[':'].hasClassStartingWith = function(el, i, selector) {
		var re = new RegExp("\\b" + selector[3]);
		return re.test(el.className);
	}

	function updateCount() {
		var numItems = 0;
		$('.count').each(function( index ) {
			if ( $(this).prev('input').hasClass('all') ) {
				numItems = $('.item').length;
				$(this).html(numItems);
			} else {
				itemClass = $(this).prev('input').val().substring(1);
				var itemSelector = "#container div:hasClassStartingWith('" + itemClass + "')";
				numItems = $(itemSelector).not(":hidden").length;
				$(this).html(numItems);
			}
		});
	}
    
   
	function getComboFilter( filters ) {
		var i = 0;
		var comboFilters = [];
		var message = [];
		
		for ( var prop in filters ) {
			message.push( filters[ prop ].join(' ') );
			var filterGroup = filters[ prop ];
			// skip to next filter group if it doesn't have any values
			if ( !filterGroup.length ) {
		  		continue;
			}
			if ( i === 0 ) {
		  		// copy to new array
		  		comboFilters = filterGroup.slice(0);
			} else {
		  		var filterSelectors = [];
		 		// copy to fresh array
		  		var groupCombo = comboFilters.slice(0); // [ A, B ]
		  		// merge filter Groups
		  		for (var k=0, len3 = filterGroup.length; k < len3; k++) {
		    		for (var j=0, len2 = groupCombo.length; j < len2; j++) {
		      			filterSelectors.push( groupCombo[j] + filterGroup[k] ); // [ 1, 2 ]
		    		}

		  		}
		  		// apply filter selectors to combo filters for next group
		  		comboFilters = filterSelectors;
			}
			i++;
		}

		var comboFilter = comboFilters.join(', ');
		return comboFilter;
	}

	function manageCheckbox( $checkbox ) {
	  var checkbox = $checkbox[0];

	  var group = $checkbox.parents('.filter-block').attr('data-group');
	  // create array for filter group, if not there yet
	  var filterGroup = filters[ group ];
	  if ( !filterGroup ) {
	    filterGroup = filters[ group ] = [];
	  }

	  var isAll = $checkbox.hasClass('all');
	  // reset filter group if the all box was checked
	  if ( isAll ) {
	    delete filters[ group ];
	    if ( !checkbox.checked ) {
	      checkbox.checked = 'checked';
	    }
	  }
	  // index of
	  var index = $.inArray( checkbox.value, filterGroup );

	  if ( checkbox.checked ) {
	    var selector = isAll ? 'input' : 'input.all';
	    $checkbox.siblings( selector ).removeAttr('checked');

	    if ( !isAll && index === -1 ) {
	      // add filter to group
	      filters[ group ].push( checkbox.value );
	    }

	  } else if ( !isAll ) {
	    // remove filter from group
	    filters[ group ].splice( index, 1 );
	    // if unchecked the last box, check the all
	    if ( !$checkbox.siblings('[checked]').length ) {
	      $checkbox.siblings('input.all').attr('checked', 'checked');
	    }
	  }

	}
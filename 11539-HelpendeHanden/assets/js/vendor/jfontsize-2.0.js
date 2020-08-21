/*
 * jQuery jFontSize Plugin
 * Examples and documentation: http://jfontsize.com
 * Original Author: Frederico Soares Vanelli
 *   fredsvanelli@gmail.com
 *   http://twitter.com/fredvanelli
 *   http://facebook.com/fred.vanelli
 *
 * Copyright (c) 2011
 * Version: 1.0 (2011-07-15)
 * Dual licensed under the MIT and GPL licenses.
 * http://jfontsize.com/license
 * Requires: jQuery v1.2.6 or later
 * 
 * Version 2.0 by Vincent Chabredier / Ouvrages
 * http://www.ouvrages-web.fr
 *
 * Copyright (c) 2013
 * Requires: 
 ** jQuery v1.2.6 or later
 ** jStorage (http://www.jstorage.info/)
 * 
*/

(function($) {
  return $.fn.jfontsize = function(opcoes) {
    var $this, apply, current_size, defaults, save;
    $this = $(this);
    defaults = {
      btnMinusClasseId: "#jfontsize-minus",
      btnDefaultClasseId: "#jfontsize-default",
      btnPlusClasseId: "#jfontsize-plus",
      btnPlusPlusClasseId: "#jfontsize-plus-plus",
      btnMinusMaxHits: 1,
      btnPlusMaxHits: 1,
      btnPlusPlusMaxHits: 2,
      sizeChange: 8
    };
    if (opcoes) {
      opcoes = $.extend(defaults, opcoes);
    }
	$size = getCookie("jfontsize");
	if($size === null) {
		setCookie('jfontsize',0);
	}
    save = function(c_size) {
	  c_size = c_size || 0;
      // return $.jStorage.set("jfontsize", current_size);
      return setCookie('jfontsize',current_size);
    };
    apply = function() {
      return $this.each(function(i) {
        var fontsize, size;
        if (!($(this).data("initial_size") != null)) {
          fontsize = $(this).css("font-size");
          fontsize = parseInt(fontsize.replace("px", ""));
          $(this).data("initial_size", fontsize);
        }
        size = $(this).data("initial_size") + (current_size * opcoes.sizeChange);
        return $(this).css("font-size", size + "px");
      });
    };
    $(opcoes.btnMinusClasseId + ", " + opcoes.btnDefaultClasseId + ", " + opcoes.btnPlusClasseId + ", " + opcoes.btnPlusPlusClasseId).removeAttr("href");
    $(opcoes.btnMinusClasseId + ", " + opcoes.btnDefaultClasseId + ", " + opcoes.btnPlusClasseId + ", " + opcoes.btnPlusPlusClasseId).css("cursor", "pointer");
    // current_size = $.jStorage.get("jfontsize", 0);
    current_size = parseInt(getCookie("jfontsize"));
	// alert(current_size);
    if (current_size === (-opcoes.btnMinusMaxHits)) {
      $(opcoes.btnMinusClasseId).addClass("jfontsize-disabled").addClass("active");
    }
    if (current_size === opcoes.btnPlusMaxHits) {
      $(opcoes.btnPlusClasseId).addClass("jfontsize-disabled").addClass("active");
    }
    if (current_size === opcoes.btnPlusPlusMaxHits) {
      $(opcoes.btnPlusPlusClasseId).addClass("jfontsize-disabled").addClass("active");
    }
    if (current_size === 0) {
      $(opcoes.btnDefaultClasseId).addClass("active");
    }
    apply();
    $(opcoes.btnMinusClasseId).click(function() {
      $(opcoes.btnPlusClasseId).removeClass("jfontsize-disabled");
      if (current_size > (-opcoes.btnMinusMaxHits)) {
        current_size--;
        if (current_size === (-opcoes.btnMinusMaxHits)) {
          $(opcoes.btnMinusClasseId).addClass("jfontsize-disabled");
        }
        apply();
        return save(current_size);
      }
    });
    $(opcoes.btnDefaultClasseId).click(function() {
      $(opcoes.btnMinusClasseId).removeClass("jfontsize-disabled");
      $(opcoes.btnPlusClasseId).removeClass("jfontsize-disabled");
      $(opcoes.btnPlusPlusClasseId).removeClass("jfontsize-disabled");
      current_size = 0;
      $this.each(function(i) {
        return $(this).css("font-size", $(this).data("initial_size") + "px");
      });
      return save(current_size);
    });
    $(opcoes.btnPlusPlusClasseId).click(function() {
      $(opcoes.btnMinusClasseId).removeClass("jfontsize-disabled");
      $(opcoes.btnPlusClasseId).removeClass("jfontsize-disabled");
	  $(opcoes.btnPlusPlusClasseId).addClass("jfontsize-disabled");
	  // alert(current_size +' < '+ opcoes.btnPlusPlusMaxHits);
      if (current_size < opcoes.btnPlusPlusMaxHits) {
        current_size = opcoes.btnPlusPlusMaxHits;
        // current_size++;
        if (current_size === opcoes.btnPlusPlusMaxHits) {
          $(opcoes.btnPlusPlusClasseId).addClass("jfontsize-disabled");
        }
        apply();
        return save(current_size);
      }
    });
    return $(opcoes.btnPlusClasseId).click(function() {
      $(opcoes.btnPlusPlusClasseId).removeClass("jfontsize-disabled");
      $(opcoes.btnMinusClasseId).removeClass("jfontsize-disabled");
	  $(opcoes.btnPlusClasseId).addClass("jfontsize-disabled");
	  
      if (current_size < opcoes.btnPlusMaxHits) {
		  // alert(current_size +' < '+ opcoes.btnPlusMaxHits);
        current_size++;
        if (current_size === opcoes.btnPlusMaxHits) {
          $(opcoes.btnPlusClasseId).addClass("jfontsize-disabled");
        }
        apply();
        return save(current_size);
      } else if (current_size > opcoes.btnPlusMaxHits) {
			// alert(current_size +' > '+ opcoes.btnPlusMaxHits);
			current_size = opcoes.btnPlusMaxHits;
			if (current_size === opcoes.btnPlusMaxHits) {
			  $(opcoes.btnPlusClasseId).addClass("jfontsize-disabled");
			}
			apply();
			return save(current_size);
	  }
    });
  };
})(jQuery);
function setCookie(key, value) {
	var expires = new Date();
	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	document.cookie = key + '=' + value +';path=/'+ ';expires=' + expires.toUTCString();
}

function getCookie(key) {
	var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
	return keyValue ? keyValue[2] : null;
}
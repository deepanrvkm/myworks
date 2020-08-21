jQuery(function () {
    var count = 0;
    var total = 0;
    jQuery(".add-btn").click(function () {
        var id = jQuery(this).parents(".product-block").attr('id');
        var productName = jQuery("#" + id).find(".product-name").html();
        if (jQuery(".shoppingList li").hasClass(id)) {
            count = parseFloat(jQuery(".shoppingList li." + id).find(".tcount").html()) + parseFloat(jQuery("#" + id).find(".SelectBox").val());
            jQuery(".shoppingList li." + id).html("<span class='tcount'>" + count + "x</span>" + productName + "<span class='remove'></span>");
        } else {
            count = parseFloat(jQuery("#" + id).find(".SelectBox").val());
            jQuery(".shoppingList").append("<li class='" + id + "'><span class='tcount'>" + count + "x</span>" + productName + "<span class='remove'></span></li>");
        }
		var calc1 = parseFloat(jQuery("#" + id).find(".price").html().replace(/,/g, '.'));
		var calc2 = parseFloat(jQuery("#" + id).find(".SelectBox").val());
		
        total = parseFloat(total) + (calc1 * calc2);
		
		total = parseFloat(total).toFixed(2);
        jQuery(".total").attr('data-total',(total < 0 ? 0 : (total)));
		// total = String(total).replace('.', ',');
		
        jQuery(".total").html(String(total).replace('.', ','));
        if (jQuery(".shoppingList li").length > 0) {
            jQuery(".noitem").remove();
            jQuery(".total-block").show();
        }
    });
    jQuery(".shoppingList").on('click', '.remove', function () {
        var cName = jQuery(this).parent("li").attr('class');
		cName = cName.replace('focus-within', '');
        var shoppingListValue = parseFloat(jQuery(".shoppingList li." + cName).find(".tcount").html()) * parseFloat(jQuery("#" + cName).find(".price").html().replace(/,/g, '.'));
		shoppingListValue = shoppingListValue.toFixed(2);
		var tot = total - shoppingListValue;
		tot = tot.toFixed(2);
        jQuery(".total").html(String(tot).replace('.', ','));
        jQuery(".total").attr('data-total',(total - shoppingListValue));
        total = parseFloat(jQuery(".total").data('total'));
		total = total.toFixed(2);
        jQuery(this).parent().remove();
        if (jQuery(".shoppingList li").length == 0) {
            jQuery(".shoppingList").append("<li class='noitem'>noitem</li>");
            jQuery(".total-block").hide();
			setTimeout(function(){
				jQuery(".total").attr('data-total',0);
				jQuery(".total").html(0);
				total = 0;
			},60);
        }
    });
});
jQuery(function () {
	
/*== Contact Form ==*/
	
    jQuery("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
				number: true
            },
			topic: {
                required: true
            },
			message: {
                required: true
            }
        },
        errorPlacement: function (error, element) {
            jQuery(element).parent('div').addClass('error-wrap');
            jQuery(element).parent('div').removeClass('valid-wrap')
        },

        success: function (success, element) {
			jQuery(element).parent('div').removeClass('error-wrap')
            jQuery(element).parent('div').addClass('valid-wrap');
        },
        
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });
	
    
    
});
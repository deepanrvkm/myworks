jQuery(function () {
	
/*== Reservation Form ==*/
	
    jQuery("#reservation").validate({
        rules: {
            naam: {
                required: true
            },
            personen: {
                required: true,
                number: true
            },
            datum: { 
                required: true
            }            ,
            tijd: {
                required: true
            },
            telefoon: {
                required: true,
                number: true
            },                       
            email: {
                required: true,
                email: true
            },
            opmerking: {
                required: true
            } 
        },
        errorPlacement: function (error, element) {
            jQuery(element).parents(".grid-cell").addClass('error');
            jQuery(element).parents(".grid-cell").removeClass('valid')
        },

        success: function (success, element) {
			jQuery(element).parents(".grid-cell").removeClass('error');
            jQuery(element).parents(".grid-cell").addClass('valid')
        },
    
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });

    /*== Shopping Form ==*/
    jQuery("#shopping").validate({
        rules: {
            naam: {
                required: true
            },
            straat: { 
                required: true
            }            ,
            postcode: {
                required: true
            },
            telefoon: {
                required: true,
                number: true
            },                       
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function (error, element) {
            jQuery(element).parents(".shop-row").addClass('error');
            jQuery(element).parents(".shop-row").removeClass('valid')
        },

        success: function (success, element) {
			jQuery(element).parents(".shop-row").removeClass('error');
            jQuery(element).parents(".shop-row").addClass('valid')
        },
    
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });


    /*== Contact Form ==*/
    
    jQuery("#contact-form").validate({
        rules: {
            naam: {
                required: true
            },                       
            email: {
                required: true,
                email: true
            },
            onderwerp: {
                required: true
            },
            vraag: {
                required: true
            } 
        },
        errorPlacement: function (error, element) {
            jQuery(element).parents(".form-row").addClass('error');
            jQuery(element).parents(".form-row").removeClass('valid')
        },

        success: function (success, element) {
            jQuery(element).parents(".form-row").removeClass('error');
            jQuery(element).parents(".form-row").addClass('valid')
        },
    
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });



    /*== Contact Form in content page ==*/
    
    jQuery("#contact-form2").validate({
        rules: {
            naam: {
                required: true
            },                       
            telefoon: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            vraag: {
                required: true
            } 
        },
        errorPlacement: function (error, element) {
            jQuery(element).parents(".form-row").addClass('error');
            jQuery(element).parents(".form-row").removeClass('valid')
        },

        success: function (success, element) {
            jQuery(element).parents(".form-row").removeClass('error');
            jQuery(element).parents(".form-row").addClass('valid')
        },
    
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });
    
     
	
    
    
});
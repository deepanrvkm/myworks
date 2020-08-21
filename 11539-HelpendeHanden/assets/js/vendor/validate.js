jQuery(function () {
	
/*== Contact Form ==*/
	
    jQuery("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            postcode: {
                required: true,
                number: true
            },           
            email: {
                required: true,
                email: true
            },
            ask: {
                required: true
            }
        },
        errorPlacement: function (error, element) {
            jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },

        success: function (success, element) {
			jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },
        
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });
    
    
    /*== Contact Form ==*/
	
    jQuery("#facturatieformulier").validate({
        rules: {
            voornaam: {
                required: true
            },
            achternaam: {
                required: true,                
            },           
            lidnummer: {
                required: true,
                number: true
            }
        },
        errorPlacement: function (error, element) {
            jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },

        success: function (success, element) {
			jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },
        
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });
    
    
    /*== Support Form ==*/
	
    jQuery("#steun").validate({
        rules: {
            textbox: {
                required: true,
                number: true,
                minlength: {
                    param:1,
                    depends: function (element) {
                        return jQuery('#anders').is(':checked');
                    }
                }
            },
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function (error, element) {
            jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },

        success: function (success, element) {
			jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },
        
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });
    
    
    /*== Lidworden Form ==*/
	
    jQuery("#lidworden").validate({
        rules: {
            voorletter: {
                required: true
            },
            aanspreektitel: {
                required: true
            },
            tussenvoegsel: {
                required: true
            },
            achternaam: {
                required: true                
            },
            adres: {
                required: true                
            },           
            huisnummer: {
                required: true,
                number: true
            },
            postcode: {
                required: true,
                number: true
            },
            woonplaats: {
                required: true
            },
            telefoonnummer: {
                required: true,
                number: true
            },
            email: {
                required: true,
                email: true
            },
            iban: {
                required: true
            },
            module: {
                required: true
            },
            hoogte: {
                required: true,
                number: true
            }
        },
        highlight: function(element) {
            if(jQuery(element).attr('name')=='module'){
                jQuery('.req .SumoSelect').addClass('select-error');
            } else {
                jQuery(element).addClass('error');
            }
        },
        unhighlight: function(element) {
            if(jQuery(element).attr('name')=='module'){
                jQuery('.req .SumoSelect').removeClass('select-error');
            } else {
                jQuery(element).removeClass('error');
            }
        },
        errorPlacement: function (error, element) {
            jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },

        success: function (success, element) {
			jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },
        
        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });
	
    
    /*== Agenda Form ==*/

        jQuery("#agenda-form").validate({
            rules: {
                voorletter: {
                    required: true
                },
                achternaam: {
                    required: true
                },
                adres: {
                    required: true
                },
                postcode: {
                    required: true,
                    number: true
                },
                woonplaats: {
                    required: true
                },
                telefoonnummer: {
                    required: true,
                    number: true
                },
                email: {
                    required: true,
                    email: true
                },
                aantal_personen: {
                    required: true
                },
                ajenda: {
                    required: true
                }
            },
            highlight: function(element) {
                if (jQuery(element).attr('name') == 'ajenda') {
                    jQuery('.agenda-select .SumoSelect').addClass('select-error');
                } else {
                    jQuery(element).addClass('error');
                }
            },
            unhighlight: function(element) {
                if (jQuery(element).attr('name') == 'ajenda') {
                    jQuery('.agenda-select .SumoSelect').removeClass('select-error');
                } else {
                    jQuery(element).removeClass('error');
                }
            },
            errorPlacement: function(error, element) {
                jQuery(element).addClass('error');
                jQuery(element).removeClass('valid')
            },

            success: function(success, element) {
                jQuery(element).addClass('error');
                jQuery(element).removeClass('valid')
            },

            debug: false,
            focusInvalid: false,
            errorClass: "error",

            submitHandler: function(form) {
                form.submit();
            }
        });
    
    
});
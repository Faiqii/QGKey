$(document).ready(function () {
    jQuery('#contact').on('submit', function (e) {
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.contact-form-respond').remove();
        //sending form data to PHP server if fields are not empty
        var cf_name = $.trim($("[id*=cf_name]").val());       
        var cf_email = $.trim($("[id*=cf_email]").val());
        var cf_subject = $.trim($("[id*=cf_subject]").val());
        var cf_message = $.trim($("[id*=cf_message]").val());

        $.ajax({
            type: "POST",
            url: "dynamicdata.aspx/SendContactEnquiry",
            data: "{cf_name: '" + cf_name + "', cf_email: '" + cf_email + "', cf_subject: '" + cf_subject + "',cf_message: '" + cf_message + "'}",
            contentType: "application/json; charset=utf-8",
            'a9d7c997f45b9e372ed56ead327301a4': 'a9d7c997f45b9e372ed56ead327301a4',
            dataType: "json",
            success: function (r) {
                jQuery($form).find('span.contact-form-respond').remove();
                $('#contact')[0].reset();
                $('#response').append('<span class="contact-form-respond success">Thank You! Your message has been sent successfully.</span>');

            },
            error: function (xhr, status, thrownError) {
             alert(xhr.status);
             alert(xhr.responseText);
                $('#response').append('<span class="contact-form-respond failed">Sorry! Please Try again later.</span>');

            },
            failure: function (r) {
             alert("d");
                $('#response').append('<span class="contact-form-respond failed">Sorry! Please Try again later.</span>');
            }
        });
    });

    jQuery('#contactform1').on('submit', function (e) {
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.contact-form-respond').remove();
        //sending form data to PHP server if fields are not empty
        var cf_name = $.trim($("[id*=cf_name]").val());
        var cf_email = $.trim($("[id*=cf_email]").val());
        var cf_sub = $.trim($("[id*=cf_sub]").val());
        var cf_msg = $.trim($("[id*=cf_msg]").val());

        $.ajax({
            type: "POST",
            url: "dynamicdata.aspx/SendContactEnquiry1",
            data: "{cf_name: '" + cf_name + "', cf_email: '" + cf_email + "', cf_sub: '" + cf_sub + "',cf_msg: '" + cf_msg + "'}",
            contentType: "application/json; charset=utf-8",
            'a9d7c997f45b9e372ed56ead327301a4': 'a9d7c997f45b9e372ed56ead327301a4',
            dataType: "json",
            success: function (r) {
                jQuery($form).find('span.contact-form-respond').remove();
                $('#contactform1')[0].reset();
                $('#response1').append('<span class="contact-form-respond success">Thank You! Your message has been sent successfully.</span>');

            },
            error: function (xhr, status, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                $('#response1').append('<span class="contact-form-respond failed">Sorry! Please Try again later.</span>');

            },
            failure: function (r) {
                alert("d");
                $('#response1').append('<span class="contact-form-respond failed">Sorry! Please Try again later.</span>');
            }
        });
    });

});
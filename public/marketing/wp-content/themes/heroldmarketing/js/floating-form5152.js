jQuery(document).ready(function() {
    jQuery(".form-fl_wrapper .large").on('focus', function() {
        jQuery(this).closest(".ginput_container").closest(".gfield").find("label").addClass("descup");
    });
    jQuery(".form-fl_wrapper .large").each(function() {
      jQuery(this).focusin(function(){
          jQuery(this).addClass('input-focus');
      });
      jQuery(this).on('blur', function() {
          jQuery(this).removeClass('input-focus');
      });
        if (jQuery(this).val().length > 0) {
            jQuery(this).closest(".ginput_container").closest(".gfield").find("label").addClass("descup");
            jQuery(this).off('focusout');
        } else {
            jQuery(this).closest("span").closest(".form-row").find("label").removeClass("descup")

            jQuery(this).on('focusout', function() {
                jQuery(this).closest(".ginput_container").closest(".gfield").find("label").removeClass("descup");
            })
        }
        jQuery(this).on('input', function() {
            if (jQuery(this).val().length > 0) {
                var hasVal = true;
                jQuery(this).closest(".ginput_container").closest(".gfield").find("label").addClass("descup");
                jQuery(this).off('focusout')
            } else {
                jQuery(this).closest(".ginput_container").closest(".gfield").find("label").removeClass("descup");

                var hasVal = false;
                jQuery(this).on('focusout', function() {
                    jQuery(this).closest(".ginput_container").closest(".gfield").find("label").removeClass("descup");
                });
            }
        });
    });
});

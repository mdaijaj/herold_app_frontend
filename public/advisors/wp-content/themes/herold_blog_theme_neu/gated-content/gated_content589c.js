var modal = document.getElementById('formModal');
var btns = document.getElementsByClassName("open_formModal");  // Changed to class
var span = document.getElementById("closeModal");
var head = document.getElementsByClassName("gc__sec");
var nav = document.getElementsByClassName("nav-desktop")[0];

for(var i = 0; i < btns.length; i++){
    btns[i].onclick = function() {
        modal.style.display = "block";
        document.body.classList.add("modal-open");
        document.documentElement.classList.add("modal-html-open");
        for(var j = 0; j < head.length; j++){
            head[j].classList.add("pd-r-15");
        }
        nav.classList.add("pd-r-15")
    }
}


span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-html-open");
    for(var i = 0; i < head.length; i++){
        head[i].classList.remove("pd-r-15");
    }
    nav.classList.remove("pd-r-15")
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        document.documentElement.classList.remove("modal-html-open");
        for(var i = 0; i < head.length; i++){
            head[i].classList.remove("pd-r-15");
        }
        nav.classList.remove("pd-r-15")
    }
}








function formHandler(){
    console.log("starts")
        jQuery(".input").on('focus', function() {
            jQuery(this).closest(".entry__field").closest(".form__label-row").find("label").addClass("descup");
        });
    
        jQuery(".input").each(function() {
          jQuery(this).focusin(function(){
              jQuery(this).addClass('input-focus');
          });
    
          jQuery(this).on('blur', function() {
              jQuery(this).removeClass('input-focus');
          });
    
            if (jQuery(this).val().length > 0) {
                jQuery(this).closest(".entry__field").closest(".form__label-row").find("label").addClass("descup");
                jQuery(this).off('focusout');
    
            } else {
                jQuery(this).closest("span").closest(".form-row").find("label").removeClass("descup")
                jQuery(this).on('focusout', function() {
                    jQuery(this).closest(".entry__field").closest(".form__label-row").find("label").removeClass("descup");
                })
            }
            jQuery(this).on('input', function() {
                if (jQuery(this).val().length > 0) {
                    var hasVal = true;
                    jQuery(this).closest(".entry__field").closest(".form__label-row").find("label").addClass("descup");
                    jQuery(this).off('focusout')
    
                } else {
                    jQuery(this).closest(".entry__field").closest(".form__label-row").find("label").removeClass("descup");
    
                    var hasVal = false;
                    jQuery(this).on('focusout', function() {
                        jQuery(this).closest(".entry__field").closest(".form__label-row").find("label").removeClass("descup");
                    });
                }
            });
        });
  
      function validateInput(field) {
      // Get input value of the current field
      var value = jQuery(field).val();
  
      // Clear previous error message for the current field
      jQuery(field).parent().next(".error-message").remove();
      jQuery(field).parent().removeClass("error-parent");
  
      // Error messages
      var fnameError = "Bitte gib deinen Vornamen an.";
      var lnameError = "Bitte gib deinen Namen an.";
      var optinerror = "Bitte stimme zu.";
      var emailError = "Bitte gib eine gültige E-Mail Adresse an.";
      var phoneError = "Bitte gib eine gültige Telefonnummer an.";
      var emptyEmailError = "Bitte gib deine E-Mail Adresse an.";
      var emptyPhoneError = "Bitte gib deine Telefonnummer an.";
      var emptyCompanyError = "Bitte gib deine Firma an.";
      var invalidCompanyError = "Bitte gib deine Firma an.";
  
          // Regex
      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      
      // Check if the current field is empty
      if (field.id === "OPT_IN") {
        if (!jQuery(field).is(":checked")) {
            jQuery(field).parent().addClass("error-parent");
            jQuery(field).parent().after("<div class='error-message'>" + optinerror + "</div>");
            return;
        }
    } else if (value === "") {
        switch (field.id) {
          case "EMAIL":
            jQuery(field).parent().addClass("error-parent");
            jQuery(field).parent().after("<div class='error-message'>" + emptyEmailError + "</div>");
            break;
          case "TELEFONNUMMER":
            jQuery(field).parent().addClass("error-parent");
            jQuery(field).parent().after("<div class='error-message'>" + emptyPhoneError + "</div>");
            break;
          case "UNTERNEHMEN":
            jQuery(field).parent().addClass("error-parent");
            jQuery(field).parent().after("<div class='error-message'>" + emptyCompanyError + "</div>");
            break;
          case "VORNAME":
            jQuery(field).parent().addClass("error-parent");
            jQuery(field).parent().after("<div class='error-message'>" + fnameError + "</div>");
            break;
          case "NACHNAME":
            jQuery(field).parent().addClass("error-parent");
            jQuery(field).parent().after("<div class='error-message'>" + lnameError + "</div>");
            break;
        }
        return;
      }
  
      // Email validation
      if (field.id === "EMAIL") {
        if (!emailRegex.test(value)) {
          jQuery(field).parent().addClass("error-parent");
          jQuery(field).parent().after("<div class='error-message'>" + emailError + "</div>");
        }
      }
  
      // Phone validation
      if (field.id === "TELEFONNUMMER") {
        if (!phoneRegex.test(value)) {
          jQuery(field).parent().addClass("error-parent");
          jQuery(field).parent().after("<div class='error-message'>" + phoneError + "</div>");
        }
      }
  
      if (field.id === "UNTERNEHMEN") {
        if (value.trim().length < 2) {
          jQuery(field).parent().after("<div class='error-message'>" + invalidCompanyError + "</div>");
        }
      }
  
    }
  
    // Attach the validation function to the input event of the fields
    jQuery("#EMAIL, #TELEFONNUMMER, #UNTERNEHMEN, #VORNAME, #NACHNAME, #OPT_IN").on("input", function() {
      validateInput(this);
    });
  
    jQuery(".sib-form-block__button").click(function(e) {
      e.preventDefault();  // stop the form from submitting immediately
  
      // Validate all fields
      jQuery("#EMAIL, #TELEFONNUMMER, #UNTERNEHMEN, #VORNAME, #NACHNAME, #OPT_IN").each(function() {
        validateInput(this);
      });
  
      // If there are any error messages, stop the form from submitting
      if (jQuery(".error-message").length > 0) {
        return;
      }
  
      // If no error messages, manually submit the form
      jQuery("#sib-form").submit();
    });
  }


  window.onload = function() {
    formHandler();
  };
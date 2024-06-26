

  jQuery( document ).ready(function() {
    var modalStorageName = 'pdModal'
    var modalStorageValue = localStorage.getItem(modalStorageName)

    if (modalStorageValue != 'shown'){
      var count = 0
      jQuery(document).scroll(function() {
        var y = jQuery(this).scrollTop();
        if (y > 800 && count == 0) {
          jQuery('body').addClass('modalOpen');
          jQuery('.modal-overlay').css('display', 'flex')
          jQuery('.modal-overlay').addClass('fadeInOverlay')
          jQuery('.modal').addClass('fade-in-top');
          jQuery('body, html').css('overflow-y', 'hidden')
        }
      });

    } // end if

    // close
    jQuery( "#closeIcon, #ModalClose" ).click(function() {
      // set
      localStorage.setItem(modalStorageName, 'shown');
      count++
      jQuery('body').removeClass('modalOpen');
      jQuery('.modal-overlay').removeClass('fadeInOverlay').addClass('fadeOutOverlay')
      jQuery('.modal').removeClass('fade-in-top').addClass('fade-out-top')
      jQuery('.modal-overlay').fadeOut(100)
      jQuery('.modal').delay(100).slideUp(500)
      jQuery('body, html').css('overflow-y', 'scroll')
    });


  jQuery( "#gotoScan" ).on("click", function() {
      dataLayer.push({
                      'Kategorie'         :   'OC Popup',
                      'Action'            :   'Klick',
                      'Label'             :   'Firma testen',
                      'noninteraction'    :   'false',
                      'event'             :   'genericEvent'
      });
  });
});
// jQuery(window).load(function() {

//   dataLayer.push({
//                   'Kategorie'         :   'OC Popup',
//                   'Action'            :   'Scroll',
//                   'Label'             :   'Angezeigt',
//                   'noninteraction'    :   'false',
//                   'event'             :   'genericEvent'
//   })
// });
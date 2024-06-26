jQuery(function($) {   
    $( ".accordion-trigger" ).click(function() {

        $(this).attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
        });

       $(this).next().slideToggle('100');
       $(this).find('.bagade').toggleClass('active')
    });

    // mob nav
    $( ".nav-mobile-toggle" ).click(function() {
        $('body, html').toggleClass('overflow-hidden')
        $('.sidebar-content').slideToggle('fast')
        $(this).find('.chev-indicator').toggleClass('active')
    });
});
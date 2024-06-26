(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away        
        
        $(document).ready(function() {
            $(document).on('click','.desktop.herold_carousel_phone',function() {
                $(this).children('.herold_carousel_phonehide').slideToggle();
                $(this).children('.herold_carousel_phoneshow').slideToggle();
            });
            
        });
        
        
        $('.mapboxgl-ctrl-top-right').append($('.herold_search_btn'));
        $('.mapboxgl-ctrl-top-left').append($('.maps_search_title'));

    
        $('.mapboxgl-ctrl-top-right').prepend('<svg class="herold_pin_search pin_search" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 504 504" style="enable-background:new 0 0 504 504;" xml:space="preserve"><style type="text/css">	.st0{fill:#3C4448;}</style><g><g><path class="st0" d="M252,36c-81.4,0-147.5,66.3-147.5,148.1c0,30.7,9.3,59.3,25.3,82.9L252,468l122.2-201 c15.9-23.7,25.3-52.2,25.3-82.9C399.5,102.3,333.4,36,252,36z M354.3,253.6l-0.3,0.5l-0.3,0.5L252,421.8L150.3,254.6l-0.3-0.5 l-0.3-0.5c-13.8-20.5-21.2-44.6-21.2-69.5c0-33.2,12.9-64.4,36.2-87.8C188.1,72.9,219,60,252,60s63.9,12.9,87.3,36.3 c23.3,23.4,36.2,54.6,36.2,87.8C375.5,209,368.1,233.1,354.3,253.6z M252.5,110.2c-41,0-74.2,33.2-74.2,74.2s33.2,74.2,74.2,74.2 s74.2-33.2,74.2-74.2S293.5,110.2,252.5,110.2z M252.5,234.6c-27.7,0-50.2-22.5-50.2-50.2s22.5-50.2,50.2-50.2 s50.2,22.5,50.2,50.2S280.2,234.6,252.5,234.6z"/></g></g></svg>');
        
        var mydiv = $('.fallback_content_true');
        mydiv.find('.old_carousel').appendTo(mydiv);
     
	});
	
})(jQuery, this);
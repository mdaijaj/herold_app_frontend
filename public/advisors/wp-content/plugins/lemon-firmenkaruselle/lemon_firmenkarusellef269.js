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
        
            //SLICK SLIDER
        if(jQuery().slick) { 
            
            var prev_arr = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg class="heroldblog_prev_arrow heroldblog_arrow" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 504 504" style="enable-background:new 0 0 504 504;" xml:space="preserve"><style type="text/css">.st0{fill:#FFFFFF;} .st1{fill:#3C4448;}</style><g><path class="st1" d="M278.3,368.3l-93.4-108.4c-3.9-4.5-3.9-11.2,0-15.7l93.4-108.4c4.3-5.1,11.9-5.6,16.9-1.3		c5.1,4.3,5.6,11.9,1.3,16.9L209.8,252l86.7,100.6c4.3,5,3.7,12.6-1.3,16.9c-2.2,1.9-5,2.9-7.8,2.9 C284.1,372.4,280.7,371,278.3,368.3z"/></g></svg>';
            
            
            var next_arr = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg class="heroldblog_next_arrow heroldblog_arrow" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 504 504" style="enable-background:new 0 0 504 504;" xml:space="preserve"><style type="text/css">	.st0{fill:#FFFFFF;}	.st1{fill:#3C4448;}</style><g><path class="st1" d="M216.6,372.4c-2.8,0-5.6-1-7.8-2.9c-5-4.3-5.6-11.9-1.3-16.9L294.2,252l-86.7-100.6c-4.3-5-3.8-12.6,1.3-16.9	c5-4.3,12.6-3.8,16.9,1.3l93.4,108.4c3.9,4.5,3.9,11.2,0,15.7l-93.4,108.4C223.3,371,219.9,372.4,216.6,372.4z"/></g></svg>';
            
            $('.content_image_slider ul.slides').slick({
                autoplay: false,
                dots: false,
                prevArrow: $('.herold_prev'),
                nextArrow: $('.herold_next'),
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            arrows: false,
                            dots: true,
                        }
                    },
                ]
             });  
            
            $('.company_carousel.carousel_slider').slick({
                autoplay: false,
                dots: true,
                prevArrow: prev_arr,
                nextArrow: next_arr,
                arrows: true,
                infinite: true,
             });  
            
            $('.company_carousel.slider_carousel_extended').slick({
                autoplay: false,
                dots: true,
                prevArrow: $('.herold_prev_4'),
                nextArrow: $('.herold_next_4'),
                arrows: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                appendDots: $('.arrows_beneath_3'),
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            arrows: true,
                            dots: true,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            arrows: false,
                            dots: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]                
             });
            
            
            
            $('.company_carousel.carousel_slider_quer').slick({
                autoplay: false,
                dots: true,
                prevArrow: $('.herold_prev_3'),
                nextArrow: $('.herold_next_3'),
                arrows: true,
                infinite: true,
                appendDots: $('.arrows_beneath_2'),
                responsive: [
                    {
                        breakpoint: 481,
                        settings: {
                            arrows: false,
                            dots: true,
                        }
                    },
                ]  
             });  
         
          }
        
   
     
	});
	
})(jQuery, this);
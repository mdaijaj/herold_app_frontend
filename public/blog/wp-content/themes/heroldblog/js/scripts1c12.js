(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		// DOM ready, take it away
        
        $('.wp-block-columns').addClass('flex_wrapper');

        
        if (window.pageYOffset > $('#masthead').offsetTop) {
            $('#masthead').addClass("sticky_header");
            $('body').addClass("sticky");
        }
        
        else {
            $('#masthead').removeClass("sticky_header");
            $('body').removeClass("sticky");
        }
        
        $('.right_column_post_mobile').insertAfter($('.single h1'));
        
        
        

        $(window).scroll(function() {
            
            
            if ($(this).scrollTop() > 0) {  
                $('#masthead').addClass("sticky_header");
                $('body').addClass("sticky");
            }
            else {
                $('#masthead').removeClass("sticky_header");
                $('body').removeClass("sticky");
            }            
            
            
        });



        $('.burger_menu').on('click', function() {
            $('.nav-mobile').toggleClass('opened');
        });

        $('.nav-mobile ul.nav-category li .nav_toggle_wrapper').on('click', function(e) {
            e.preventDefault();

            if ($(this).children('img').hasClass('active')) {
                $(this).parents('li').find('.sub-menu').slideUp();
                $(this).children('img').removeClass('active');

                $('.nav-mobile ul.nav-category li .nav_toggle_wrapper').parents('li').removeClass('active');
                $(this).parents('li').removeClass('active');
            } else {
                $(this).parents('li').addClass('active');
                $('.nav-mobile ul.nav-category li img').removeClass('active');
                $(this).children('img').addClass('active');
                $('.sub-menu').slideUp();
                $(this).parents('li').find('.sub-menu').slideDown();

                $('.nav-mobile ul.nav-category li .nav_toggle_wrapper').parents('li').removeClass('active');
                $(this).parents('li').addClass('active');

            }

        });

        function initAccordionFaq() {
            $('.schema-faq-question').click(function() {
                $(this).toggleClass('active').next('.schema-faq-answer').toggleClass('active').slideToggle(300);

                $('.schema-faq-question').not(this).removeClass('active').next('.schema-faq-answer').toggleClass('active').slideUp(300);
            });
        }

        initAccordionFaq();

        function initAccordion() {
            $('.menu-header').click(function() {
                if ($(window).width() <= 767) {
                    $(this).toggleClass('active').next('div').children('.menu').slideToggle();
                    $('.menu-header').not(this).removeClass('active').next('div').children('.menu').slideUp();
                }
            });
        }

        initAccordion(); // FOOTER ACCORDION ENDE !
        
        /*if($('.content_image_slider').length > 0) {
            var counter = $('.image_gallery_inner').length;
            $('.replace_count').text(counter);

        }*/
       
        
        
        
        
        
        
        // $(window).load(function(){             
            /* all slick slide should have same height 
            $('.carousel_slider_quer').find('.slick-slide').height('auto');
            var slickTrack = $('.carousel_slider_quer').find('.slick-track');
            var slickTrackHeight = $(slickTrack).height();
            $('.carousel_slider_quer').find('.slick-slide').css('height', slickTrackHeight + 'px');
             
             $('.carousel_slider').find('.slick-slide').height('auto');
            var slickTrack = $('.carousel_slider').find('.slick-track');
            var slickTrackHeight = $(slickTrack).height();
            $('.carousel_slider').find('.slick-slide').css('height', slickTrackHeight + 'px');*/
       // });
        
        
        // BURGER
        $('.hamburger').click(function(){
            $(this).toggleClass('is-active'); 
            $('.open_search').removeClass('active');
            $('.search_wrapper').slideUp();
            $('.main-navigation').slideToggle();
            
            
            
        });
        
        //open search in header
        $('.open_search').click(function(){
            $(this).toggleClass('active');
            $('.hamburger').removeClass('is-active');
            $('.main-navigation.nav_mobile').slideUp();
            $('.search_wrapper').slideToggle();
        });
        
        $('header nav ul li .mobile_toggle').click(function(){
            if($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
                $(this).next().slideUp();    
            }
                
            else if($(this).parent().parent().hasClass('active')) {
                $(this).next().slideToggle();
                $(this).parent().toggleClass('active');
            }
            
            else {
                $('header nav li').removeClass('active');
                $('header .sub-menu').slideUp('active');
                    
                $(this).parent().addClass('active');
                $(this).next().slideDown();
            }
        });
        
         // SCROLL TOP
        $('.to_top').click(function(){
          $('html, body').animate({
            scrollTop:$('body').offset().top - 70
          },1000);
        });
        
        
        var logo_desc = $('.logo_desk img');
        var width_logo_desc = logo_desc.width();
        $('.header_progress_bar').css({
            left: logo_desc.width(),
        });
        
        $('.header_progress_bar_before').css({
            width: logo_desc.width(),
        });
        
        

        
        
        if(!$('body').hasClass('home') && !$('body').hasClass('archive')) {
            var html_height = $('html').outerHeight(true);
            var viewport_height = $(window).height();
        
            if(html_height <= viewport_height) {
                $('#header_progress_bar').css({'width': '100%'});    
            }
            
            $(window).scroll(function() {
            var scroll = $(this).scrollTop();
            if (scroll > 200) {
                $('.to_top').show();
            } else {
                $('.to_top').hide();
            }
            
            //fill progress bar when scrolling
            var height = $(document).height() - $(window).height() + logo_desc.width() * 2;
            var scrolled = (scroll / height) * 100;
            $('#header_progress_bar').css({'width': scrolled + '%'});
            
        });
    }
        
        
        
           $(window).scroll(function() {
            var scroll = $(this).scrollTop();
            if (scroll > 200) {
                $('.to_top').show();
            } else {
                $('.to_top').hide();
            }
                        
        });
        
        
        
        

                
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
            
            $('.company_carousel.carousel_slider').each(function(){
                $(this).slick({
                    autoplay: false,
                    dots: true,
                    prevArrow: prev_arr,
                    nextArrow: next_arr,
                    arrows: true,
                    infinite: true,
                 }); 
            });
            
            $('.company_carousel.slider_carousel_extended').each(function(){
                $(this).slick({
                    autoplay: false,
                    dots: true,
                    prevArrow: $(this).siblings('.arrows_beneath_3').children('.herold_prev_4'),
                    nextArrow: $(this).siblings('.arrows_beneath_3').children('.herold_next_4'),
                    arrows: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    appendDots: $(this).siblings('.arrows_beneath_3'),
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

            });
            
            
            
            
            $('.company_carousel.carousel_slider_quer').each(function(){
                $(this).slick({
                    autoplay: false,
                    dots: true,
                    prevArrow: $(this).siblings('.arrows_beneath_2').children('.herold_prev_3'),
                    nextArrow: $(this).siblings('.arrows_beneath_2').children('.herold_next_3'),
                    arrows: true,
                    infinite: true,
                    appendDots: $(this).siblings('.arrows_beneath_2'),
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
                                                             
            }); 
            
            $('.teaser_wrapper .related_slide').slick({
                autoplay: false,
                dots: true,
                prevArrow: $('.herold_prev_related'),
                nextArrow: $('.herold_next_related'),
                arrows: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                appendDots: $('.arrows_beneath_related'),
                responsive: [
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
             });
            
            
            if ($(window).width() < 481) {
                $('.top_companies_wrapper .display_more_top').hide();
                $('.top_companies_wrapper .current_date_stand').hide();
                $('.company_carousel.carousel_top').each(function(){
                     $(this).slick({
                        autoplay: false,
                        dots: true,
                         arrows: false,
                         infinite: true, 
                    });
                    
                });
                
                
                
            }
            
            
            
         
          }
        
        
        // ACCORDION     
        $('.accordion_wrapper li:first-child .panel').show();  
        $('.accordion_wrapper li:first-child button.accordion').addClass('active');
        $('button.accordion').click(function(){
            
            $('.company_carousel.carousel_top').resize();
            
            var parent_wrapper_id = $(this).parents('.accordion_wrapper').prop('id');
            $('.accordion_wrapper .panel').slideUp();              
            if ($(this).hasClass( "active" )) {
                $(this).removeClass('active');
                $(this).siblings().slideUp(); 
            }
            
            else {            
                $('.panel').slideUp();
                $('button.accordion').removeClass('active');
                
                $(this).addClass('active');
                $(this).siblings().slideDown();    
                
                var self = this;
                var h = $('.site-header.sticky_header').outerHeight(true) + 20;
                setTimeout(function() {
                    var theOffset = $(self).parents('.acc_title').offset();
                    $('body,html').animate({ scrollTop: theOffset.top - h  });
                }, 400); 
               
            }  
        });
        
        /* SCROLL REVEAL
        $(window).load(function(){   
            if ($('.lemon_scroll').length) {
                window.sr = ScrollReveal();
                sr.reveal('.lemon_scroll', { 
                    scale: 0.5,
                    reset: true,
                });
            }
        });*/
        
       
        //MIXIT UP
        if ($('.mixitup_block_contents').length) {
            var initialFilter = $('.mixitup_block_titles li:first-child').data('filter');
            var mixer = mixitup('.mixitup_block_contents', {
                load: {
                    filter: initialFilter
                }
            });
        }
        
        /* display telephon number on click*/
        $('.cta_btn.phone.desktop').click(function(){
            $(this).children('span').toggle();
            $(this).children('.displayed_number').toggle();
        });   
        
        /* toc workaround */
        /*$('#toc_container span.toc_toggle').click(function(){
            $(this).toggleClass('not_active');
            $('.toc_list').slideToggle();
        }); */
        
        $('#toc_container .toc_title').click(function(){
            $(this).toggleClass('not_active');
            $('.toc_list').slideToggle();
        });
        
        $('.table_title').click(function(){
            $(this).toggleClass('not_active');
            $(this).siblings('.custom_table').slideToggle();
        });
       
        $('.display_more_top span, .display_more_top i').click(function(){
            $('.display_more_top').toggleClass('active');
            
            $('.default_hidden').slideToggle();
            
            var text = $('.display_more_top span').text();
            var changetext = (text > 'mehr anzeigen') ? 'mehr anzeigen' : 'weniger anzeigen';
            $('.display_more_top span').text(changetext);
        });
        
        $('.single_result_name img').click(function(){
            $(this).parents('.herold_map_single_result').slideUp();
        });
        
        $('.map_pin').click(function(){
            var getID = $(this).data('resultidbtn');
            
            if(!$('.herold_map_single_result').data('resultidctn', getID).hasClass('active')) {
                $('.herold_map_single_result').removeClass('active');
                $('.herold_map_single_result').data('resultidctn', getID).addClass('active');
                $('.herold_map_single_result').slideUp();
                $('.herold_map_single_result').data('resultidctn', getID).slideDown();  
                $('.map_pin').addClass('active');
            }
            
            else {
                $('.herold_map_single_result').data('resultidctn', getID).removeClass('active');
                $('.herold_map_single_result').data('resultidctn', getID).slideUp();  
                $('.map_pin').removeClass('active');
            }
            
        });
        
        
        //VOLLTREFFER LINK
        $('input[name="volltreffer"]').on('change', function(){
            var origin_btn = $('.volltreffer_follow_link');
            var origin_link = origin_btn.data('originlink');
            var volltreffer_cat = origin_btn.data('volltreffercat');
            var volltreffer_val = $(this).val();
            
            origin_btn.prop('href', origin_link + '/' + volltreffer_val);
        });
        
        $('.wp-block-video video').on('click', function(){
            //if(!$(this).parents('.wp-block-video').hasClass('video_clicked')) {
                $(this).prop('controls', true);
                $(this).parents('.wp-block-video').addClass('video_clicked');
                //$(this).get(0).play();
           // }
        });
        
            
        $('.nav-desktop .menu-item').on('mouseenter', function() {


            if(!$(this).parents('ul').hasClass('sub-menu')) {
            $('.nav-desktop .menu-item').removeClass('current-hover-active');
            $(this).addClass('current-hover-active');
            }
    
        });
    
        $('header').on('mouseleave', function() {
            $('.nav-desktop .menu-item').removeClass('current-hover-active');
    
        });

        
        //SOCIAL SHARING - EIGENE ICONS
        
        //facebook
        $('.shariff-button.facebook .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/facebook_color.svg" alt="facebook" title="facebook">');
        
        //twitter
        $('.shariff-button.twitter .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/twitter_color.svg" alt="twitter" title="twitter">');
        
        //instagram
        $('.shariff-button.instagram .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/instagram_color.svg" alt="instagram" title="instagram">');
        
        //linkedin
        $('.shariff-button.linkedin .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/linkedin_color.svg" alt="linkedin" title="linkedin">');
        
        //xing
        $('.shariff-button.xing .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/xing_color.svg" alt="xing" title="xing">');
         
        //mailto
        $('.shariff-button.mailto .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/mailto_color.svg" alt="mailto" title="mailto">');
        
        //whatsapp
        $('.shariff-button.whatsapp .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/whatsapp_color.svg" alt="whatsapp" title="whatsapp">');
        
        //sms
        $('.shariff-button.sms .shariff-icon').html('<img src="../wp-content/themes/heroldblog/assets/images/sms_color.svg" alt="sms" title="sms">');
        
        if ($(window).width() > 480) {
             $('.slider_carousel_extended .carousel_img_wrapper').each(function(){
                 var img_wi = $(this).width();
                 $(this).css({'height': img_wi + 'px'});
            });
        }
        
        
        //Toggle Categories on Front Page
        $('.toggle_categories').on('click', function(e){    
            e.preventDefault();
            $('.all_cats_inner.cat_displayed').slideToggle();
            
            var text = $('.toggle_categories').text();
            var changetext = (text > 'Mehr anzeigen') ? 'Mehr anzeigen' : 'Weniger anzeigen';
            
            $('.toggle_categories').text(changetext);
        });
        
        $('.three_column_posts .current_posts li').on('mouseover', function(e) {
            $('.three_column_posts .current_posts').addClass('hovered');
        }); 
        
        $('.two_columns_posts li').on('mouseover', function(e) {
            $('.two_columns_posts').addClass('hovered');
        });
        
        $('.three_column_posts .current_posts li, .two_columns_posts li').on('mouseout', function(e) {
            $('.three_column_posts .current_posts').removeClass('hovered');
        });
             
        $('.two_columns_posts li').on('mouseout', function(e) {
            $('.two_columns_posts').removeClass('hovered');
        });
                
    });
	
})(jQuery, this);

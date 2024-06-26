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

        $('.close_search').click(function(){
             $('.search_wrapper').slideToggle();
        });



        $('header nav ul li.menu-item-has-children').click(function(){
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).children('.sub-menu').slideUp();
            }

            else {
                $('header nav li').removeClass('active');
                $('header .sub-menu').slideUp();

                $(this).addClass('active');
                $(this).children('.sub-menu').slideDown();
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

        if($('body').hasClass('single-post')) {
            //if html is greater than viewport then fill progress bar
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




        //SLICK SLIDER



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


        //SOCIAL SHARING - EIGENE ICONS

        //facebook
        $('.shariff-button.facebook .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/facebook_color.svg" alt="facebook" title="facebook">');

        //twitter
        $('.shariff-button.twitter .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/twitter_color.svg" alt="twitter" title="twitter">');

        //instagram
        $('.shariff-button.instagram .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/instagram_color.svg" alt="instagram" title="instagram">');

        //linkedin
        $('.shariff-button.linkedin .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/linkedin_color.svg" alt="linkedin" title="linkedin">');

        //xing
        $('.shariff-button.xing .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/xing_color.svg" alt="xing" title="xing">');

        //mailto
        $('.shariff-button.mailto .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/mailto_color.svg" alt="mailto" title="mailto">');

        //whatsapp
        $('.shariff-button.whatsapp .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/whatsapp_color.svg" alt="whatsapp" title="whatsapp">');

        //sms
        $('.shariff-button.sms .shariff-icon').html('<img src="../../wp-content/themes/herold_blog_theme/assets/images/sms_color.svg" alt="sms" title="sms">');

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

        $('.ez-toc-title-toggle').on('click', function(){
            $(this).toggleClass('active');
        });

        if($('.wp-block-columns .right_column_post').length >= 1) {
            $('.elementor-page-1281 .old_elementorpost').remove();
        }

    });

})(jQuery, this);

jQuery( document ).ready(function() {
    jQuery(".elementor-post-info__item-prefix").html('Autor:in: ')
});

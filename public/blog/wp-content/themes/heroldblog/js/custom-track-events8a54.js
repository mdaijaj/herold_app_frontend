(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		// DOM ready, take it away
        
        var pagetype = $('body').data('pagetype');
        var detailpagename = $('body').data('detailpagename');
        
        function heroldTrackCarouselReihung(sid,branche,position,totalposition) {             
            dataLayer.push({    
                'Section'           :   'BLOG',
                'PageType'          :   pagetype,
                'DetailPageName'    :   detailpagename,
                'SID'               :   sid, 
                //'number'            :   'XY0987', PersonenID
                'Branche'           :   branche, 
                'Reihungskategorie' :   '', 
                'cst'               :   'yes',
                'clickPosition'     :   '', 
                'Position'          :   position, 
                'Totalposition'     :   totalposition, 
                'EntryType'         :   '', 
                'ForeignAdv'        :   '', 
                'isopen'            :   '', 
                'Kategorie'         :   'Blogbeitrag Promotion',
                'event'             :   'ReihungsView'
            });
        }; 
        
        function heroldTrackCarouselClick(sid,branche,position,totalposition) {             
            dataLayer.push({  
                'Section'           :   'BLOG',
                'PageType'          :   pagetype,
                'DetailPageName'    :   detailpagename,
                'SID'               :   sid, 
                //'number'            :   'XY0987', 
                'Branche'           :   branche, 
                'cst'               :   'yes', 
                'clickLocation'     :   'Firmenkarusell', 
                'Position'          :   position,
                'Totalposition'     :   totalposition, 
                'isopen'            :   '', 
                'Kategorie'         :   'Blogbeitrag Promotion',
                'Label'             :   '',
                'event'             :   'ReihungsClick'                
            });
                         

        }; 
        
        function getActiveSlides(sliderElement, maxElement) {
            $(sliderElement).each(function(){
                var zaehler = $(this).data('zaehler');
                var sid = $(this).data('sid');
                var branche = $(this).data('branche');
                var position = zaehler;
                var totalposition = maxElement;    
                $(this).attr('data-totalfirmen', maxElement);

                heroldTrackCarouselReihung(sid, branche,position,totalposition);  
            });
        }
        

        /* ------------------
        -- CAROUSEL EXTEND --
        ------------------ */
       
        //get maxLength of Carousel Extended
        var maxLengthExtended = 0;
        if($('.slider_carousel_extended').length) {
            $('.slider_carousel_extended .herold_carousel').each(function(){
                var zaehler = $(this).data('zaehler');
                if(!$(this).hasClass('slick-cloned')) maxLengthExtended++;       
            });
            
            
            //click display prev or next firmen (arrows)
            getActiveSlides('.slider_carousel_extended .herold_carousel.slick-active', maxLengthExtended);
            $('.herold_slick_btn_4').on('click', function(){
                getActiveSlides('.slider_carousel_extended .herold_carousel.slick-active', maxLengthExtended);
            });
            
            //click display prev or next firmen (dots)
            $('.company_carousel .herold_arrows_wrapper .slick-dots button').on('click', function(){
                getActiveSlides('.slider_carousel_extended .herold_carousel.slick-active', maxLengthExtended);
            });
            
            
        }
        
        
        /* ------------------------
        -- COMPANY CAROUSEL QUER --
        ------------------------ */
       
        //get maxLength of company carousel
        var maxLengthCarouselQuer = 0;
        if($('.carousel_slider_quer').length) {
            $('.carousel_slider_quer .herold_carousel').each(function(){
                var zaehler = $(this).data('zaehler');
                if(!$(this).hasClass('slick-cloned')) maxLengthCarouselQuer++;       
                 
            });
    
            getActiveSlides('.carousel_slider_quer .herold_carousel.slick-active', maxLengthCarouselQuer);
            
            //click display prev or next firmen (arrows)
            $('.herold_slick_btn_3').on('click', function(){
                getActiveSlides('.carousel_slider_quer .herold_carousel.slick-active', maxLengthCarouselQuer);
            });
            
            //click display prev or next firmen (dots)
            $('.company_carousel .herold_arrows_wrapper .slick-dots button').on('click', function(){
                getActiveSlides('.carousel_slider_quer .herold_carousel.slick-active', maxLengthCarouselQuer);
            });
        }
        
        
         /* ------------------------
        -- FIRMEN TOP --
        ------------------------ */
       
        if($('.top_companies_wrapper').length) {
            var maxLengthTopFirst = 0;
            $('.acc_title:first-child .carousel_top .herold_carousel').each(function(){
                var zaehler = $(this).data('zaehler');
                if(!$(this).hasClass('default_hidden')) maxLengthTopFirst++;       
                 
            });
            
        
            $('.acc_title:first-child .carousel_top .herold_carousel').each(function(){
                var zaehler = $(this).data('zaehler');
                var sid = $(this).data('sid');
                var branche = $(this).data('branche');
                var position = zaehler;
                $(this).attr('data-totalfirmen', maxLengthTopFirst);
                var totalposition = $(this).data('totalfirmen');            
                heroldTrackCarouselClick(sid, branche,position,totalposition);  
            });
            
            $('.acc_title').on('click', function(){
                var maxLengthTop = 0;
                $(this).find('.carousel_top .herold_carousel').each(function(){
                    var zaehler = $(this).data('zaehler');
                    if(!$(this).hasClass('default_hidden')) maxLengthTop++; 
                });
                
                $(this).find('.carousel_top .herold_carousel').each(function(){
                    var zaehler = $(this).data('zaehler');
                    var sid = $(this).data('sid');
                    var branche = $(this).data('branche');
                    var position = zaehler;
                    $(this).attr('data-totalfirmen', maxLengthTop);
                    var totalposition = $(this).data('totalfirmen');   
                    heroldTrackCarouselClick(sid, branche,position,totalposition);
                });                 
            });
        }
         
       
        /* ------------------------
        -- ALLGEMEINER KLICK --
        ------------------------ */

        $('.herold_carousel_container').on('click', function(){
            var zaehler = $(this).parents('.herold_carousel').data('zaehler');
            var sid = $(this).parents('.herold_carousel').data('sid');
            var branche = $(this).parents('.herold_carousel').data('branche');
            var position = zaehler;
            var totalposition = $(this).parents('.herold_carousel').data('totalfirmen');            
            heroldTrackCarouselClick(sid, branche,position,totalposition);  
        });   
    });
	
})(jQuery, this);
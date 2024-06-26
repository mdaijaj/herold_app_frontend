(function ($, root, undefined) {
	$(function () {	
        'use strict';
        // DOM ready, take it away
    
        jQuery( "#sbc-popup-btn" ).click(function() {
            dataLayer.push({
                'Kategorie'         :   'SichtbarkeitsCheck',
                'Action'            :   'click',
                'Label'             :   'PopUpButton',
                'noninteraction'    :   'false',
                'event'             :   'genericEvent'
            });
        });
        jQuery( "#sbc-block-btn-home" ).click(function() {
            dataLayer.push({
                'Kategorie'         :   'SichtbarkeitsCheck',
                'Action'            :   'click',
                'Label'             :   'TeaserButton_home',
                'noninteraction'    :   'false',
                'event'             :   'genericEvent'
            });
        });
        jQuery( "#sbc-block-btn-product" ).click(function() {
            dataLayer.push({
                'Kategorie'         :   'SichtbarkeitsCheck',
                'Action'            :   'click',
                'Label'             :   'TeaserButton_product',
                'noninteraction'    :   'false',
                'event'             :   'genericEvent'
            });
        });
    });
	
})(jQuery, this);
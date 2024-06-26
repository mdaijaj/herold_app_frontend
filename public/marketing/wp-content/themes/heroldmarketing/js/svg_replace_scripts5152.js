(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
        
        function svgReplace( img ) {

		var imgID = img.id;
		var imgClass = img.className;
		var imgURL = img.src;

		fetch(imgURL).then( function( response ) {
			return response.text();
		}).then( function( text ) {

			var parser = new DOMParser();
			var xmlDoc = parser.parseFromString(text, "text/xml");

			// Get the SVG tag, ignore the rest
			var svg = xmlDoc.getElementsByTagName('svg')[0];

			// Add replaced image's ID to the new SVG
			if( typeof imgID !== 'undefined' ) {
				svg.setAttribute('id', imgID);
			}

			// Add replaced image's classes to the new SVG
			if( typeof imgClass !== 'undefined' ) {
				svg.setAttribute('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			svg.removeAttribute('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if( ! svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width') ) {
				svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
			}

			// Replace image with new SVG
			img.parentNode.replaceChild(svg, img);

		});

	}

	document.querySelectorAll('img.svg-icon').forEach( function( img ) {
		svgReplace( img );
	});
        
        
        
        
        
        
        $('img[src$=".svg"].replace_second').each(function() {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');   
            $.get(imgURL, function(data) {
                var $svg = jQuery(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID );
                }
                
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }, 'xml');    
        });
        
        
        
        
        

    });
	
})(jQuery, this);

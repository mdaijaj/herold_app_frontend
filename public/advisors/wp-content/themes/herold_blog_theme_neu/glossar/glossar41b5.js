(function ($, root, undefined) {
    root.onclick = function(e) {
        if($('.select-glossar-categories-list').hasClass('active')) {
            $('.select-glossar-categories-list').removeClass('active');
        }
    }
	$(function () {
		'use strict';
        const HEADER_SPACE = 160;
        
        $('input[name="select-glossar"]').click(function () {
            if (!$(this).attr("checked")) {
                $(this).attr("checked", "checked");
            } else if ($(this).attr("checked") == "checked") {
                $(this).removeAttr("checked");
            } 
            $('form.select-glossar-categories-list button').trigger('click');
        });

        function scrollToAnchor(aid){
            var topOfElementToView = 0;
            if(window.innerWidth >= 955) {
                var navHeader = null;
                if(window.innerWidth >= 1230) {
                    navHeader = document.querySelector('.nav-desktop');
                } else {
                    navHeader = document.querySelector('.nav-mobile');
                }
                let filterDesktop = document.querySelector('.glossar-filter-desktop');
                let offset = navHeader.offsetHeight + filterDesktop.offsetHeight; 
                topOfElementToView = $(".glossar-letter-title#letter_"+ aid +"").position().top - offset;
            } else {
                let header = document.querySelector('.glossar-header');
                let offset = header.offsetHeight;
                topOfElementToView = $(".glossar-letter-title#letter_"+ aid +"").position().top + offset - 50;
            }
            $('html,body').animate({
                scrollTop: topOfElementToView
            },'slow');
        }
        
        $('input[name="glossarAbc"]').click(function () {
            if (!$(this).attr("checked")) {
                $(this).attr("checked", "checked");
                $('.letters-filter-inner label').removeClass('active');
                $(this).parents('label').addClass('active');
            } 
            var letter_id = $(this).val();
                    // now account for fixed header
            if(!$(this).hasClass('inactive')) {
                scrollToAnchor(letter_id);
            }
        });

        //document.onclick = function(event) {
            // console.log('2 click has class' + $('.select-glossar-categories-list').hasClass('active'));
        $('.checked-label-button').on('click', function(e) {
            e.stopPropagation(); 
            //if(!$('.select-glossar-categories-list').hasClass('active')) {
                $('.select-glossar-categories-list').toggleClass('active');
                
                if($(window).width() < 769) {
                    
                    $('.glossar-entries-list .glossar-entry a').toggleClass('inactive');
                    $('input[name="glossarAbc"]').toggleClass('inactive');
                    $('.letters-filter-inner label').toggleClass('inactive');
                    if($('.select-glossar-categories-list').hasClass('active')) { 
                        $('.glossar-entries-wrapper').on('click', function(e) { 
                            $('.select-glossar-categories-list').removeClass('active');
                            $('.glossar-entries-list .glossar-entry a').removeClass('inactive');
                            $('input[name="glossarAbc"]').removeClass('inactive');
                            $('.letters-filter-inner label').removeClass('inactive'); 
                        });
                    }
                }
                e.preventDefault();
            //}
        });

        $('.glossar-entry').on('mouseenter', function() {
            var hovercolor = $(this).data('bgcolor');
            if(!$(this).children('a').hasClass('inactive')) {
                $(this).css({'background-color': hovercolor});
            }
        });

        $('.glossar-entry').on('mouseleave', function() {
            var maincolor = $(this).data('maincolor');
            if(!$(this).children('a').hasClass('inactive')) {
                $(this).css({'background-color': maincolor});
            }
        });    

        $('.select-glossar-categories-list label').on('mouseenter', function() {
            var hovercolor = $(this).data('bgcolor');
            $(this).css({'background-color': hovercolor});
        });

        $('.select-glossar-categories-list label').on('mouseleave', function() {
            var maincolor = '#FFFFFF';
            $(this).css({'background-color': maincolor});
        });   
        
        if($('.sidebar-menu').hasClass('active')) {
            $('.ui-autocomplete-loading').addClass('active');
        };
        
        $("html").on('click', '.tut-search .ac-search-field', function() {
            if(!$('.select-glossar-categories-list').hasClass('active')) {
                $('.tut-search').addClass('itsnew'); 
                $('.ui-autocomplete-input').addClass('new');
                $('.search-submit').addClass('here');
                $('.sidebar-menu').addClass('super');
                $("html, body").animate({ scrollTop: 0 }, "fast");
            }
        });

        $("#form-delete-close").click(function() {  
            $('.ac-search-field').val('');
            $('.search-results').empty();
            $('.tut-search').addClass('itsnew');
            $('.ui-autocomplete-input').addClass('new');
            $('.search-submit').addClass('here');
            $('.sidebar-menu').addClass('super');
        });

        $("#form-delete").click(function() {
            $('.ac-search-field').val('');
            $('.search-results').empty();
            $('.tut-nav').show();
            $('.tut-search').removeClass('itsnew');
            $('.ui-autocomplete-input').removeClass('new');
            $('.search-submit').removeClass('here');
            $('.sidebar-menu').removeClass('super');
            $('.sidebar-menu').removeClass('active');
            $('.ac-search-field').removeClass('active');
        });
    
        // STICKY A-B-C     
        // let glossarHeader = document.querySelector('.nav-desktop');
        // var windowTop = $(window).scrollTop();// + HEADER_SPACE;
        // var stickyTop = $('.glossar-filter-wrapper.glossar-filter-desktop').offset().top;
        // if (stickyTop < windowTop) {
        //     $('.glossar-filter-wrapper').addClass("gloassar_sticky");
        // } else {
        //     $('.glossar-filter-wrapper').removeClass("gloassar_sticky");
        // }
        // STICKY A-B-C mobile     
        // var windowTopMobile = $(window).scrollTop() + 5;
        // var stickyTopMobile = $('.glossar-filter-wrapper').offset().top;
        // $(window).scroll(function() {
        //     var windowTop = $(window).scrollTop() + 5;
        //     if (stickyTop < windowTop) {
        //         $('.glossar-entries-outer').addClass("gloassar_sticky_mobile");
        //     } else {
        //         $('.glossar-entries-outer').removeClass("gloassar_sticky_mobile");
        //     }
        // });

        function setFilterWrapperStickyDesktop(){
            if(window.innerWidth >= 955) {
                let glossarHeader = document.querySelector('.glossar-header');
                if(glossarHeader) {
                    var supportPageOffset = window.pageXOffset !== undefined;
                    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
                    var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
                    if (scrollTop >= glossarHeader.offsetHeight) {
                        $('.glossar-filter-wrapper').addClass("gloassar_sticky");
                    } else {
                        $('.glossar-filter-wrapper').removeClass("gloassar_sticky");
                    }
                }
            }
        }
        function adjustLetterWrapperSize() {
            if(window.innerWidth < 991) {
                //let glossarHeader = document.querySelector('.glossar-header');
                //let glossarCategoriesWrapper = document.querySelector('.glossar-categories-wrapper');
                //let navMobile = document.querySelector('.nav-mobile');
                let lettersWrapper = $('.glossar-entries-outer .letters-wrapper');
                
                if(lettersWrapper) {
                    var supportPageOffset = window.pageXOffset !== undefined;
                    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
                    var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
                    //glossarHeader.offsetHeight + glossarCategoriesWrapper.offsetHeight
                    if (scrollTop >= 50) {
                        lettersWrapper.addClass('letters-resize');
                    } else {
                        lettersWrapper.removeClass('letters-resize');
                    }
                }
            }
        }
        setFilterWrapperStickyDesktop();
        $(window).scroll(function() {
            setFilterWrapperStickyDesktop();
            adjustLetterWrapperSize();
        });
        
        // LETTERS HANDLING
      
        function Utils() {

        }
        
        Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop = $(window).scrollTop();
                var pageBottom = pageTop + $(window).height();
                var elementTop = $(element).offset().top - HEADER_SPACE;
                var elementBottom = elementTop + $(element).height();
        
                if (fullyInView === true) {
                    return ((pageTop < elementTop) && (pageBottom > elementBottom));
                } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };
        
        var Utils = new Utils();
        const letterCollection = document.getElementsByClassName("glossar-letter-title");
        $(window).scroll(function() {
            $('.letters-filter-inner label').removeClass('active');
            var activatedFirstLetter = false;
            for (let i = 0; i <= letterCollection.length-1; i++) {
                let letter = letterCollection[i];
                var isElementInView = Utils.isElementInView(letter, false);
                if (isElementInView && !activatedFirstLetter) {
                    //console.log('in ' + letter.textContent);
                    activatedFirstLetter = true;
                    document.querySelectorAll('[for="'+ letter.textContent +'"]').forEach(function (e) {
                        e.classList.add('active');
                    });
                } else {
                    //console.log('out ' + letter.textContent);
                    document.querySelectorAll('[for="'+ letter.textContent +'"]').forEach(function (e) {
                        e.classList.remove('active');
                    });
                }
            }
            //console.log("");

            $('.letters-filter-inner label').hover(
                function () {
                   $(this).addClass('active');
                }, 
                 
                function () {
                   $(this).removeClass('active');
                }
             );
        });
    });
})(jQuery, this);
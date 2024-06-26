
(function ($, root, undefined) {

	$(function () {

		'use strict';


    //toggle more presse
    $('.presse_load_more').on('click', function(e) {
      e.preventDefault();
      var all_presse = $('.press-entry').length;
      var all_presse_hidden = $('.press-entry.first_hidden').length;
      var all_presse_shown = all_presse - all_presse_hidden;
      var presse_toggle = 3;
      console.log(all_presse, all_presse_hidden, all_presse_shown);

      var all_presse_shown_counter = all_presse_shown - 1;

      $('.press-entry.first_hidden').each(function(i, j) {
         if(i < presse_toggle) {
           $(this).removeClass('first_hidden');
         }
      });

      if(all_presse_hidden == 1) {
        $('.presse_load_more').hide();
      }



    });

    $('.ez-toc-title-toggle').on('click', function(){
      $(this).toggleClass('active');
  });



    $('.decision a').on('click', function(e) {
      e.preventDefault();
      $('.check-mark-slide-container').slideToggle();
      var text = $(this).text();

      $(this).text((text == 'ALLE PAKETDETAILS ANSEHEN') ? 'WENIGER PAKETDETAILS ANSEHEN' : 'ALLE PAKETDETAILS ANSEHEN');



    });


    //first footer accordion openend
    if ($(window).width() < 768) {
      $('.widget_nav_menu.accordion:first').children('.menu-header').addClass('active');
      $('.widget_nav_menu.accordion .menu').hide();
      $('.widget_nav_menu.accordion:first').find('.menu').show();
    }


    //smae height for present inner slider

    function initSameHeightTwo() {
      if($('.present-inner').length > 0) {
        var maximum = 0;

        var element = $('.carde-slider .card');
        element.each(function() {
          var height_ele = $(this).outerHeight(true);

          maximum = (height_ele > maximum) ? height_ele : maximum;

        });

        element.css({'height': maximum + 'px'});

      }
    }



    //same height card-slider
    function initSameHeight() {
        if ($(window).width() > 768) {
          if($('.card-slider').length > 0) {
            var max = 0;
            var ele = $('.card-slider .card-body');

            ele.css({'height': 'auto'});

            ele.each(function() {
              var he_ele = $(this).outerHeight(true);
              max= (he_ele > max) ? he_ele : max;
            });
            ele.css({'height': max+ 'px'});
          }
      }
    }

    initSameHeightTwo();
    initSameHeight();

    $(window).on('resize', function(){
      initSameHeightTwo();
      initSameHeight();
    });



    $('.call').hide();
    $('.call-p').hide();



    // CALL CONTAINER SCROLL APPEARANCE ENDE

    // CALL CONTAINER ACTION FUNCTION


    $(window).scroll(function() {
      var windowScrollPhone = 	$(this).scrollTop();
      if (windowScrollPhone > 200){
        $('.call').show();
        $('.call-p').show();

        if ($(window).width() > 1024) {
          $('.second_fixed_link').css({'display': 'flex'});
        }

      } else {
        $('.call').hide();
        $('.call-p').hide();
        if ($(window).width() > 1024) {
          $('.second_fixed_link').css({'display': 'none'});
        }
      }

    });



    if ($(window).width() > 1024) {







    $('.call').mouseover(function() {
        $('.call-p').addClass('appear');
    });

    $('.call').mouseout(function() {
      $('.call-p').removeClass('appear');
    });

    $('.call-p').mouseover(function() {
      $('.call-p').addClass('appear');
    });

    $('.call-p').mouseout(function() {
      $('.call-p').removeClass('appear');
    });
    // CALL CONTAINER ACTION FUNCTION ENDE
  } else {
    $('.call').click(function() {
      var phonenumber = $('.call-p').attr('href');
      $(this).attr('href', phonenumber);
  });
  }
    //toolip functions


    $('.check-mark-wrapper.clickable').on('click', function() {
      var index = $(this).children('.check-mark').data('tooltip');

      //$(this).find('.check-mark-tooltip').addClass('active');


      if($(this).find('.check-mark-tooltip[data-tooltiptext="'+index+'"]').hasClass('active')) {
        $(this).find('.check-mark-tooltip[data-tooltiptext="'+index+'"]').removeClass('active');

        $(this).children('.check-mark:first').removeClass('checked');

      } else {
        $(this).find('.check-mark-tooltip[data-tooltiptext="'+index+'"]').addClass('active');
        $(this).children('.check-mark:first').addClass('checked');

        $('.check-mark-wrapper.clickable').not(this).find('.check-mark-tooltip').removeClass('active');
        $('.check-mark-wrapper').not(this).find('.check-mark:first').removeClass('checked');
      }



      // var imgsrcold = $(this).find('.tooltip-icon').attr('src');
      // var imgsblack = 'check-mark-black.svg';
      // if (imgsrcold.indexOf("check-mark.svg") >= 0) {
      //   var imgnew = imgsrcold.replace('check-mark.svg', 'check-mark-black.svg');
      // } else {
      //   var imgnew = imgsrcold.replace('check-mark-black.svg', 'check-mark.svg');
      // }
      // $(this).find('.tooltip-icon').attr('src', imgnew);
    });







    $('.burger_menu').on('click', function() {
      $('.nav-mobile').toggleClass('opened');
    });

    $('.nav-mobile ul.nav-category li .nav_toggle_wrapper').on('click', function(e) {
      e.preventDefault();

      if($(this).children('img').hasClass('active')) {
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

    function initAccordionFaq(){
      $('.schema-faq-question').click(function(){
          $(this).toggleClass('active').next('.schema-faq-answer').toggleClass('active').slideToggle(300);

          $('.schema-faq-question').not(this).removeClass('active').next('.schema-faq-answer').toggleClass('active').slideUp(300);
      });
    }

    initAccordionFaq();

    function clmBreak(parent, children) {

      if( $(parent).length ) {
        $(parent).each(function(){
          var count = $(this).find(children).length;

          count = Math.ceil(count / 2);

          var i = 1;
          $(this).find(children).each(function(){


            if(i <= count) {
              $(this).addClass('wrap1');
            }

            else {
              $(this).addClass('wrap2');
            }




            i++;


          });



          $('.wrap1').wrapAll('<div class="faq_wrapper_1 faq_wrapper">');
          $('.wrap2').wrapAll('<div class="faq_wrapper_2 faq_wrapper">');

        });
      }
    }


    $('.nav-desktop .menu-item').on('mouseenter', function() {


      if(!$(this).parents('ul').hasClass('sub-menu')) {
        $('.nav-desktop .menu-item').removeClass('current-hover-active');
        $(this).addClass('current-hover-active');
      }

    });

    $('header').on('mouseleave', function() {
      $('.nav-desktop .menu-item').removeClass('current-hover-active');

    });

    clmBreak('.wp-block-yoast-faq-block', '.schema-faq-section');
    clmBreak('.faq .accordions', '.faq .accordions .faq-accordion');

		function initCountFunc() {
			if( $('.usp-inner').length ) {

				$(window).scroll(function() {
				   var divTop = 		$('.usp-inner .card-slider').offset().top,
					   divHeight = 		$('.usp-inner .card-slider').outerHeight(),
					   windowHeight = 	$(window).height(),
					   windowScroll = 	$(this).scrollTop();

                    //console.log(windowScroll + ' --- ' + (divTop + divHeight - windowHeight));

                    var target = (divTop + divHeight - windowHeight);
                    if ($(window).width() < 768) {
                        target = (divTop + divHeight - 1000);
                        //console.log(windowScroll + ' ' + target);
                    }


				   if (windowScroll > target){
						$('.usp-inner h2').each(function () {
							var $this = $(this);

                            if(!$this.hasClass('stop')) {


                              if($this.data('startnumber') == 0) {
                                  $({ Counter: 100  }).animate({ Counter: -0.5}, {
                                    duration: 1500,
                                    easing: 'swing',
                                    step: function () {
                                        var $countingNumber = Math.ceil(this.Counter).toLocaleString ('de');
                                        $countingNumber = $countingNumber.replace('-','');
                                        $this.children('e').text($countingNumber);
                                    }
                                });

                              } else {
                                $({ Counter: 0 }).animate({ Counter: $this.data('startnumber') }, {
                                  duration: 1500,
                                  easing: 'swing',
                                  step: function () {
                                      var $countingNumber = Math.ceil(this.Counter).toLocaleString ('de');
                                      $this.children('e').text($countingNumber);
                                  }
                              });

                              }



                                $this.addClass('stop');
                        }
						});
					   //$(window).off('scroll')
				   }


				});

			}
		}

		initCountFunc();

    // blog


/*


            $(window).load(function () {
                setTimeout(function(){
                   var test = $('.shariff-button.mailto a').attr('href');
                    var attrhref = test.split('?Sub')[0];
                    console.log(attrhref);
                    $('.shariff-button.mailto a').attr('href', attrhref);
                }, 5000);
            });

    */


    /*
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


            // SCROLL TOP
            $('.to_top').click(function(){
              $('html, body').animate({
                scrollTop:$('body').offset().top - 70
              },1000);
            });

    */



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




            if ($(window).width() > 480) {
                 $('.slider_carousel_extended .carousel_img_wrapper').each(function(){
                     var img_wi = $(this).width();
                     $(this).css({'height': img_wi + 'px'});
                });
            }














    //blog ende

    $('.tags.container .secondary-button a').mouseover(function() {
      var color = $(this).data('bgcolor');
      $(this).css('background-color', color);
      $(this).css('border-color', color);
      $(this).css('color', '#000');
    });

    $('.tags.container .secondary-button a').mouseout(function() {
      $(this).css('background-color', '#fff');
      $(this).css('border-color', '#000');
      $(this).css('color', '#000');
    });

$(document).ready(function () {
  // USP-INNER CONTAINER COMP-SLIDER FIRMEN SLIDER OHNE DOTS UND OHNE ARROWS

    // $('.comp-slider').slick({
    //   slidesToShow: 6,
    //   slidesToScroll: 1,
    //   infinite: true,
    //   autoplay: true,
    //   arrows: false,
    //   dots: false,
    //   centerMode: false,
    //   variableWidth: false,
    //   autoplaySpeed: 0,
    //   speed: 7500,
    //   cssEase: 'linear',
    //   pauseOnHover:false,
    //   responsive: [{
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1
    //     }
    //   }, {
    //     breakpoint: 769,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   }, {
    //     breakpoint: 481,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }]
    // });
   // USP-INNER CONTAINER COMP-SLIDER FIRMEN SLIDER OHNE DOTS UND OHNE ARROWS
  // BLOCK-INNER-BLOCK CONTAINER CARD SLIDER BIS 1024

  function cardosSlick() {
      var initSlide = $('.bestseller-card.card').data('priceindex');

      $('.cardos-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        dots: true,
        centerMode: false,
        initialSlide: initSlide,
        variableWidth: false,
        autoplaySpeed: 2000,
        prevArrow: $('.arrows_pricing').children('.pricing_prev_arrow'),
        nextArrow: $('.arrows_pricing').children('.pricing_next_arrow'),
        appendDots: $('.arrows_pricing_between'),
        mobileFirst: true,
        responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 1023,
          settings: 'unslick'
        }]
        // responsive: [{
        //   breakpoint: 1025,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1
        //   }
        // }, {
        //   breakpoint: 769,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1
        //   }
        // }, {
        //   breakpoint: 767,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }]
      });
    }

    cardosSlick();

    $(window).resize(function(){
        var $window_width = $(window).width();
        if ($window_width < 1024) {
            $('.cardos-slider').slick("resize");
        }
    });



  // if ($(window).width() < 1024) {

  //   var initSlide = $('.bestseller-card.card').data('priceindex');

  //   $('.cardos-slider').slick({
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     infinite: false,
  //     autoplay: false,
  //     arrows: true,
  //     dots: true,
  //     centerMode: false,
  //     initialSlide: initSlide,
  //     variableWidth: false,
  //     autoplaySpeed: 2000,
  //     prevArrow: $('.arrows_pricing').children('.pricing_prev_arrow'),
  //     nextArrow: $('.arrows_pricing').children('.pricing_next_arrow'),
  //     appendDots: $('.arrows_pricing_between'),
  //     responsive: [{
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }, {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }, {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }]
  //   });

  //   // $(window).resize(function() {
  //   //   $('.cardos-slider').slick('resize');
  //   // });

  // } // BLOCK-INNER-BLOCK CONTAINER CARD SLIDER BIS 1024
  // //TAGS-CONTAINER SLIDER

  function tagsSlider() {
    $('.tags').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows: false,
      dots: false,
      centerMode: true,
      variableWidth: true,
      autoplaySpeed: 2000,
      //prevArrow: $('.arrows_beneath_3').children('.herold_prev_4'),
      //nextArrow: $('.arrows_beneath_3').children('.herold_next_4'),
      //appendDots: $('.test'),
      mobileFirst: true,
      responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1025,
        settings: 'unslick'
      }]
      // responsive: [{
      //   breakpoint: 1025,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
      // }, {
      //   breakpoint: 769,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
      // }, {
      //   breakpoint: 481,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }]
    });
  }

  tagsSlider();

  $(window).resize(function(){
    var $window_width = $(window).width();
    if ($window_width <= 1024) {
        $('.tags').slick("resize");
    }
});

  // if ($(window).width() <= 1024) {
  //   $('.tags').slick({
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     autoplay: true,
  //     arrows: false,
  //     dots: false,
  //     centerMode: true,
  //     variableWidth: true,
  //     autoplaySpeed: 2000,
  //     //prevArrow: $('.arrows_beneath_3').children('.herold_prev_4'),
  //     //nextArrow: $('.arrows_beneath_3').children('.herold_next_4'),
  //     //appendDots: $('.test'),
  //     responsive: [{
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }, {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }, {
  //       breakpoint: 481,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }]
  //   });
  // } //TAGS-CONTAINER SLIDER ENDE !

  $('.citation').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'linear'
  });

  // $(window).resize(function() {

  //   $('.citation').slick('resize');
  // });

  //FÜR DIE CARDS
  // FUNKTION HOVER EFFEKT, DER DIE TEXT-COLOR UMFÄRBT AUF DIE BACKGROUND-COLOR BEI HOVER


  function hoverButton(button) {
    $(button).mouseover(function () {


      var x = $(this)[0];
      var color = x.parentNode.style.backgroundColor;

      for (var i = 0; i < x.children.length; i++) {
        x.children[i].style.color = color;
      }
    });
    $(button).mouseout(function () {
      var x = $(this)[0]; //console.log(color);

      for (var i = 0; i < x.children.length; i++) {
        x.children[i].style.color = '';
      }
    });
  }

  // hoverButton(".secondary-button");
 // FUNKTION HOVER EFFEKT, DER DIE TEXT-COLOR UMFÄRBT AUF DIE BACKGROUND-COLOR BEI HOVER
  // UND WIEDER AUFHÖRT, WENN MAN DEN CONTAINER MIT DER MAUS VERLÄSST !!
  // ENDE !
  // CARD-SLIDER

  function uspCardSlider() {
    $('.usp-inner .card-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows: true,
      dots: true,
      centerMode: false,
      variableWidth: false,
      autoplaySpeed: 2000,
      prevArrow: $('.arrows_usp').children('.usp_prev_arrow'),
      nextArrow: $('.arrows_usp').children('.usp_next_arrow'),
      appendDots: $('.arrows_usp_between'),
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 769,
            settings: "unslick"
         }
      ]

    });
  }

  uspCardSlider();

  function opacityCardSlider() {
    $('.opacity-inner .card-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      arrows: true,
      dots: true,
      centerMode: false,
      variableWidth: false,
      autoplaySpeed: 2000,
      prevArrow: $('.arrows_opacity').children('.opacity_prev_arrow'),
      nextArrow: $('.arrows_opacity').children('.opacity_next_arrow'),
      appendDots: $('.arrows_opacity_between'),
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 769,
            settings: "unslick"
         }
      ]
    });
  }

  opacityCardSlider();

  function recommendCardSlider() {
    $('.recommend .card-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows: true,
      dots: true,
      centerMode: false,
      variableWidth: false,
      prevArrow: $('.arrows_recommend').children('.recommend_prev_arrow'),
      nextArrow: $('.arrows_recommend').children('.recommend_next_arrow'),
      appendDots: $('.arrows_recommend_between'),
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 769,
            settings: "unslick"
         }
      ]
    });
  }

  recommendCardSlider();

  $(window).resize(function(){
      var $window_width = $(window).width();
      if ($window_width <= 768) {
          $('.usp-inner .card-slider').slick("resize");
          $('.opacity-inner .card-slider').slick("resize");
          $('.recommend .card-slider').slick("resize");
      }
  });



//   if ($(window).width() <= 768) {
// /*

//     $('.home .card-slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       infinite: true,
//       autoplay: true,
//       arrows: true,
//       dots: true,
//       centerMode: false,
//       variableWidth: false,
//       autoplaySpeed: 2000,
//       prevArrow: $('.arrows_usp').children('.usp_prev_arrow'),
//       nextArrow: $('.arrows_usp').children('.usp_next_arrow'),
//       appendDots: $('.arrows_usp_between'),

//     }); */

//     $('.recommend .card-slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       infinite: true,
//       autoplay: true,
//       arrows: true,
//       dots: true,
//       centerMode: false,
//       variableWidth: false,
//       prevArrow: $('.arrows_recommend').children('.recommend_prev_arrow'),
//       nextArrow: $('.arrows_recommend').children('.recommend_next_arrow'),
//       appendDots: $('.arrows_recommend_between'),

//     });

//   }


  // CARD-SLIDER ENDE !
  // COMPANY-SLIDER


function companySlider() {
  $('.comp-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplaySpeed: 0,
    speed: 7500,
    cssEase: 'linear',
    pauseOnHover:false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
      }
    },{
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },{
      breakpoint: 1025,
      settings: "unslick"
    }]
  });

  $('.company-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplaySpeed: 0,
    speed: 7500,
    cssEase: 'linear',
    pauseOnHover:false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
      }
    },{
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },{
      breakpoint: 1025,
      settings: "unslick"
    }]
  });
}

companySlider();

$(window).resize(function(){
    var $window_width = $(window).width();
    if ($window_width <= 1024) {
        $('.company-slider, .comp-slider').slick("resize");
    }
});

// if($(window).width() <= 1024 ) {
//   $('.company-slider, .comp-slider').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     infinite: true,
//     autoplay: true,
//     arrows: false,
//     dots: false,
//     centerMode: false,
//     variableWidth: false,
//     autoplaySpeed: 0,
//     speed: 7500,
//     cssEase: 'linear',
//     pauseOnHover:false,
//     responsive: [{
//       breakpoint: 1300,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 1,
//       }
//     },{
//       breakpoint: 1025,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       }
//     },{
//       breakpoint: 769,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       }
//     }
//     , {
//       breakpoint: 481,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,

//       }
//     }]
//   });
// }


   // COMPANY-SLIDER ENDE !
  // FOOTER ACCORDION
  // $(window).resize(function() {
  //   $('.company-slider, .comp-slider').slick('resize');
  // });





  function initAccordion() {
    $('.menu-header').click(function () {
      if ($(window).width() <= 767) {
        $(this).toggleClass('active').next('div').children('.menu').slideToggle();
        $('.menu-header').not(this).removeClass('active').next('div').children('.menu').slideUp();
      }
    });
  }

  initAccordion(); // FOOTER ACCORDION ENDE !
});


  function setMarginTop() {
    if( !$('.first-view').length ) {
        if( $(window) > 1439 ) {
          $('main').css('margin-top', '190px');
        } else {
          $('main').css('margin-top', '100px');
        }
    }
  }

  setMarginTop();




    });

})(jQuery, this);

"use strict";

$(window).load(function(){
   // Preloader
    $('.loader').fadeOut();    
    $('#preloader').delay(200).fadeOut('slow');

  // Menu
$(".hamburger").on('click',function () {
    $(this).toggleClass("opened");
    $( '.mobile-overlay' ).toggleClass( "mobile-overlay_height" );
    $(this).toggleClass('icon-open');
    $('.color-menu').toggleClass('toggle-color-menu');
    $('.mobile-overlay .menu-item').each(function(i) {
        var $menuItem = $(this);
        window.setTimeout(function() {
            $menuItem.toggleClass('mobile-overlay_show');
        }, 150 * i);
    });
});

$('.menu-item>a').on('click',function (){
   $('.mobile-overlay').removeClass('mobile-overlay_height');
   $('.hamburger').removeClass('opened icon-open');
   $('.color-menu').removeClass('toggle-color-menu');
   $('.mobile-overlay .menu-item').removeClass('mobile-overlay_show');
  });
// ----end menu

  // Carousel init
  $('.carousel').carousel({
      interval: 5000 //changes the speed
  });
   // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });
    });

  // Appear Animation
  new WOW().init();

  // Progress bars
  $(function () { 
      $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
  });  

  $(".barWrapper").waypoint(function(){
      $(".progress-bar").each(function(){
          var each_bar_width = $(this).attr('aria-valuenow');
          $(this).width(each_bar_width + '%');
      }); 
  },{ offset: "90%"});

  // Isotope Grid
  $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
  });

  // isotope click function
  $('.portfolio_filter ul li').on('click',function(){
      Waypoint.refreshAll();
      $(".portfolio_filter ul li").removeClass("select-cat");
      $(this).addClass("select-cat");
      var selector = $(this).attr('data-filter');
      $(".grid").isotope({
          filter: selector,
      });
      Waypoint.refreshAll();
  });

  // magnificPopup
  $('.image-link').magnificPopup({
      type:'inline',
      fixedContentPos: false,
      removalDelay: 100,
      closeBtnInside: true,
      preloader: false,
      mainClass: 'mfp-fade',
      gallery: {
                 enabled: true, // set to true to enable gallery
                 preload: [0,2], // read about this option in next Lazy-loading section
                 navigateByImgClick: true,
                 arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                 tPrev: 'Previous (Left arrow key)', // title for left button
                 tNext: 'Next (Right arrow key)', // title for right button
                 tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
      }
  });

  $('.video-link').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });

});// end window_load














// Changes navbar once scrolled past header
$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });


});

var headerBottom = $('#header').offset().top + $('#header').height();

$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > headerBottom) {
        $('.nav').addClass('past-header')
    } else {
        $('.nav').removeClass('past-header')
   }

});
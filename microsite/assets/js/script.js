// Changes navbar once scrolled past header
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
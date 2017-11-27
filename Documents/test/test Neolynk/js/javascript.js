$(document).ready(function() {

  /* navigation sticky */
  var navHeight = $('.nav').height();
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > navHeight){
      $('.nav').addClass('navSticky');
    } else {
      $('.nav').removeClass('navSticky');
    }
  });
});

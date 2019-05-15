
$(document).ready(function(){
  $('.main-content_slider-list').slick({
  dots: true,
  dotsClass: 'dots_list',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<i class="pe-7s-angle-right slider_button slider_button__next"></i>',
  prevArrow: '<i class="pe-7s-angle-left slider_button slider_button__prev"></i>'

  });
});


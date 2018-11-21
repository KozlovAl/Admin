$( document ).ready(function() {

  $('.menu-button').on('click', function() {
  	$('.aside').toggleClass('aside__active');
  });





$(function () {
  $('[data-toggle="tooltip-pink"]').tooltip({
  	template: '<div class="tooltip pink" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
});

$(function () {
  $('[data-toggle="tooltip-blue"]').tooltip({
  	template: '<div class="tooltip blue" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
});
})//end document.ready function
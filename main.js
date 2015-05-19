
$('section').on('click', function (){
  $('.accordion').removeClass('show');
  $(this).find($('.accordion')).addClass('show');
});

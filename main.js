
$('section').on('click', function (){
  $('.accordion').addClass('hide');
  $(this).find($('.accordion')).removeClass('hide');
});

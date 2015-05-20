
$('.accordion').addClass('hidden');
$('.accordion:first').removeClass('hidden');

$('section').on('click', function (){
  $('.accordion').addClass('hidden');
  $(this).find($('.accordion')).removeClass('hidden');
});

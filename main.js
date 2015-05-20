
$('.accordion').addClass('hidden');
$('.accordion:first').removeClass('hidden');

// $('section').on('click', function (){
//   $('.accordion').addClass('hidden');
//   $(this).find($('.accordion')).removeClass('hidden');
// });


$('main').on('click', 'h2', function(){
  $(this).next().removeClass('hidden').parent().siblings().find('.accordion').addClass('hidden');
});`
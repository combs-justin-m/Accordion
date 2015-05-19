var $p = $('p');

$('section').on('click', function (){
  $('p').addClass('hide');
  $(this).find($p).removeClass('hide');
});

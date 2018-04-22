

$('.footer_img3').on('click', function() {
//$('.location_section').addClass('hidden');
$('.location').removeClass('hidden');
   });

$('.footer_img4').on('click', function() {
$('.location').addClass('hidden');
//$('.footer2_text').removeClass('hidden');
   });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover()
})
$(document).ready(function(){
  $('.choice').click(function(){
    var buttonValue = $(this).attr('data-filter');
    // console.log(buttonValue);

    if (buttonValue == 'all') {
      $('.con').show('1000');
    }
    else {
      $('.con').not('.' + buttonValue).hide('200');
      $('.con').filter('.' + buttonValue).show('200');
    }
    $(this).addClass('active').siblings().removeClass('active');
  });
});





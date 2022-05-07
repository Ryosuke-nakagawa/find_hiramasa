$(window).on("load",function(){

  $('#look-into-sea').on('click', function(){
    $('.home-item').addClass('hidden');
    $('.back-btn').removeClass('hidden');
  });

  $('.back-btn').on('click', function(){
    $('.back-btn').addClass('hidden');
    $('.home-item').removeClass('hidden');
  });

});
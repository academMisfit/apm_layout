$(document).ready(function(){
  $('.comments-icon i').on('click', function(){
    $('.comments-wrapper.collapse').collapse('toggle');
  });
  $('.roll_up i').on('click', function(){
    $('.collapse').collapse('hide');
  });
});

$(document).ready(function(){
  //change active nav item
  $('.navbar-nav a:nth-child(3)').addClass('active');
  //show 'change email' form if click on icon
  $('.user-email i').on('click', function(e){
    e.preventDefault();
    $('.new-email-input').show();
  });
  //hide form if pushed cancel button and clear input
  $('.cancel').on('click', function(e){
    e.preventDefault();
    $(this).parent().hide();
    $(this).parent().find('input').val("");
  })
});

$(document).ready(function(){
  // scrolldown comments
  $('.comments-icon i').on('click', function(){
    $('.comments-wrapper.collapse').collapse('toggle');
  });
  // collapse comments
  $('.roll_up i').on('click', function(){
    $('.collapse').collapse('hide');
  });
  // reply to comment
  $('.comment-header .list-group .reply').on('click', function(e){
    e.preventDefault()
    let replyTextarea = document.querySelector('.commentInput');
    $(this).offsetParent().append(replyTextarea);

  });
});

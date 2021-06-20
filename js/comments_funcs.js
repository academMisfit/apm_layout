$(document).ready(function(){
  //add scrollbar to comments
  $(".comments-wrapper").niceScroll();
  // scrolldown comments
  $('.comments-icon i').on('click', function(){
    $('.comments-wrapper.collapse').collapse('toggle');
  });
  // collapse comments
  $('.roll_up i').on('click', function(){
    $('.comments-wrapper.collapse').collapse('hide');
  });
  // reply to comment
  $('.comment-header .reply').on('click', function(e){
    e.preventDefault();
    let replyTextarea = document.querySelector('.commentInput');
    let comment_msg = e.target.parentElement.parentElement.parentElement.parentElement;
    let replies = comment_msg.querySelector('.comment-responses');
    if (replies){
      replies.insertAdjacentElement('beforebegin', replyTextarea);
    } else {
      comment_msg.append(replyTextarea);
    }
  });
});

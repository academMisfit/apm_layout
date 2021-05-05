$(document).ready(function(){
  $(".radiochat").niceScroll();
  let scrollPosition = $(".strip").position().top;
  $(".tab2.radiochat").getNiceScroll().doScrollPos(0, scrollPosition);
});

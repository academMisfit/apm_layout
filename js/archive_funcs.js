$(document).ready(function(){
  //change active nav
  $('.navbar-nav a').removeClass('active');
  $('.navbar-nav a:nth-child(2)').addClass('active');
  //set initial track title
  let trackTitle = $('source').attr("src");
  $('.track-title span').text(trackTitle);

  // play track and change styles on tracklist
  $('.list-group-item').on('click', function(e){
    e.preventDefault();
    $('.list-group-item.active').removeClass('active');
    $(this).addClass('active');
    let track_src = $(this).attr("href");
    $('audio').attr("src", track_src);
    $('.audioplayer').addClass('audioplayer-playing');
    document.querySelector('audio').play();
    //change tracklist title
    trackTitle = $(this).text().split('-')[0];
    $('.track-title span').text(trackTitle);
  });
});

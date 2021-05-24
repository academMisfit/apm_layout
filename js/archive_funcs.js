$(document).ready(function(){
  //change active nav
  $('.navbar-nav a').removeClass('active');
  $('.navbar-nav a:nth-child(2)').addClass('active');
  //set initial track title
  let trackTitle = $('source').attr("src");
  $('.track-title span').text(trackTitle);
  //set track's likes and comments
  let activeTrack = $('.list-group-item.active');
  let trackLikes = activeTrack[0].childNodes[4].textContent;
  let trackComments = activeTrack[0].childNodes[6].textContent;
  $('.likes span').text(trackLikes);
  $('.comments-icon span').text(trackComments);

  // play track and change styles on tracklist on click
  $('.tracklist .list-group-item').on('click', function(e){
    e.preventDefault();
    // $('.list-group-item.active').removeClass('active');
    activeTrack.removeClass('active');
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

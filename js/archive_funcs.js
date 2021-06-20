$(document).ready(function(){
  //change active nav
  $('.navbar-nav a').removeClass('active');
  $('.navbar-nav a:nth-child(2)').addClass('active');
  //set track's likes and comments
  let activeTrack = document.querySelector('.tracklist .active');
  let trackLikes = document.querySelector('.social-icons .likes span');
  trackLikes.innerText = activeTrack.childNodes[4].textContent;
  let trackComments = document.querySelector('.social-icons .comments-icon span');
  trackComments.innerText = activeTrack.childNodes[6].textContent;
  //set initial track title
  let activeTrackTitle = activeTrack.innerText.split('-')[0];
  let audioPlayerTrackTitle = document.querySelector('.track-title span');
  audioPlayerTrackTitle.innerText = activeTrackTitle;

  // play track and change styles on tracklist on click
  $('.tracklist .list-group-item').on('click', function(e){
    e.preventDefault();
    //remove active from previous track and add to current
    activeTrack = document.querySelector('.tracklist .active');
    activeTrack.classList.remove('active');
    e.target.classList.add('active');
    //set number of likes and comments under audioPlayer
    trackLikes.innerText = e.target.childNodes[4].textContent;
    trackComments.innerText = e.target.childNodes[6].textContent;

    let track_src = $(this).attr("href");
    $('audio').attr("src", track_src);
    $('.audioplayer').addClass('audioplayer-playing');
    document.querySelector('audio').play();
    //change tracklist title
    trackTitle = $(this).text().split('-')[0];
    $('.track-title span').text(trackTitle);
  });
});

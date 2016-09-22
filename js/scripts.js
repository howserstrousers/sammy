var player = new Audio("img/songs/test.mp3"); 


$(document).ready(function() {
  $('#player').click(function(){
    player.play();
  };
});
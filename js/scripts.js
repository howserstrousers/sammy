var player = new Audio("img/songs/test.mp3"); 


$(document).ready(function() {
  $('#player').click(function(){
    player.play();
  });

  $("#player").click(function(){
    	$(".pauser").toggle();
    	$("#player").toggle();
    });



  $('.pauser').click(function(){
    player.pause();
  });

  $(".pauser").click(function(){
    	$("#player").toggle();
    	$(".pauser").toggle();
    });

});
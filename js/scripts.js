window.onload = function() {

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

  if (window.DeviceOrientationEvent) {
    console.log("DeviceOrientation is supported");
    window.addEventListener('deviceorientation', function(eventData) {});
  }

  var LR = eventData.gamma;
  var FB = eventData.beta;
  var DIR = eventData.alpha;

  deviceOrientationHandler(LR, FB, DIR);
   
  function deviceOrientationHandler(LR, FB, DIR) {
  //for webkit browser
  document.getElementById("waves").style.webkitTransform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
   
  //for HTML5 standard-compliance
  document.getElementById("waves").style.transform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
  }




}
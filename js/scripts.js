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

  var background = document.getElementByClassName('background');

    window.addEventListener('deviceorientation', function(eventData) {
      // Retrieving the front/back tilting of the device and moves the
      // background in the opposite way of the tilt

      var yTilt = Math.round((-eventData.beta + 90) * (40/180) - 40);

      // Retrieve the side to side tilting of the device and move the
      // background the opposite direction.

      var xTilt = Math.round(-eventData.gamma * (20/180) - 20);

      // Thi 'if' statement checks if the phone is upside down and corrects
      // the value that is returned.
      if (xTilt &amp;gt; 0) {
        xTilt = -xTilt;
      } else if (xTilt &amp;lt; -40) {
        xTilt = -(xTilt + 80);
      }

      var backgroundPositionValue = yTilt + 'px ' + xtilt + "px";

      background.style.backgroundPosition = backgroundPositionValue;
    }, false);

}
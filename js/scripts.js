/*
$(document).ready(function(){

	
	$(".samnav").click(function(){
	    var div = $(".homelogo");
		    div.animate({left: '90%'});
		    div.animate({up:'50%'});
		    div.animate({right:'100%'});
		    div.animate({down: '100%'});
		    div.animate({left: '50%'});
		    div.animate({up: '50%'});
 
    	});
	});

	
	$(".homelogo").ready(function(){
	    var div = $(".homelogo");
	    div.animate({left: '90%'}, "slow");
	    div.animate({right: '90%'}, "slow");
	   
		    div.animate({up:'50%'});
		    div.animate({right:'100%'});
		    div.animate({down: '100%'});
		    div.animate({left: '50%'});
		    div.animate({up: '50%'});
		 
	});

});
 

$(document).ready(function() {
    function loop() {
        $('.homelogo').css({right:0});
        $('.homelogo').animate ({
            right: 100%,
        }, 
        5000, 'linear', function() {
            loop();
        });
    }
    loop();
});
*/

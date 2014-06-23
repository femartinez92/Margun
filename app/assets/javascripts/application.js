// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//Slider animation -------------------------
$(document).ready(function() {

	



	//rotation speed and timer
	var speed = 5000;
	var run = setInterval('rotate()', speed);
	
	//grab the width and calculate left value
	var item_width = $('#slides li').width(); 
	var left_value = item_width * (-1);         
    //move the last item before first item, just in case user click prev button
    $('#slides li:first').before($('#slides li:last'));

	//set the default item to the correct position 
	$('#slides ul').css({'left' : left_value});
	//if user clicked on prev button
	$('#prev').click(function() {

		//get the right position            
		var left_indent = parseInt($('#slides ul').css('left')) + item_width;

		//slide the item            
		$('#slides ul').animate({'left' : left_indent}, 1200,function(){    

            //move the last item and put it as first item            	
            $('#slides li:first').before($('#slides li:last'));           

			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});

		});

		//cancel the link behavior            
		return false;

	});


    //if user clicked on next button
    $('#next').click(function() {
		updateProgress(0);
		start = new Date();
		animateUpdate();
		//get the right position
		var left_indent = parseInt($('#slides ul').css('left')) - item_width;
		
		//slide the item
		$('#slides ul').animate({'left' : left_indent}, 1200, function () {

            //move the first item and put it as last item
            $('#slides li:last').after($('#slides li:first'));                 	

			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});

		});

		//cancel the link behavior
		return false;
		
	});        


//if mouse hover, pause the auto rotation, otherwise rotate it
$('#slides').hover(
	function() {
		updateProgress(0);
		blocked = true;		
		clearInterval(run);
	}, 
	function() {
		run = setInterval('rotate()', speed);	
		blocked = false;
		start = new Date();
		animateUpdate();
	}
); 


	var start = new Date();
	var timeoutVal = Math.floor(speed/100);
	var blocked = false;
	animateUpdate();

	function updateProgress(percentage) {
    	$('#pbar_innerdiv').css("width", percentage + "%");    	
	}

	function animateUpdate() {
		if (!blocked){
	    	var now = new Date();
	    	var timeDiff = now.getTime() - start.getTime();
	    	var perc = Math.round((timeDiff/speed)*100);
	    	console.log(perc);
	      	if (perc <= 100) {
	       		updateProgress(perc);
	       		setTimeout(animateUpdate, timeoutVal);
		    }
	  	}
	}



$('.contacto_minimizado').click(
	function(){
		$('.contacto_maximizado').css('display', 'block').animate({"height": "80px"}, 500);
		$(this).css('cursor', 'default');
		//$('.contacto_maximizado').animate({"height": "70px"}, 500);
	}//,function(){
	//	if($('.contacto_maximizado').height()!='0px'){
	//		$('.contacto_maximizado').css('height', '0px');
	//	}
	// }
	);
$('footer').hover(
	function(){
		//$(this).css('display', 'block');
		//$(this).animate({"height": "70px"}, 500);
	},function(){
		$('.contacto_maximizado').animate({"height": "0px"}, 400,function(){
			$('.contacto_maximizado').css('display', 'none');
		});
		$('.contacto_minimizado').css('cursor', 'pointer');
	}
);



});

function rotate() {
	$('#next').click();	
}
//Termino slider ------------------------------------------------------------------------


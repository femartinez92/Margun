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
	$('#carousel').carouFredSel({
		responsive: true,
		items: {
			visible: 1,
			width: 1280,
			height: 243
		},
		scroll: {
			duration: 1200,
			timeoutDuration: 5000//,
			//fx: 'uncover-fade'
		},
		pagination: '#pager'
	});


$('.contacto_minimizado').click(
	function(){
		$('.contacto_maximizado').css('display', 'block').animate({"height": "80px"}, 500);
		$(this).css('cursor', 'default');
		$(this).css('display','none');
		//$('.contacto_maximizado').animate({"height": "70px"}, 500);
	}//,function(){
	//	if($('.contacto_maximizado').height()!='0px'){
	//		$('.contacto_maximizado').css('height', '0px');
	//	}
	// }
	);
$('.contacto_maximizado').hover(
	function(){
		//$(this).css('display', 'block');
		//$(this).animate({"height": "70px"}, 500);
	},function(){
		$(this).animate({"height": "0px"}, 400,function(){
			$(this).css('display', 'none');
		});
		$('.contacto_minimizado').css('cursor', 'pointer');
		$('.contacto_minimizado').css('display', 'block');
	}
	);


});

function rotate() {
	$('#next').click();
}
//Termino slider ------------------------------------------------------------------------


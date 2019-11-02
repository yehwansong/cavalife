$( document ).ready(function() {
	$("#wrap").append("\
  		<div id='about_d'>\
  		<span>\
		    Cava Discription\
		</span>\
		<div id='close'>close</div>\
		</div>\
	<div id='about'>About<br>Cava</div>\
	");
	$('#about').click(function(){
		$('#about_d').addClass('about_d_open')
		setTimeout(function(){
			$('#about_d').addClass('about_d_open_color')
		}, 500);
	});
	$('#close').click(function(){
		$('#about_d').removeClass('about_d_open')
		setTimeout(function(){
			$('#about_d').removeClass('about_d_open_color')
		}, 500);
	})
})
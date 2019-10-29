$( document ).ready(function() {
	$("#wrap").append("\
  		<div id='about_d'>\
		    CavaCavaCavaCavaCavaCava\
		    CavaCavaCavaCavaCavaCava\
		    CavaCavaCavaCavaCavaCava\
		    CavaCavaCavaCavaCavaCava\
		    CavaCavaCavaCavaCavaCava\
		    CavaCavaCavaCavaCavaCava\
		    CavaCavaCavaCavaCavaCava\
		    CavaCavaCavaCava\
		</div>\
		<div id='close'>close</div>\
	<div id='about'>About<br>Cava</div>\
	");
	$('#about').click(function(){
		$('#about_d').addClass('about_d_open')
		setTimeout(function(){
			$('#about_d').addClass('about_d_open_color')
		}, 500);
	})
})
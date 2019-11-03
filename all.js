$( document ).ready(function() {
	$("#wrap").append("\
  		<div id='about_d'>\
  		<span>\
			CAVA LIFE is a platform introducing artists of all kind and a select shop selling art pieces and products.<br><span class='kr'>CAVA LIFE는 동시대 다양한 장르의 작가를 소개하며 그들의 작품 및 제품을 판매하는 편집매장입니다.</span>\
		</span>\
		<div id='close'>close</div>\
		<a href = 'intro.html' id='readmore'>readmore</a>\
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
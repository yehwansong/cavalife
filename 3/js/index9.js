$( document ).ready(function() {
	var h  = window.innerHeight
	var w  = window.innerWidth
	var mouse_x
	var mouse_y
	var monkey_pos
	var plate = document.getElementsByClassName('plate')
	$('.text').addClass('text_animate')
	$('.monkey').addClass('monkey_animate')
			window.addEventListener('mousemove', function(e){
				if(e.pageX-w/2>0){
					$('.monkey').addClass('monkey_animate')
					$('.judge').removeClass('judge_left')
					$('.judge').addClass('judge_right')
				}else{
					$('.monkey').removeClass('monkey_animate')
					$('.judge').removeClass('judge_right')
					$('.judge').addClass('judge_left')
				}

				if(e.pageY<h/2){
				}else{

				}
				 mouse_x = ((e.pageX-w/2)/(w/2))*7
				 mouse_y = (e.pageY/h)*150+260
				 for (var i = plate.length - 1; i >= 0; i--) {
				 	plate[i].style.webkitTransform = "perspective(" + mouse_y + "px) rotateX(12deg) translateY(0vh) rotateY(" + mouse_x + "deg) translateZ(-100px)"
				 }
			});



})
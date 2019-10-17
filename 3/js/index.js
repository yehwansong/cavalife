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
				}else{
					$('.monkey').removeClass('monkey_animate')
				}

				if(e.pageY<h/2){
					$('.b_r_mon').removeClass('b_monkey_animate_top')
					$('.b_l_mon').removeClass('b_monkey_animate_top')
					$('.t_r_mon').removeClass('t_monkey_animate_top')
					$('.t_l_mon').removeClass('t_monkey_animate_top')
				}else{
					$('.b_r_mon').addClass('b_monkey_animate_top')
					$('.b_l_mon').addClass('b_monkey_animate_top')
					$('.t_r_mon').addClass('t_monkey_animate_top')
					$('.t_l_mon').addClass('t_monkey_animate_top')

				}
				 mouse_x = ((e.pageX-w/2)/(w/2))*7
				 mouse_y = (e.pageY/h)*150+260
				 for (var i = plate.length - 1; i >= 0; i--) {
				 	plate[i].style.webkitTransform = "perspective(" + mouse_y + "px) rotateX(12deg) translateY(0vh) rotateY(" + mouse_x + "deg) translateZ(-100px)"
				 }
			});
})
$( document ).ready(function() {
	var h  = window.innerHeight
	var w  = window.innerWidth
	var mouse_x
	var mouse_y
	var monkey_pos


var movementStrength = 800;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();


	var plate = document.getElementsByClassName('plate')
	$('.text').addClass('text_animate')
	$('.monkey').addClass('monkey_animate')
	var moved = false
			window.addEventListener('mousemove', function(e){
				if(!moved){
					add();
					moved = true}
					})
			function add(){
					setTimeout(function(){$('#box-img1').addClass('back_animate_1')}, 100);
					setTimeout(function(){$('#box-img2').addClass('back_animate_1')}, 300);
					setTimeout(function(){$('#box-img3').addClass('back_animate_1')}, 400);
					setTimeout(function(){$('#box-img4').addClass('back_animate_1')}, 500);
					setTimeout(function(){$('#box-img5').addClass('back_animate_1')}, 600);
					setTimeout(function(){$('#box-img6').addClass('back_animate_1')}, 600);
					setTimeout(function(){$('#box-img7').addClass('back_animate_1')}, 700);
					setTimeout(function(){$('#box-img8').addClass('back_animate_1')}, 800);
					setTimeout(function(){$('#box-img9').addClass('back_animate_1')}, 900);
					setTimeout(function(){$('#box-img10').addClass('back_animate_1')}, 1000);
					setTimeout(function(){$('#box-img11').addClass('back_animate_1')}, 1100);
					setTimeout(function(){$('#box-img12').addClass('back_animate_1')}, 1200);
					setTimeout(function(){$('#box-img13').addClass('back_animate_1')}, 1300);
					setTimeout(function(){$('#box-img14').addClass('back_animate_1')}, 1400);
					setTimeout(function(){$('#box-img15').addClass('back_animate_1')}, 1500);
					setTimeout(function(){$('#box-img16').addClass('back_animate_1')}, 1600);
					setTimeout(function(){$('#box-img17').addClass('back_animate_1')}, 1700);
					setTimeout(function(){$('#box-img18').addClass('back_animate_1')}, 1800);
					setTimeout(function(){$('#box-img19').addClass('back_animate_1')}, 1900);
					setTimeout(function(){$('#box-img20').addClass('back_animate_1')}, 2000);
					setTimeout(function(){$('#box-img21').addClass('back_animate_1')}, 2100);
					setTimeout(function(){$('#box-img22').addClass('back_animate_1')}, 2200);
					setTimeout(function(){$('#box-img23').addClass('back_animate_1')}, 2300);
					setTimeout(function(){$('#box-img24').addClass('back_animate_1')}, 2400);
					setTimeout(function(){$('#box-img25').addClass('back_animate_1')}, 2500);
					setTimeout(function(){$('#box-img26').addClass('back_animate_1')}, 2600);
					setTimeout(function(){$('#box-img27').addClass('back_animate_1')}, 2700);
					setTimeout(function(){$('#box-img28').addClass('back_animate_1')}, 2800);
					
					setTimeout(function(){remove()}, 1000);
				}
				function remove(){
					setTimeout(function(){$('#box-img1').removeClass('back_animate_1')}, 100);
					setTimeout(function(){$('#box-img2').removeClass('back_animate_1')}, 300);
					setTimeout(function(){$('#box-img3').removeClass('back_animate_1')}, 400);
					setTimeout(function(){$('#box-img4').removeClass('back_animate_1')}, 500);
					setTimeout(function(){$('#box-img5').removeClass('back_animate_1')}, 600);
					setTimeout(function(){$('#box-img6').removeClass('back_animate_1')}, 600);
					setTimeout(function(){$('#box-img7').removeClass('back_animate_1')}, 700);
					setTimeout(function(){$('#box-img8').removeClass('back_animate_1')}, 800);
					setTimeout(function(){$('#box-img9').removeClass('back_animate_1')}, 900);
					setTimeout(function(){$('#box-img10').removeClass('back_animate_1')}, 1000);
					setTimeout(function(){$('#box-img11').removeClass('back_animate_1')}, 1100);
					setTimeout(function(){$('#box-img12').removeClass('back_animate_1')}, 1200);
					setTimeout(function(){$('#box-img13').removeClass('back_animate_1')}, 1300);
					setTimeout(function(){$('#box-img14').removeClass('back_animate_1')}, 1400);
					setTimeout(function(){$('#box-img15').removeClass('back_animate_1')}, 1500);
					setTimeout(function(){$('#box-img16').removeClass('back_animate_1')}, 1600);
					setTimeout(function(){$('#box-img17').removeClass('back_animate_1')}, 1700);
					setTimeout(function(){$('#box-img18').removeClass('back_animate_1')}, 1800);
					setTimeout(function(){$('#box-img19').removeClass('back_animate_1')}, 1900);
					setTimeout(function(){$('#box-img20').removeClass('back_animate_1')}, 2000);
					setTimeout(function(){$('#box-img21').removeClass('back_animate_1')}, 2100);
					setTimeout(function(){$('#box-img22').removeClass('back_animate_1')}, 2200);
					setTimeout(function(){$('#box-img23').removeClass('back_animate_1')}, 2300);
					setTimeout(function(){$('#box-img24').removeClass('back_animate_1')}, 2400);
					setTimeout(function(){$('#box-img25').removeClass('back_animate_1')}, 2500);
					setTimeout(function(){$('#box-img26').removeClass('back_animate_1')}, 2600);
					setTimeout(function(){$('#box-img27').removeClass('back_animate_1')}, 2700);
					setTimeout(function(){$('#box-img28').removeClass('back_animate_1')}, 2800);
					setTimeout(function(){add()}, 1000);
				}

			var mouse_x
			var mouse_y

			window.addEventListener('mousemove', function(e){
				 mouse_x = ((e.pageX-w/2)/(w/2))*7
				 mouse_y = (e.pageY/h)*150+260
				 for (var i = plate.length - 1; i >= 0; i--) {
				 	plate[i].style.webkitTransform = "perspective(" + mouse_y + "px) rotateX(12deg) translateY(0vh) rotateY(" + mouse_x + "deg) translateZ(-100px)"
				 }
			});
})
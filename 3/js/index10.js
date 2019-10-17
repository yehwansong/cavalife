$( document ).ready(function() {
	var h  = window.innerHeight
	var w  = window.innerWidth
	var mouse_x
	var mouse_y
	var monkey_pos
	var bee = document.getElementById("top-image");
	document.addEventListener("mousemove", getMouse); 

	bee.style.position = "absolute"; //css		
	var beepos = {x:0.1*w, y:0.1*w};

	setInterval(followMouse, 50);

	var mouse = {x:0, y:0}; //mouse.x, mouse.y

	var dir = "right";
	function getMouse(e){
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function followMouse(){
	var distX = mouse.x - beepos.x;
	var distY = mouse.y - beepos.y;

	beepos.x += distX/5;
	beepos.y += distY/2;
	
	bee.style.left = beepos.x + "px";
	bee.style.top = beepos.y + "px";
}

var movementStrength = 800;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();


	var plate = document.getElementsByClassName('plate')
	$('.text').addClass('text_animate')
	$('.monkey').addClass('monkey_animate')
			window.addEventListener('mousemove', function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 100;
          var newvalueY = height * pageY * -1 - 100;
          var abspage = Math.abs(pageX)
          var scalevalueX = Math.abs((abspage - width)/2)+100;
          console.log(scalevalueX)
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
          $('#top-image').css("width", scalevalueX+"px");
          $('#top-image').css("height", scalevalueX+"px");


				 mouse_x = ((e.pageX-w/2)/(w/2))*7
				 mouse_y = (e.pageY/h)*150+260
				 for (var i = plate.length - 1; i >= 0; i--) {
				 	plate[i].style.webkitTransform = "perspective(" + mouse_y + "px) rotateX(12deg) translateY(0vh) rotateY(" + mouse_x + "deg) translateZ(-100px)"
				 }
			});
})
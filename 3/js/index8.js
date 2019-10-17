$( document ).ready(function() {


var bee = document.getElementById("bee");
document.addEventListener("mousemove", getMouse); 


bee.style.position = "absolute"; //css		
var beepos = {x:0, y:0};

setInterval(followMouse, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

var dir = "right";
function getMouse(e){
	mouse.x = e.pageX;
	mouse.y = e.pageY;

if(mouse.x > beepos.x){
  dir = "right";
} else {
  dir = "left";
}
}

function followMouse(){

	var distX = mouse.x - beepos.x;
	var distY = mouse.y - beepos.y;

	beepos.x += distX/5;
	beepos.y += distY/2;
	
	bee.style.left = beepos.x + "px";
	bee.style.top = beepos.y + "px";

if (dir == "right"){
  bee.setAttribute("class", "right");
} else {
  bee.setAttribute("class", "left");        
}
	
}









	var h  = window.innerHeight
	var w  = window.innerWidth
	var mouse_x
	var mouse_y
	var monkey_pos
	var plate = document.getElementsByClassName('plate')
	$('.text').addClass('text_animate')
	$('.monkey').addClass('monkey_animate')
			window.addEventListener('mousemove', function(e){
				if(e.pageX<w/5){
					removeclass()
					$('.mon1').addClass('mon_ani1')
				}else if(e.pageX<w*2/5){
					removeclass()
					$('.mon1').addClass('mon_ani2')
					$('.mon2').addClass('mon_ani1')
				}else if(e.pageX<w*3/5){
					removeclass()

					$('.mon1').addClass('mon_ani3')
					$('.mon2').addClass('mon_ani2')
					$('.mon3').addClass('mon_ani1')
					$('.mon1').addClass('mon_ani3')
				}else if(e.pageX<w*4/5){
					removeclass()

					$('.mon1').addClass('mon_ani4')
					$('.mon2').addClass('mon_ani3')
					$('.mon3').addClass('mon_ani2')
					$('.mon4').addClass('mon_ani1')
				}else{
					removeclass()

					$('.mon1').addClass('mon_ani4')
					$('.mon2').addClass('mon_ani4')
					$('.mon3').addClass('mon_ani3')
					$('.mon4').addClass('mon_ani2')
				}
				 mouse_x = ((e.pageX-w/2)/(w/2))*7
				 mouse_y = (e.pageY/h)*150+260
				 for (var i = plate.length - 1; i >= 0; i--) {
				 	plate[i].style.webkitTransform = "perspective(" + mouse_y + "px) rotateX(12deg) translateY(0vh) rotateY(" + mouse_x + "deg) translateZ(-100px)"
				 }
			});

function removeclass(){
					$('.mon1').removeClass('mon_ani1')
					$('.mon1').removeClass('mon_ani2')
					$('.mon1').removeClass('mon_ani3')
					$('.mon1').removeClass('mon_ani4')

					$('.mon2').removeClass('mon_ani1')
					$('.mon2').removeClass('mon_ani2')
					$('.mon2').removeClass('mon_ani3')
					$('.mon2').removeClass('mon_ani4')

					$('.mon3').removeClass('mon_ani1')
					$('.mon3').removeClass('mon_ani2')
					$('.mon3').removeClass('mon_ani3')
					$('.mon3').removeClass('mon_ani4')

					$('.mon4').removeClass('mon_ani1')
					$('.mon4').removeClass('mon_ani2')
					$('.mon4').removeClass('mon_ani3')
					$('.mon4').removeClass('mon_ani4')
}

})
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
    function adding_class(){
    $('.monkey').addClass('monkey_animate')
        setTimeout(function() {removing_class()
        }, 48000);
    }
    function removing_class(){ 
          $('.text').removeClass('text_animate')
        setTimeout(function() {adding_class()
        }, 48000);
    }
			window.addEventListener('mousemove', function(e){


          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 100;
          var newvalueY = height * pageY * -1 - 100;
          var abspage = Math.abs(pageX)
          var scalevalueX = Math.abs((abspage - width)/2)+300;
          console.log(scalevalueX)


				 mouse_x = ((e.pageX-w/2)/(w/2))*7
				 mouse_y = (e.pageY/h)*150+260
				 for (var i = plate.length - 1; i >= 0; i--) {
				 	plate[i].style.webkitTransform = "perspective(" + mouse_y + "px) rotateX(12deg) translateY(0vh) rotateY(" + mouse_x + "deg) translateZ(-100px)"
				 }
			});





initDraw(document.getElementById('canvas'));



function initDraw(canvas) {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };

    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var element = null;

    canvas.onmousemove = function (e) {
            canvas.style.cursor = "crosshair";
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x-12 - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y-12 - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x-12 + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y-12 + 'px' : mouse.startY + 'px';
        }
    }
            mouse.startX = mouse.x-12;
            mouse.startY = mouse.y-12;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x-12 + 'px';
            element.style.top = mouse.y-12 + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";

    canvas.onclick = function (e) {
        // if (element !== null) {
            element = null;
            canvas.style.cursor = "crosshair";
            console.log("finsihed.");
        // } else {
            console.log("begun.");
            mouse.startX = mouse.x-12;
            mouse.startY = mouse.y-12;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x-12 + 'px';
            element.style.top = mouse.y-12 + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        // }
    }
}
})
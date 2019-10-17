$( document ).ready(function() {
	var h  = window.innerHeight
	var w  = window.innerWidth
	var mouse_x
	var mouse_y
	var monkey_pos
	var mouse


			 if(name === 'Safari' && version === '11'){			 	
				window.location.href = "1.html";
			 }
			 
var movementStrength = 800;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
adding()


function get_browser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }
 var browser=get_browser();
 var name = browser.name
 var version = browser.version

function adding(){
setTimeout(function(){ adding(); }, 1000);
	var img_add
	var randZ
	randZ = Math.floor(Math.random() * 2) + 1  
	if(randZ == 1){
		img_add = document.createElement("img");
		img_add.classList.add("box-img");
			 // if(name === 'Safari' && version === '11'){
			 // 	}else{
				// 	$('.box-img').addClass("blend");
			 // 	}
	}else{
		img_add = document.createElement("img2");
		img_add.classList.add("box-img2");
			 // if(name === 'Safari' && version === '11'){
				// }else{
				// 	$('.box-img2').addClass("blend");	
				// }
	}
	adding_back(img_add);
	}
function adding_back(img_add){
	var randX
	var randY
	randX = Math.floor(Math.random() * (window.innerWidth - window.innerWidth*0.15));
	randY = Math.floor(Math.random() * (window.innerHeight - window.innerWidth*0.1));
	img_add.style.left = randX + window.innerWidth*0.12 + "px";
	img_add.style.top = randY + "px";
	document.body.appendChild(img_add);
}



	var plate = document.getElementsByClassName('plate')
	$('.text').addClass('text_animate')
	$('.monkey').addClass('monkey_animate')
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
})
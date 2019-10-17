$( document ).ready(function() {
var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
if(isMobile){
window.location.href = "albert_mobile.html";
}

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
 console.log(browser)
 if(browser.name === 'Safari' && browser.version === '11'){
        $('#canvas').addClass('noblend')
 }



	var btn_wrap = document.createElement("div");
	var btn = document.createElement("div");
	var dropdown = document.createElement("div");
	var dropdown_in_1 = document.createElement("a");
	var dropdown_in_2 = document.createElement("a");
	var dropdown_in_3 = document.createElement("a");
	var dropdown_in_4 = document.createElement("a");
	var dropdown_in_5 = document.createElement("a");

	dropdown_in_1.innerHTML = "1";
	dropdown_in_2.innerHTML = "2";
	dropdown_in_3.innerHTML = "3";
	dropdown_in_4.innerHTML = "4";
	dropdown_in_5.innerHTML = "5";

	btn_wrap.classList.add("btn_wrap");
	btn.classList.add("btn");
	btn.setAttribute("id", "btn")
	dropdown.classList.add("dropdown");
	dropdown.setAttribute("id", "dropdown")
	dropdown_in_1.classList.add("dropdown_a");
	dropdown_in_2.classList.add("dropdown_a");
	dropdown_in_3.classList.add("dropdown_a");
	dropdown_in_4.classList.add("dropdown_a");
	dropdown_in_5.classList.add("dropdown_a");


	dropdown_in_1.href = "1.html"
	dropdown_in_2.href = "2.html"
	dropdown_in_3.href = "3.html"
	dropdown_in_4.href = "4.html"
	dropdown_in_5.href = "5.html"
	dropdown

	btn_wrap.appendChild(btn);
	btn_wrap.appendChild(dropdown);
	dropdown.appendChild(dropdown_in_1);
	dropdown.appendChild(dropdown_in_2);
	dropdown.appendChild(dropdown_in_3);
	dropdown.appendChild(dropdown_in_4);
	dropdown.appendChild(dropdown_in_5);

	document.body.appendChild(btn_wrap);

	$( ".btn" ).click(function() {
	  document.getElementById("dropdown").classList.toggle("show");
	});

	window.onclick = function(event) {
	  if (!event.target.matches('.btn')) {
	    var dropdowns = document.getElementsByClassName("dropdown");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}


	var s_second_color_picker_id = document.createElement("section");
	s_second_color_picker_id.setAttribute("id", "s_second_color_picker_id")
	var second_color_picker = document.createElement("canvas");

	second_color_picker.width  = 150;
	second_color_picker.height = 150;
	second_color_picker.setAttribute("id", "second_color_picker")
	var second_color_id = document.createElement("div");
	second_color_id.setAttribute("id", "second_color_id")
	var second_color_picker_b = document.createElement("div");
	var second_color_picker_w = document.createElement("div");
	second_color_picker_b.setAttribute("id", "second_color_picker_b")
	second_color_picker_w.setAttribute("id", "second_color_picker_w")

	s_second_color_picker_id.appendChild(second_color_id);
	s_second_color_picker_id.appendChild(second_color_picker);
	s_second_color_picker_id.appendChild(second_color_picker_b);
	s_second_color_picker_id.appendChild(second_color_picker_w);
	btn_wrap.appendChild(s_second_color_picker_id);


	second_color_picker = document.getElementById("second_color_picker");
	second_color_id = document.getElementById("second_color_id");
	second_color_picker.onmousedown = select_second_color;
	second_color_picker_add();

	function second_color_picker_add() {
		second_color_picker_ = second_color_picker.getContext("2d"),
	  	center_x = (second_color_picker.width)/2,
	  	center_y = (second_color_picker.height)/2,
	  	sx = center_x,
	  	sy = center_y;
		palette = new second_color_picker_element(center_x, center_y, sx, sy);
		palette.draw();
	}


function select_second_color(e) {
  var x = e.pageX - second_color_picker.offsetLeft,
      y = e.pageY - second_color_picker.offsetTop,   
      pixel = second_color_picker.getContext("2d").getImageData(x, y, 1, 1).data,
	    pixelsecond_color = "rgb(" + pixel[0] + ", " + pixel[1]+", "+ pixel[2]+ ")";
	second_color_id.style.backgroundsecond_color = pixelsecond_color;

	jQuery('html').css({'color':pixelsecond_color })
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	console.log(pixelsecond_color)
	console.log('clicked')
}

$('#second_color_picker_w').click(function() {
	jQuery('html').css({'color': 'white' })
})
$('#second_color_picker_b').click(function() {
	jQuery('html').css({'color':'black' })
})




function second_color_picker_element(center_x, center_y, sx, sy) {
	this.center_x = center_x;
	this.center_y = center_y;
	this.sx = sx;
	this.sy = sy;
	this.draw = function() {
		for(var i = 0; i < 360; i+=0.1)
		{
			var rad = (i-45) * (Math.PI) / 180;
			second_color_picker_.strokeStyle = "hsla("+i+", 100%, 50%, 1.0)";
			second_color_picker_.beginPath();
			second_color_picker_.moveTo(center_x, center_y);
			second_color_picker_.lineTo(center_x + sx * Math.cos(-rad), center_y + sy * Math.sin(-rad));
			second_color_picker_.stroke();	
		}
	}
}




	var s_color_picker_id = document.createElement("section");
	s_color_picker_id.setAttribute("id", "s_color_picker_id")
	var color_picker = document.createElement("canvas");

	color_picker.width  = 150;
	color_picker.height = 150;
	color_picker.setAttribute("id", "color_picker")
	var color_id = document.createElement("div");
	var color_picker_b = document.createElement("div");
	var color_picker_w = document.createElement("div");
	color_picker_b.setAttribute("id", "color_picker_b")
	color_picker_w.setAttribute("id", "color_picker_w")
	color_id.setAttribute("id", "color_id")

	s_color_picker_id.appendChild(color_id);
	s_color_picker_id.appendChild(color_picker);
	s_color_picker_id.appendChild(color_picker_b);
	s_color_picker_id.appendChild(color_picker_w);
	btn_wrap.appendChild(s_color_picker_id);



color_picker = document.getElementById("color_picker");
color_id = document.getElementById("color_id");
color_picker.onmousedown = select_color;
color_picker_add();

function color_picker_add() {
  color_picker_ = color_picker.getContext("2d"),
  center_x = (color_picker.width)/2,
  center_y = (color_picker.height)/2,
  sx = center_x,
  sy = center_y;
  palette = new color_picker_element(center_x, center_y, sx, sy);
  palette.draw();
}

function select_color(e) {
  var x = e.pageX - color_picker.offsetLeft,
      y = e.pageY - color_picker.offsetTop,   
      pixel = color_picker.getContext("2d").getImageData(x, y, 1, 1).data,
	    pixelColor = "rgb(" + pixel[0] + ", " + pixel[1]+", "+ pixel[2]+ ")";
	color_id.style.backgroundColor = pixelColor;

	jQuery('html').css({'backgroundColor':pixelColor })
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
	console.log(pixelColor)
}



$( "#color_picker_w" ).click(function() {
	jQuery('html').css({'backgroundColor':'white' })
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})	
})
$( "#color_picker_b" ).click(function() {
	jQuery('html').css({'backgroundColor':'black' })
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})	
})





function color_picker_element(center_x, center_y, sx, sy) {
	this.center_x = center_x;
	this.center_y = center_y;
	this.sx = sx;
	this.sy = sy;
	this.draw = function() {
		for(var i = 0; i < 360; i+=0.1)
		{
			var rad = (i-45) * (Math.PI) / 180;
			color_picker_.strokeStyle = "hsla("+i+", 100%, 50%, 1.0)";
			color_picker_.beginPath();
			color_picker_.moveTo(center_x, center_y);
			color_picker_.lineTo(center_x + sx * Math.cos(-rad), center_y + sy * Math.sin(-rad));
			color_picker_.stroke();	
		}
	}
}


    var size_wrap = document.createElement("div");
    var size_1 = document.createElement("div");
    size_1.innerHTML = "AA"
    var size_2 = document.createElement("div");
    size_2.innerHTML = "AAAA"
    var size_3 = document.createElement("div");
    size_3.innerHTML = "AAAAAA"
    var size_4 = document.createElement("div");
    size_4.innerHTML = "AAAAAAAAAAAA"
    size_wrap.classList.add("size_wrap");
    size_1.classList.add("size_1");
    size_1.setAttribute("id", "size_1")
    size_2.classList.add("size_2");
    size_2.setAttribute("id", "size_2")
    size_3.classList.add("size_3");
    size_3.setAttribute("id", "size_3")
    size_4.classList.add("size_4");
    size_4.setAttribute("id", "size_4")
    size_wrap.appendChild(size_1);
    size_wrap.appendChild(size_2);
    size_wrap.appendChild(size_3);
    size_wrap.appendChild(size_4);
    btn_wrap.appendChild(size_wrap);
$( "#size_1" ).click(function() {
	$('.text').css({fontSize : '50vh' , 'lineHeight': '52vh'})
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
})
$( "#size_2" ).click(function() {
	$('.text').css({fontSize : '18vh' , 'lineHeight': '19vh'})
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
})
$( "#size_3" ).click(function() {
	$('.text').css({fontSize : '9vh' , 'lineHeight': '10vh'})
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
})
$( "#size_4" ).click(function() {
	$('.text').css({fontSize : '5vh' , 'lineHeight': '5.3vh'})
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
})














    var weight_btn_wrap = document.createElement("div");
    var weight_btn = document.createElement("div");
    var weight = document.createElement("div");
    var weight_in_1 = document.createElement("a");
    var weight_in_2 = document.createElement("a");
    var weight_in_3 = document.createElement("a");
    var weight_in_4 = document.createElement("a");
    var weight_in_5 = document.createElement("a");
    var weight_in_6 = document.createElement("a");
    var weight_in_7 = document.createElement("a");
    var weight_in_8 = document.createElement("a");
    var weight_in_9 = document.createElement("a");

    weight_btn_wrap.classList.add("weight_btn_wrap");
    weight_btn.classList.add("weight_btn");
    weight_btn.setAttribute("id", "weight_btn")
    weight.classList.add("weight");
    weight.setAttribute("id", "weight");
    weight_in_1.classList.add("weight_a");
    weight_in_1.setAttribute("id", "in_1")
    weight_in_2.classList.add("weight_a");
    weight_in_2.setAttribute("id", "in_2")
    weight_in_3.classList.add("weight_a");
    weight_in_3.setAttribute("id", "in_3")
    weight_in_4.classList.add("weight_a");
    weight_in_4.setAttribute("id", "in_4")
    weight_in_5.classList.add("weight_a");
    weight_in_5.setAttribute("id", "in_5")
    weight_in_6.classList.add("weight_a");
    weight_in_6.setAttribute("id", "in_6")
    weight_in_7.classList.add("weight_a");
    weight_in_7.setAttribute("id", "in_7")
    weight_in_8.classList.add("weight_a");
    weight_in_8.setAttribute("id", "in_8")
    weight_in_9.classList.add("weight_a");
    weight_in_9.setAttribute("id", "in_9")

    weight_in_1.innerHTML = "black"
    weight_in_2.innerHTML = "extrabold"
    weight_in_3.innerHTML = "bold"
    weight_in_4.innerHTML = "semibold"
    weight_in_5.innerHTML = "medium"
    weight_in_6.innerHTML = "regular"
    weight_in_7.innerHTML = "light"
    weight_in_8.innerHTML = "extralight"
    weight_in_9.innerHTML = "thin"


    weight_btn_wrap.appendChild(weight_btn);
    weight_btn_wrap.appendChild(weight);
    weight.appendChild(weight_in_1);
    weight.appendChild(weight_in_2);
    weight.appendChild(weight_in_3);
    weight.appendChild(weight_in_4);
    weight.appendChild(weight_in_5);
    weight.appendChild(weight_in_6);
    weight.appendChild(weight_in_7);
    weight.appendChild(weight_in_8);
    weight.appendChild(weight_in_9);


    btn_wrap.appendChild(weight_btn_wrap);
$( "#in_1" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_black";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_2" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_extrabold";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_3" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_bold";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_4" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_semibold";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_5" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_medium";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_6" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_regular";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_7" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_light";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_8" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_extralight";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});
$( "#in_9" ).click(function() {
document.getElementsByClassName("text")[0].style.fontFamily = "albert_thin";
    jQuery('.plate').css({'transform': 'perspective(268.07px) rotateX(12deg) translateY(0vh) rotateY(6.6deg) translateZ(-100px)'})
	
});

})

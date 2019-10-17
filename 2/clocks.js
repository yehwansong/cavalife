$( document ).ready(function() {
  var round = 0
  var ad=false
 var init_2,
      start_2, stop_2, move_2,
      _x_2, _y_2,
      active_2 = false,
      drag = document.getElementById('drag'),
      d = document.getElementById('draggable'),
      con = document.getElementById('container');
  
  init_2 = function() {
    // Mouse Events
    drag.addEventListener('touchstart', start_2, false);
    $(document).bind('touchmove', function(e) {
      if (active_2 === true) {
        move_2(event);
      }
    });
    $(document).bind('touchend', function(e) {
      stop_2(event.originalEvent);
    });
  };

  start_2 = function(e) {
    $('#s').css({transform:'translate(60px, 60px) scale(1.15)'})
    e.preventDefault();
    // mouse pos
    var Mx = e.touches[0].clientX - center.x;
        My = e.touches[0].clientY - center.y;
        l = d.getBoundingClientRect().left,
        t = d.getBoundingClientRect().top;
    // offset 
    _x_2 = Mx - l;
    _y_2 = My - t;
    return active_2 = true;
  };

  move_2 = function(e) {
    e.preventDefault();
    var Mx = e.touches[0].clientX - center.x;
        My = e.touches[0].clientY - center.y;
     var l = d.getBoundingClientRect().left,
        t = d.getBoundingClientRect().top,
        w = d.getBoundingClientRect().width,
        h = d.getBoundingClientRect().height,
        _l = con.getBoundingClientRect().left,
        _t = con.getBoundingClientRect().top,
        _w = con.getBoundingClientRect().width,
        _h = con.getBoundingClientRect().height,
        x_2,
         y_2;
    //check to see if mouse is inside container
    if (Mx - _x_2 > _l && Mx + w - _l < _w + _x_2) {
      // x = mouseX - offsetX - containerX
      x_2 = Mx - _x_2 - _l ;
    }
    if (My - _y_2 > _t && My + h - _t < _h + _y_2) {
      // y = mouseY - offsetY - containerY
      y_2 = My - _y_2 - _t;
    }
    return d.style.left = x_2 + 'px', d.style.top = y_2 + 'px';
  };

  stop_2 = function() {
    $('#s').css({transform:'translate(20px, 20px) scale(1.1)'})
    return active_2 = false;
  };

  init_2();



  var init, rotate, start, stop,
    active = false,
    angle = 0,
    rotation = 0,
    startAngle = 0,
    center = {
      x: 0,
      y: 0
    },
    R2D = 180 / Math.PI,
    rot = document.getElementById('rotate');

  init = function() {
    rot.addEventListener("touchstart", start, false);
    $(document).bind('touchmove', function(event) {
      if (active === true) {
        event.preventDefault();
        rotate(event);
      }
    });
    $(document).bind('touchend', function(event) {
      event.preventDefault();
      stop(event);
      return_b()
    });
  };

  start = function(e) {
    e.preventDefault();
    var bb = this.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x, y;
    center = {
      x: l + (w / 2),
      y: t + (h / 2)
    };
    x = e.touches[0].clientX - center.x;
    y = e.touches[0].clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };
  rotate = function(e) {
    e.preventDefault();
    var x = e.touches[0].clientX- center.x,
      y = e.touches[0].clientY - center.y,
      d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    console.log((angle + rotation)/300)
    // $('.black').css({opacity:Math.abs((angle + rotation)/300)})
    return rot.style.webkitTransform = "rotate(" + (720+angle + rotation) + "deg)";
  };

  stop = function() {
    // angle += rotation;
    return active = false;
    
  };

  init();
function return_b(){
	console.log('h')
  $('#rotate').addClass('animate')
  // $('.black').addClass('animate')
	setTimeout(function(){$('#rotate').removeClass('animate'); }, 1000);
  // setTimeout(function(){$('.black').removeClass('animate'); }, 1000);
	// $('#rotate').css({transform:'rotate(0deg)'})
  // $('.black').css({opacity:0})
}
})
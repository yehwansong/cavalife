(function() {
$( document ).ready(function() {
$( "body" ).click(function() {
  $( ".imgFollow" ).remove();
  });
  $('.text').addClass('text_animate')
  $('.monkey').addClass('monkey_animate')
    
  var w  = window.innerWidth
  var h  = window.innerHeight
  var plate = document.getElementsByClassName('plate')
    window.addEventListener('mousemove', function(e){
           mouse_x = ((e.pageX-w/2)/(w/2))*7
           mouse_y = (e.pageY/h)*150+260
           for (var i = plate.length - 1; i >= 0; i--) {
            plate[i].style.webkitTransform = "perspective(" + mouse_y + "px) rotateX(12deg) translateY(0vh) rotateY(" + mouse_x + "deg) translateZ(-100px)"
           }
    })      
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
      } 
        
      // Add an image to follow the cursor     
      imgFollow = document.createElement('div');
      imgFollow.className = "imgFollow";
      imgFollow.style.left = event.pageX + "px";
      imgFollow.style.top = event.pageY + "px";
      document.body.appendChild(imgFollow);
       
    }
})
})();
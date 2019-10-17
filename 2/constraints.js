$( document ).ready(function() {

    var w = window.innerWidth;
    var h = window.innerHeight;
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: w,
            height: h,
            showAngleIndicator: false,
            wireframes: false,
            wireframeBackground : 'transparent',
            background : 'transparent'
        }
    });
    Render.run(render);
    var runner = Runner.create();
    Runner.run(runner, engine);
    var unit = w*0.95
    var bodyA = Bodies.circle(unit/2, unit/2, unit/2,{
                render: {
                }
    });
    bodyA.restitution = 0.9;
    World.add(world, [bodyA]);
    get_pos()
    function get_pos(){
console.log(bodyA.position.x)
setTimeout(function(){ get_pos() }, 100);        
    }

    World.add(world, [
        Bodies.rectangle(w/2, 0-25, w, 50, { isStatic: true }),
        Bodies.rectangle(w/2, h+25, w, 50, { isStatic: true }),
        Bodies.rectangle(w+25, h/2, 50, h, { isStatic: true }),
        Bodies.rectangle(0-25, h/2, 50, h, { isStatic: true })
    ]);
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                literations:1,
                dampling:0.1,
                angularStiffness: 0,
                render: {
                    visible: false
                }
            }
        });
        engine.world.gravity.y = -0;
    World.add(world, mouseConstraint);
    render.mouse = mouse;
    $('canvas').css({zIndex : '0'})
    $('canvas').css({'pointer-events' : 'none'})

})
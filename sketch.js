const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Pendulum(340,500,"red");
	bob2 = new Pendulum(400,500,"green");
	bob3 = new Pendulum(460,500,"blue");
	bob4 = new Pendulum(520,500,"yellow");
  bob5 = new Pendulum(580,500,"orange");
  
  rope1 = new Sling(bob1.body, { x: 340, y: 200 });
  rope2 = new Sling(bob2.body, { x: 400, y: 200 });
  rope3 = new Sling(bob3.body, { x: 460, y: 200 });
  rope4 = new Sling(bob4.body, { x: 520, y: 200 });
  rope5 = new Sling(bob5.body, { x: 580, y: 200 });

}
 
function draw() {
  background("black");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}
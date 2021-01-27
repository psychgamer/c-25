const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,obj1;

function setup() {
  createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
box3 = new Box(700,240,70,70)
box4 = new Box(920,240,70,70)


ground1=new ground(600,390,25000,20)

pig1 = new pig(810,350)

log1 = new log(810,260,300,PI/2)

bird1 = new bird(300,300)

}
function draw() {
  Engine.update(engine);
  background(155,55,125);  
  box1.display();
  box2.display();
  ground1.display()
  pig1.display();
  log1.display();
  bird1.display();
  box3.display();
  box4.display();
}


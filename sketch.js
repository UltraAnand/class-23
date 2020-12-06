const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,box
var box2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(10,390,800,30);
  box = new Box(400,200,50,50);
  box2 = new Box(400,250,50,50)

}

function draw() {
  background("black");  
  
  ground.display();
  box.display();
  box2.display();
  Engine.update(engine);
}


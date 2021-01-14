const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;

function setup() {
  createCanvas(1000, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  box1 = new Box(400, 100, 50, 50);
  box2 = new Box(450, 100, 50, 50);
  box3 = new Box(500, 100, 50, 50);
  box4 = new Box(550, 100, 50, 50);
  box5 = new Box(600, 100, 50, 50);
  box6 = new Box(425, 50, 50, 50);
  box7 = new Box(475, 50, 50, 50);
  box8 = new Box(525, 50, 50, 50);
  box9 = new Box(575, 50, 50, 50);
  box10 = new Box(450, 0, 50, 50);
  box11 = new Box(500, 0, 50, 50);
  box12 = new Box(550, 0, 50, 50);
  box13 = new Box(475, -50, 50, 50);
  box14 = new Box(525, -50, 50, 50);
  box15 = new Box(500, -100, 50, 50);
 
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  sling = new Slingshot(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  
  box1.display("purple", "black");
  box2.display("purple", "black");
  box3.display("purple", "black");
  box4.display("purple", "black");
  box5.display("purple", "black");
  box6.display("pink", "black");
  box7.display("pink", "black");
  box8.display("pink", "black");
  box9.display("pink", "black");
  box10.display("blue", "black");
  box11.display("blue", "black");
  box12.display("blue", "black");
  box13.display("skyblue", "black");
  box14.display("skyblue", "black");
  box15.display("green", "black");
  
  sling.display("magenta");
  stand1.display();
  ball.display("lavender", "magenta");
  }

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}
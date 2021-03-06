
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottom;
var angle=60;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,400,900,20,ground_options);
  World.add(world,ground);

  ground2 = Bodies.rectangle(100,200,100,10,ground_options);
  World.add(world,ground2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  bottom= createImg("up.png");
  bottom.position(20,30);
  bottom.size(50,50);
  bottom.mouseClicked(force)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  Matter.Body.rotate(ground2, angle)
  
  push();
    translate(ground2.position.x,ground2.position.y)
    rotate(angle);
    rect(0,0,100,10);
    angle+=0.1
  pop();

  

  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
  console.log(ground.position.y);
 
}

function force(){

  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.05});

}
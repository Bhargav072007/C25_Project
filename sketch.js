var ground;
var Ground;
var paper;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	dustbin = new Dustbin(600,500);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 5 , {isStatic:true} );
	 World.add(world, ground);
	 
	
	
   
	//Ground = createSprite(width/2, 665, width, 10 , {isStatic:true});
	//Ground.shapeColor=color("yellow");
	
	paper = new Paper(130,600,15);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
  dustbin.display();
  paper.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) {
	 Body.applyForce(paper.body, paper.body.position, { x: 23, y: -23 });
	 }
	 }



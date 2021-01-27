const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    floor1 = new Box(900,100,70,70);
    floor2 = new Box(900,100,70,70);
    floor3 = new Box(900,100,70,70);
    floor4 = new Box(900,100,70,70);
    floor5 = new Box(900,100,70,70);
    floor6 = new Box(900,100,70,70);
    
    floor7 = new Box(800,725,70,70);
    floor8 = new Box(800,655,70,70);
    floor9 = new Box(800,585,70,70);
    floor10 = new Box(800,515,70,70);
    floor11 = new Box(800,445,70,70);
    floor12 = new Box(800,375,70,70);

    floor13 = new Box(700,725,70,70);
    floor14 = new Box(700,655,70,70);
    floor15 = new Box(700,585,70,70);
    floor16 = new Box(700,515,70,70);
    floor17 = new Box(700,445,70,70);
    floor18 = new Box(700,375,70,70);
    floor19 = new Box(700,305,70,70);
    floor20 = new Box(700,235,70,70);
    
    ball = new Ball(200,200,80,80);
    rope=new Slingshot(ball.body,{x:500,y:50});
    
    ground = new Ground(1500,780,3000,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    floor1.display();
    floor2.display();
    floor3.display();
    floor4.display();
    floor5.display();
    floor6.display();
    floor7.display();
    floor8.display();
    floor9.display();
    floor10.display();
    floor11.display();
    floor12.display();
    floor13.display();
    floor14.display();
    floor15.display();
    floor16.display();
    floor17.display();
    floor18.display();
    floor19.display();
    floor20.display();
    ball.display();
    rope.display();
    
    ground.display();
   
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
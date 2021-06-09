var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var bl1,bl2,bl3,bl4,bl5;
var bl6,bl7,bl8;
var bl9;

var ground;
var stand1,stand2;

var polygon;
var slingShot;

var polygonImg;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    
    world = engine.world;

    ground=new Ground(400,690,800,20);
    World.add(World,ground);
   
    polygon=Bodies.rectangle(120,510,50,50);
    World.add(world,polygon);
    console.log(polygon.position);
    stand1=new Ground(400,550,220,20);
    stand2=new Ground(575,380,180,20);

    block1=new Block(322,520,25,40);
    block2=new Block(348,520,25,40);
    block3=new Block(374,520,25,40);
    block4=new Block(400,520,25,40);
    block5=new Block(426,520,25,40);
    block6=new Block(452,520,25,40);
    block7=new Block(478,520,25,40);

    block8=new Block(347,480,25,40);
    block9=new Block(373,480,25,40);
    block10=new Block(399,480,25,40);
    block11=new Block(425,480,25,40);
    block12=new Block(451,480,25,40);

    block13=new Block(373,440,25,40);
    block14=new Block(399,440,25,40);
    block15=new Block(425,440,25,40);

    block16=new Block(399,400,25,40);
   
    bl1=new Block(520,350,25,40);
    bl2=new Block(546,350,25,40);
    bl3=new Block(572,350,25,40);
    bl4=new Block(598,350,25,40);
    bl5=new Block(624,350,25,40);

    bl6=new Block(546,310,25,40);
    bl7=new Block(572,310,25,40);
    bl8=new Block(598,310,25,40);

    bl9=new Block(572,270,25,40);

    slingShot=new Rope(this.polygon,{x:120,y:510});
    Engine.run(engine);
}
function draw(){
    background(20,210,30);

    textSize(23)
    stroke("red")
    fill("yellow")
    text("Drag the Hexagonal Stone and Release it , to Launch it Towards the Blocks",10,100);
    textSize(25)
    text("Make the Blocks Fall !" ,240,50)
    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    bl1.display();
    bl2.display();
    bl3.display();
    bl4.display();
    bl5.display();
    bl6.display();
    bl7.display();
    bl8.display();
    bl9.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,50,50);
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
       slingShot.attach();
    }
}
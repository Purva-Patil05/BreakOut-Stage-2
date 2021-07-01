var box,ball,paddle
var score=0
var lives=3
var gameState = "serve";
var bg
var restart,restartImage
var gameOver,gameOverImage
var boxGroup

function preload(){
 gameOver=loadImage("gameOver.png")
 bg=loadImage("bg.png")
 restart=loadImage("restart.png")
 }

 function setup(){
     createCanvas(windowWidth,windowHeight)
  paddle=createSprite(width/2,height,150,40);
  paddle.shapeColor="black"
  ball=createSprite(width/2,height/2,30,30);
  ball.shapeColor="pink"

  boxGroup=new Group();
  }
     

  function draw(){
   background(bg)
   paddle.x=mouseX;

  createBoxes(60,"red");
  createBoxes(60+30,"blue");
  createBoxes(60+60,"orange");
  createBoxes(60+90,"yellow");
  createBoxes(60+120,"purple");
 drawSprites()
   }
  
   function createBoxes(y,color){
     //initialize; condition ; increase/decrease
   for(var c=0;c<7;c++){ 
    box=createSprite(150+200*c,y,180,25);
    box.shapeColor=color
    boxGroup.add(box)
  }
    }
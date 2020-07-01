//Global Variables
var M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,monkey_running;
var monkey;
var ground,ground_img;
var banana,banana_img,bananagroup;
var obstaclesGroup, obstacle_img;
var ground,backgroundd,invisible_ground;
var score=0;

function preload(){
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  obstacle_img=loadImage("stone.png");
  banana_img=loadImage("Banana.png")
  backgroundd=loadImage("jungle.jpg")
  
}


function setup() {
  createCanvas(600,400);
 score=0
   
   ground=createSprite(300,200,600,300);
  ground.velocityX=-5
  obstaclesgroup=new Group();
  bananagroup=new Group();
  
  
  //ground.scale=
  ground.addImage("jungle",backgroundd);
    monkey=createSprite(100,350,50,50);
   monkey.addAnimation("m_i",monkey_running);
  monkey.scale=0.08;
  
  
  invisibleground=createSprite(300,390,600,30);
  invisibleground.visible=false;

}

function draw(){
 background(255); 
  if(ground.x<50){
ground.x=300
  
  }
  monkey.collide(invisibleground);
  obstacleSpawn()
   bananaspawn()
  monkey.velocityY=monkey.velocityY+0.8;
  if(keyDown("space")&&monkey.y>340){
  monkey.velocityY=monkey.velocityY=-12;
  }
  
  if(obstaclesgroup.isTouching(monkey)) {
  monkey.scale=0.08;
    obstaclesgroup.destroyEach();
    score=0
  
  }
  if(bananagroup.isTouching(monkey)) {
  bananagroup.destroyEach()
    score=score+1
  }
  switch(score){
    case 10 : monkey.scale=0.09
    break;
    case 20 : monkey.scale=0.1
    break;
    
    case 30 : monkey.scale=0.12
      break;
    case 40: monkey.scale=0.13;  
      break;
    default:break;
      
  
  }
             
  drawSprites();
  text("score"+score,350,100)
}
function obstacleSpawn(){
  if(frameCount%300===0){
    var obstacle=createSprite(400,380,20,20);
   obstacle.addImage("s_img",obstacle_img);
    obstacle.scale=0.15;
    obstacle.collide(invisibleground);
    obstacle.setVelocity(-5,0);
    obstaclesgroup.add(obstacle);
     bananagroup.setLifetimeEach(100);
  }
  
  
}
function bananaspawn(){
  
  if(frameCount%80===0){
    banana=createSprite(390,270,10,10);
    banana.addAnimation("Banana",banana_img);
  banana.scale=0.05;
  banana.setVelocity(-5,0); 
 bananagroup.add(banana);
 bananagroup.setLifetimeEach(100);
  }
    
    
    
  }


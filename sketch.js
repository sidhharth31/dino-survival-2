 
var monkey , dino_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
var ground;
var obstacle;
var gameover;

function preload(){
  
  
  dino_running =            loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png")
  
  
  bananaImage = loadImage("apppkle-removebg-preview.png");
  obstacleImage = loadImage("obstacle.png")

                            


 
}



function setup() {
  createCanvas (600,600)
  
 ground=createSprite(0,0,800,800) ;
 ground.scale = 1.5
 ground.x = ground.width/2 
 ground.velocityX = -4 
  
  
  
  
  
  
  
  monkey = createSprite (100,500, 20, 20)
  monkey.addAnimation("monkey_running", dino_running);
  monkey.scale = 0.2;
  
  //obstacle = createSprite(300,500,20,20)
 
  
  ground = createSprite(100,570,600,20);
  ground.x = ground.width /2;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  
  score = 0;
  
  
}


function draw() {
background ("yellow")
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    spawnObstacles();
    spawnBanana();
  
     
   
    if(monkey.isTouching(bananaGroup)){      monkey.velocityY = 0       
        
    }
  
  
   if(keyDown("space") && monkey.y >= 300) {
        monkey.velocityY = -12;
    }
  
  
      if (bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
      score=score+1
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
   monkey.collide(ground); 
  
  drawSprites();
  
  fill("white")
 text("Score: "+ score, 500,50);
  
  fill("black")
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50)
}



function spawnObstacles(){
 if (frameCount % 150 === 0){
   var obstacle = createSprite(500,530,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   
   
    //generate random obstacles
    var rand = Math.round(random(1));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.25;
    obstacle.lifetime = 500;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
   
   
   
     //adjust the depth
          
   
   
 if(obstacle.isTouching(monkey)){
   monkey.velocityY = 0
 }
  
    
 }
  
  
  
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(250,300));
    banana.addImage(bananaImage);
    banana.scale = 0.3;
    banana.velocityX = -3;
    
   
      //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    
    
  }
  
    


}
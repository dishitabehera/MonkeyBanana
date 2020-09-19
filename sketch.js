
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var invisibleGround
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(300,390,10,20);
  monkey.addAnimation("running", monkey_running);  
  monkey.scale = 0.1;
  ground = createSprite(300,400,1000,10);
  invisibleGround = createSprite(300,400,600,10);
  invisibleGround.visible = false;

  score = 0;
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  background(220);
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  text("Survival Time: "+ score, 500,50);
  ground.velocityX = -4;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround);
  
  score = score + Math.round(frameCount/60);
  drawSprites();
  
  Obstacle();
  Food();
}

function Food(){
  if (frameCount % 80 === 0) {
  banana = createSprite(20,150,10,20);
  banana.y = Math.round(random(300,200));
  banana.addImage(bananaImage);
  banana.velocityX = 4;
  banana.lifetime = 220;
  banana.scale = 0.1;
  FoodGroup.add(banana);
  }
}


function Obstacle(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(390,400,10,20);
    obstacle.addImage(obstaceImage);
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
  }
}


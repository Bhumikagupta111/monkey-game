      var monkey , monkey_running,monkeysound;
      var banana ,bananaImage, obstacle, obstacleImage
      var FoodGroup, obstacleGroup
      var score;
      var ground
      var survivaltime;


function preload(){
     monkey_running =                 loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

        bananaImage = loadImage("banana.png");
        obstaceImage = loadImage("obstacle.png");
  monkeysound=loadSound("monkey1(1).mp3");
}



function setup() {

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;


  FoodGroup=createGroup();
  obstacleGroup=createGroup();
      }


function draw() {
    background(255);
    
    survivaltime =Math.ceil(frameCount/frameRate());
    text("Survival time: "+ survivaltime, 200,50);
    if(ground.x<0) {
    ground.x=ground.width/2;
    }
  
    if(keyDown("space"))  {
    monkey.velocityY=-12;
    monkeysound.play();
    }  
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);

   if(frameCount%60 === 0) {
                    banana=createSprite(300,Math.round(random(120,200)),100,100);
 banana.addImage("banana1",bananaImage);
 banana.scale=0.1;
 banana.velocityX=-7;
 banana.lifetime=300;
 FoodGroup.add(banana);
        }  
if (frameCount%300===0) {
          obstacle=createSprite(300,330,100,50);
          obstacle.addImage("rocks",obstaceImage);
          obstacle.scale=0.1;
          obstacle.velocityX=-3;
          obstacleGroup.add(obstacle);   
      }
       obstacleGroup.depth= monkey.depth
      if(obstacleGroup.isTouching(monkey)) {
      background("black");
      monkey.velocityX=0;
      banana.velocityX=0;
      obstacle.velocityX=0;
      survivaltime=0;
      monkey.velocityY=0;
      text("monkey has been caught",200,200);
      stroke("white");
      textSize(100);
        FoodGroup.destroyEach();
        
    }
if(monkey.isTouching(FoodGroup)) {
  FoodGroup.destroyEach();
}

      drawSprites();
      }







var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score
var ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {

  createCanvas(600, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.25;

  ground = createSprite(300, 380, 9000, 20);
  ground.x = ground.width / 2;
  ground.velocityX = -6

  FoodGroup = new Group();
  obstacleGroup = new Group();

  score = 0;
  
}


function draw() {

  background(255);
  
  textSize(20);
  fill("black")
  text("Survival Time : "+ score, 250,50);
  score = score + Math.round(getFrameRate()/60);
  
  console.log(frameCount);
  
  monkey.collide(ground);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8
  
  obstacleGroup.collide(monkey);

  
  fruit();

  obstacles();

  drawSprites();

}

function fruit() {

  if (frameCount % 80 === 0) {
    banana = createSprite(600, 100, 40, 10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120, 200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 240;
    FoodGroup.add(banana);
  }



}

function obstacles() {

  if (frameCount % 300 === 0) {
    obstacle = createSprite(600, 330, 40, 10);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 240;
    obstacleGroup.add(obstacle);
  }



}

var sea,ship;
var seaImg,shipImg;
var  ground_thingy;
var  ground_thingy2;
var bullet;
var bulletImg;
var score = 0;
var end=false;

function preload(){

  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");
  bulletImg = loadImage("bullet.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  bullet=createSprite(400,51);
  bullet.addImage(bulletImg);
  bullet.scale=0.02;

  
  ship = createSprite(130,200,20,30);
  ground_thingy = createSprite(200,369,400,10);
  ground_thingy.visible = (false);

  ground_thingy2 = createSprite(200,51,400,10);
  ground_thingy2.visible = (false);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  if(end) {
    text("your score is: " +score,200,200,200,200);
    textSize(800);
    text.shapeColor = "black";  
  } else {
    ship.collide(ground_thingy);
    ship.collide(ground_thingy2);

    if(keyDown("space")) {
      ship.velocityY = ship.velocityY - 5; 
      console.log("oof");
    }

    background(255);
    sea.velocityX = -3;

    if(sea.x < 0){
      sea.x = 0;
      sea.x = sea.width;
      sea.x = sea.width/8;
    }

    bullet.velocityX = -10;

    if(bullet.x < 0){
      score++;
      bullet.x = 0;
      bullet.x = sea.width;
      bullet.x = sea.width/8;
      //bullet.y is between 369 and 51
      var y_diff = 369-51;
      var rand = Math.random();
      bullet.y = rand * y_diff + 51;
      console.log("rand: "+rand+"\ty: "+bullet.y);
    }
    if(bullet.isTouching(ship)) {
      console.log("touching_ship_uwu");
      bullet.visible = false;
      sea.visible = false;
      ship.visible = false;
      end = true;
    }

    ship.velocityY = ship.velocityY + 0.8;
  
    drawSprites();
  }
}
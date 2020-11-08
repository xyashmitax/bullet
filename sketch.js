var bullet, wall;
var speed,weight,thicc;

function setup() {
  createCanvas(800,400);

  speed=random(223,321);
  weight=random(30,50);
  thicc=random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor= color(225);

  wall = createSprite(700,200,thicc,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  

  


  /*if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  var deformation=0.5 * weight * speed * speed/22509
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation > 100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=color(0,225,0)
    }
  }*/

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thicc*thicc*thicc);

    if(damage>10)
    {
      wall.shapeColor = color(225,0,0);
    }    

    if(damage<10){
      wall.shapeColor = color(0,225,0);
  }
  }
  
  bullet.collide(wall);
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge>= wallLeftEdge){
    return true
  }
  return false;
}
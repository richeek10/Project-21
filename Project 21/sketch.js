var bullet,Wall;
var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);

 
    thickness=random(22,83);
	speed=random(223,321)
	weight=random(30,52)


	bullet=createSprite(30, 15, 50,50);   
    bullet.velocityX = speed;
    bullet.shapeColor=color(178,34,34);


  
  	Wall=createSprite(1200,00,thickness, height/2)
  	Wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(hasCollided(bullet, Wall))
  {
bullet.velocityX=0;
var damage=0.5 * weight* speed* speed/(thickness *thickness *thickness);


if(damage>10)
{
wall.shapeColor=color(255,0,0);

}

if(damage<10)
{
  Wall.shapeColor=color(0,255,0);
  
}
  }
  
  
  drawSprites();
}

function hasCollided(lbullet, lWall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  WallLeftEdge=Wall.x;
  if (bulletRightEdge >=WallLeftEdge)
  {
    return true
  }
  return false;

}

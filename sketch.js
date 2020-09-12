var wall, thickness;
var  bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  bullet = createSprite(50, 200, 60, 20);
  wall = createSprite(1200, 200, thickness, height/2);

  wall. shapeColor = color(80, 80, 80);
  bullet.shapeColor = "white";

  speed = random(223, 321);
  weight = random(30, 52);
 }
function draw() {
  background(0,0,0);
  
  bullet.velocityX = speed;
   if(hasCollided(bullet, wall))
   {
     bullet.velocityX = 0
     var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

     if(damage > 10)  
     {
          wall.shapeColor = "red"; 

     }

     if(damage < 10)  
     {
          wall.shapeColor = "green";

     }
       
   }
  drawSprites();
 }

 function hasCollided(Lbullet, Lwall)
{
    bulletRightEdge = Lbullet.x + Lbullet.width;
    wallLeftEdge = Lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    return false;
  }
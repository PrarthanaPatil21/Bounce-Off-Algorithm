var fixedRect, movingRect;
var obj1, obj2, obj3, obj4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(400, 250, 50, 50);
  obj2 = createSprite(750, 250, 50, 50);
  obj1.velocityX = 7;
  obj2.velocityX = -7;
  obj3 = createSprite(600, 500, 60, 60);
  obj4 = createSprite(600, 200, 60, 60);
  obj3.velocityY = -6;
  obj4.velocityY = 6;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(obj1, obj2);
  bounceOff(obj3, obj4);
  bounceOff(fixedRect, movingRect); 
  drawSprites();
}


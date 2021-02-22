var fixedRect, movingRect;
var fixedRect1;
var fixedRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1=createSprite(100,100,80,80);
  fixedRect1.shapeColor="yellow";
  fixedRect1.debug=true;
  fixedRect2=createSprite(300,250,80,80);
  fixedRect2.shapeColor="cyan";
  fixedRect2.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if ( isTouching(movingRect,fixedRect) )
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 if (isTouching(movingRect,fixedRect1))
 {
   movingRect.shapeColor="Blue";
   fixedRect1.shapeColor="blue";
 }
  
 else {
  movingRect.shapeColor="green";
  fixedRect1.shapeColor="yellow";
 }
 if (isTouching(movingRect,fixedRect2))
 {
   movingRect.shapeColor="Blue";
   fixedRect2.shapeColor="red";
 }
  
 else {
  movingRect.shapeColor="green";
  fixedRect2.shapeColor="cyan";
 }
  drawSprites();
}

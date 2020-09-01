var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;


  gameObject1 = createSprite(600, 400, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(800, 400, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(1000, 400, 50, 50);
  gameObject3.shapeColor = "green";

  movingRect.velocityX = 5;
  fixedRect.velocityX=-5;

}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // passing values in the function call
  if(isTouching(movingRect, gameObject3)){
    // if istouching returns true
    movingRect.shapeColor = "red";
    gameObject3.shapeColor= "red";
  }else{
     // if istouching returns false
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }


  bounceOff(movingRect, fixedRect)
  drawSprites();
}


//parameterized functions

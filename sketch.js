// declaring variables

var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var player;
var grassHeight = 100;
var gameState = "play";
var carAnimation1, carAnimation2, logAnimation, playerAnimation;
var school;

//function to load images, animation, sounds, etc..
function preload()
{
  carAnimation1 = loadAnimation("car1.png");
  carAnimation2 = loadAnimation("car2.png");
  logAnimation = loadAnimation("log2.png");
  playerAnimation = loadAnimation("Player-03.png");
}

//setup function
function setup() {

  //creating the canvas
  createCanvas(displayWidth,700);

   //creating Grasses for player's rest
 for (var i = 0; i < 6; i++){

  var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
  if (i % 2 === 0)
  {
    var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
    road.shapeColor = "black";    
  }
  bottomGrass1.shapeColor = "green";
}

//creating car rows
for (var i = 0; i < 40; i++){
  cars = new Car(2);
 
}

//creating log rows
for (var i = 0; i < 40; i++){
  logs = new Log(2);
 
}

  //creating player object of Player class
  player = new Player(width/2, height-25);

  //creating carGroup1 and logGroup1
  carGroup1 = new Group();
  logGroup1 = new Group();

 }

 // draw function
function draw() {

  //giving background color as skyblue
  background("skyblue");

  //moving the player with screen
  translate(0,-player.spt.y+height-150);

//making the logs reappear
for (i = 1; i < logGroup1.length; i++){
   if (logGroup1[i].x < 0)
   {
     logGroup1[i].x = width;
   }
  }  

//making the cars reappear 
for (i = 1; i < carGroup1.length; i++){
    if (carGroup1[i].x < 0)
    {
      carGroup1[i].x = width;
    }   

}

if (carGroup1.isTouching(player.spt)){
  player.spt.x = width/1;
  player.spt.y = height-75;
}

if (logGroup1.isTouching(player.spt)){
  player.spt.x = player.spt.x-3;
}
else if ((player.spt.y > height-1550 && player.spt.y < height-1300)||
        (player.spt.y < height-500 && player.spt.y > height-850)||
        (player.spt.y > height)||
        (player.spt.x < 0)||
        (player.spt.x > width)){

          player.spt.x = width/2;
          player.spt.y = height-75;
}

carGroup1.add(cars.spt);
logGroup1.add(logs.spt);

//calling fubnction keyPressed
keyPressed();

//drawing all the sprites
drawSprites();

}

//keyPressed function;
function keyPressed()
{
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
}
var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  
  movingrect=createSprite(200,150,60,40);
  movingrect.shapeColor = "violet";
  movingrect.debug=true;

  fixedrect=createSprite(300,150,60,40);
  fixedrect.shapeColor="blue";
  fixedrect.debug=true;
}

function draw() {
  background("black");  

  movingrect.y=mouseY;
  movingrect.x=mouseX;
  
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor= "red";
  }
  else{
    movingrect.shapeColor = "violet";
    fixedrect.shapeColor= "blue";
  }


  drawSprites();
}
var fixedrect, movingrect,object1,object2;




function setup() {

  createCanvas(1000,800);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300,200,40,40);

  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"

  object1 = createSprite(500,300,50,50);
  object2 = createSprite(200,400,50,50);

  object1.shapeColor = "green";
  object2.shapeColor = "green";
  


}
     
function draw() {
  background(255,255,255); 
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  console.log(movingrect.x - fixedrect.x);
if(isTouching(movingrect,object2)){
  movingrect.shapeColor = "red";
    object2.shapeColor = "red";
  
}
else{movingrect.shapeColor = "green"
object2.shapeColor = "green"

}
 






  drawSprites();
}
function isTouching(a,b){
  if(a.x - b.x <= b.width/2 + a.width/2&&b.x - a.x <= b.width/2 + a.width/2&&a.y - b.y <= b.height/2 + a.height/2&&b.y -a.y <= b.height/2 + a.height/2){
    return true

    
  }
  else{
    return false
  };
  

}
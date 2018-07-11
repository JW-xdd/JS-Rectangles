var rectangleX = 20;
var rectangleY = 20;

var circleX = 50;
var circleY = 300;
var radius = 8;

var previousX = 0;
var previousY = 0;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rec = new Array (10);

//making the bottom left the origin
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

//initial position of the circle
ctx.beginPath();
ctx.arc(circleX,circleY,radius,0,2*Math.PI);
ctx.stroke();

//rectangle class
class Rectangle{
  constructor (xcoordinate, ycoordinate, height, width){
    this.xcoordinate=xcoordinate;
    this.ycoordinate=ycoordinate;
    this.height=height;
    this.width=width;
  }

  collision(x,y,r){
    if (y+r < this.ycoordinate || y-r > (this.ycoordinate + this.height)
        || (x+r) < this.xcoordinate || (x-r) > (this.xcoordinate + this.width)) {
        return false;
     }
     else {
        return true;
      }
  }
}

//draw rectangles
for (let x = 0; x < 10; x++){
  var height = Math.floor((Math.random() *50) + 30);
  var width = Math.floor((Math.random()*50)+30);
  ctx.fillRect(rectangleX,rectangleY,height,width);
  rec[x] = new Rectangle(rectangleX,rectangleY, width, height);
  rectangleX += width+30;
  rectangleY += height+20;
}

//check collisions
function collisionChecker(){
  for (let i =0; i < rec.length; i++){
    if(rec[i].collision(circleX,circleY, radius)){
      window.alert("COLLISION with rectangle "+i);
      return true;
    }
  }
}

//Recognizing W,A,S,D
document.addEventListener('keydown', function(event) {
  previousX = circleX;
  previousY = circleY;
  if(event.keyCode == 87) {
      circleY+= 10;
  }
  else if(event.keyCode == 83) {
      circleY-= 10;
  }
  else if(event.keyCode == 65){
      circleX-= 10;
  }
  else if(event.keyCode == 68){
      circleX+= 10;
  }

  if (collisionChecker()){
    circleX = previousX;
    circleY = previousY;
  }
  else{
    ctx.clearRect(previousX-radius-1, previousY-radius-1, radius*2+2, radius*2+2 );
    ctx.beginPath();
    ctx.arc(circleX,circleY,radius,0,2*Math.PI);
    ctx.stroke();
  }

});

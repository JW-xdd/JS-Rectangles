var posx = 20;
var posy = 20;

var psx = 50;
var psy = 300;

var radius = 8;


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rec = [];

ctx.translate(0, canvas.height);
ctx.scale(1, -1);

ctx.beginPath();
ctx.arc(psx,psy,radius,0,2*Math.PI);
ctx.stroke();

class Rectangle{
  constructor (xcoordinate, ycoordinate, height, width){
    this.xcoordinate=xcoordinate;
    this.ycoordinate=ycoordinate;
    this.height=height;
    this.width=width;
  }

  collision(){
    var dx = psx - Math.max(this.xcoordinate, Math.min(psx, this.xcoordinate + this.width))
    var dy = psy - Math.max(this.ycoordinate, Math.min(psy, this.ycoordinate + this.height))
    return dx*dx + dy*dy < radius * radius;
  }
}


for (let x = 0; x < 10; x++){
  var height = Math.floor((Math.random() *50) + 1);
  var width = Math.floor((Math.random()*50)+1);
  ctx.fillRect(posx,posy,height,width);
  rec.push(new Rectangle(posx,posy,height,width));
  posx += width+30;
  posy += height+20;
}


document.addEventListener('keydown', function(event) {
  if(event.keyCode === 87) {
      ctx.clearRect(psx-radius-1, psy-radius-1, radius*2+2, radius*2+2 );
      psy+= 10;
      ctx.beginPath();
      ctx.arc(psx,psy,radius,0,2*Math.PI);
      ctx.stroke();
      console.log(psx,psy);
      for (let i =0; i < 10; i++){
        if((rec[i].collision())){

          window.alert("COLLISION"+i);
        }
      }
  }
  if(event.keyCode === 83) {
      ctx.clearRect(psx-radius-1, psy-radius-1, radius*2+2, radius*2+2 );
      psy-= 10;
      ctx.beginPath();
      ctx.arc(psx,psy,radius,0,2*Math.PI);
      ctx.stroke();
      console.log(psx,psy);
      for (let i =0; i < 10; i++){
        if((rec[i].collision())){
          window.alert("COLLISION"+i);
        }
      }
  }
  if(event.keyCode === 65){
      ctx.clearRect(psx-radius-1, psy-radius-1, radius*2+2, radius*2+2 );
      psx-= 10;
      ctx.beginPath();
      ctx.arc(psx,psy,radius,0,2*Math.PI);
      ctx.stroke();
      console.log(psx,psy);
      for (let i =0; i < 10; i++){
        if((rec[i].collision())){
          window.alert("COLLISION"+i);
        }
      }
  }
  if(event.keyCode === 68){
      ctx.clearRect(psx-radius-1, psy-radius-1, radius*2+2, radius*2+2 );
      psx+= 10;
      ctx.beginPath();
      ctx.arc(psx,psy,radius,0,2*Math.PI);
      ctx.stroke();
      console.log(psx,psy);
      for (let i =0; i < 10; i++){
        if((rec[i].collision())){
          window.alert("COLLISION"+i);
        }
      }
    }
});

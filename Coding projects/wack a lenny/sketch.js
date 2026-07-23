let d;
let x;
let y;
let size;
let r;
let g;
let b;
let timer;
let scoreboard;
function setup() {
  createCanvas(400, 400);
  size=60
  x=200
  y=200
  r=161
  g=136
  b=127
  timer=5
  scoreboard=0
}


function draw() {
  background("green");
  noStroke()
  push()
  stroke(121, 85, 72 )
  strokeWeight(12)
  textSize(30)
  
  fill("yellow")
  text("ᗯᗩᑕK-ᗩ-ᒪEᑎᑎY",85,46)
  pop()
//dirt
  fill(93, 64, 55)
square(65,73,270)
 //fence 
 fill(244,164,96) 
 rect(63,61,271,10)
  rect(63,63,10,281)
  rect(63,340,271,10)
  rect(332,61,10,288)
//scenery
fill("grey")
  ellipse(146,397, 55, 70);
  fill("lightgrey")
  ellipse(165,397,55,40)
  fill("lightgreen")
  quad(30, 185, 30,185, 21, 220, 31, 220, );
 quad(10,165,10,165,1,200,11,200)
  quad(366,212,366,212,356,240,365,240)
  
//counter and scoreboard
  push()
  fill(255)
  stroke(4)
  square(20,360,50)
  square(330,360,50)
  pop()
//mole
  fill(r,g,b)
  circle(x,y,size)
  fill("black")
  textSize(12)
  text("( ͡° ͜ʖ ͡°)",x,y)
  //wacker
  textSize(50)
  text("🔨",mouseX,mouseY)

console.log(mouseX,mouseY)
  //timer and scoreboard
  fill("black")
  textSize(20)
 text(timer,43,387)
  text(scoreboard,350,387)
   if (frameCount % 60 == 0 && timer > 0){timer --;}
    if(timer==0){
x=random(85,320)
y=random(90,325)
r=161
  g=136
  b=127
  scoreboard=0
  
timer=5

}
}

  
  function mousePressed(){
   let d = dist(mouseX,mouseY,x,y) 
    if (d<size/2){
x=random(85,320),
y=random(90,300),
scoreboard+=1
}
  
if(d<size/2){
r=random(255)
g=random(255)
b=random(255)
}
  }
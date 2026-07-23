let img;
let c;
let x;
let y;
let c1
function preload(){
  img=loadImage("howls.jpeg")
}

function setup() {
  createCanvas(img.width,img.height);
image(img,0,0,800,500)
 loadPixels()
  x=int(random(width))
  y=int(random(height))
  
}
function draw() {
  noStroke()
 for(let i = 0; i < 50; i++){
let x = random(width)
 let y = random(0,height)
   c=get(x,y) 
  fill(c)

  circle(x,y,13)
}
}
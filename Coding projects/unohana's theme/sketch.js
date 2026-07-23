let song;

let fft;

let waves;
let x,y;
let r,g,b;
let wave;
let counter;
let timer;
let w,s;
let e,t;
let c,c2;


function preload(){

  song = loadSound("Unohana.mp3")
}



function setup(){
// createCanvas(400,400);  
createCanvas(windowWidth, windowHeight);
counter=0
timer=10  
w=245
s=0  
e=0  
t=0  
c=width*.3
c1=0  

//  noStroke()

  song.play()

  fft = new p5.FFT() 

 fft.setInput(song)


}



function draw() {
 background(w,w,w);
//  console.log(mouseX,mouseY) 
push()  
 //people 
 fill(255) 
 noStroke()
  quad(width*.08,height*.88,width*.053,height,width*.19,height,width*.16,height*.88)   
circle(width*.12,height*.83,width*.13)
circle(width*.13,height*.9,width*.05)
 quad(width*.32,height*.88,width*.29,height,width*.43,height,width*.4,height*.88)   
circle(width*.36,height*.83,width*.13)

  quad(width*.55,height*.88,width*.52,height,width*.66,height,width*.63,height*.88)   
circle(width*.59,height*.83,width*.13)

  quad(width*.80,height*.88,width*.77,height,width*.91,height,width*.88,height*.88)   
circle(width*.84,height*.83,width*.13)
  //eyes
  fill(e,t,t)
circle(width*.09,height*.8,width*.02) 
circle(width*.15,height*.8,width*.02)
  
circle(width*.33,height*.8,width*.02)
circle(width*.39,height*.8,width*.02)  
circle(width*.56,height*.8,width*.02)
circle(width*.62,height*.8,width*.02)
circle(width*.81,height*.8,width*.02)
 circle(width*.87,height*.8,width*.02)
pop()  
 stroke(s) 
  noFill()
  wave= fft.analyze()

  waves= fft.waveform()
  beginShape()
 for(let i=0;i<width;i++){
  let index= floor(map(i,0,width,0,waves.length)) 
  x=i
  y=waves[index] * 100 +height*.4
 
 vertex(x,y)
 }
 endShape() 
 

//   waves = fft.analyze()
// console.log(mouseX,mouseY)
  


  
push()
//  for(let i=0; i< 300; i++){
stroke(wave[1]*4)

 r = wave[400]*10

 g = wave[300]*.2

 b = wave[300]*height/500

    fill(r,g,b)
//orbs
circle(width*.25,height*.4,wave[300]*-height/500)
circle(width*.75,height*.4,wave[300]*-height/500)   
  
circle(width/2,height*.4,wave[300]*-height/250)

  
 //mouths   
    fill(0)
 ellipse(width*.36,height*.86,wave[300]*-height/1500)   
ellipse(width*.59,height*.86,wave[300]*-height/1500)
circle(width*.84,height*.86,wave[300]*-height/1050)
circle(width*.12,height*.86,wave[300]*-height/1300)  
pop()

  counter+=.10
text(timer,0,height*3)
 if (frameCount % 60 == 0 && timer > 0){timer --;}
    if(timer==0){ 
 w-=1
 e+=3
 t+=.3   
      
      
if(w<0){
 s=245  
  e=189
  t=34

  
  
}
} 
}








//Resizing Window Code

 function mousePressed() {

   if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
     let fs = fullscreen();

    fullscreen(!fs);

   }

}



function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


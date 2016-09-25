var circ = []; // array of ellipses
var circ2 = []; // array of ellipses
var circ3 = []; // array of ellipses
var numCircs = 100;
var x;
var y;
var theta = 0;
var theta2 = 0;
var backopacity = 2;
function setup() {
  createCanvas(600,600);
  for(var i=0; i<numCircs; i++){
    circ.push(new Circ());
    circ2.push(new Circ2());
    circ3.push(new Circ2());
  }
}

function draw() {
  mapR = map(noise(theta+50),-1,1,0,255);
  mapG = map(cos(theta),-1,1,0,100);
  mapB = map(noise(theta+10),-1,1,0,255);
  background(mapR,mapG,mapB,backopacity);
  for(var i=0; i<numCircs; i++){
    circ[i].move();
    circ[i].display();
    circ2[i].move();
    circ2[i].display();
    circ3[i].move();
    circ3[i].display();
  }
  if((theta<=0 || theta<=360)&&(theta2<=0||theta2<=360)){
    theta+=.05;
    theta2+=.05;
  }
  else{
    theta = 0;
    theta2= 0;
  }
}

function Circ(){
  this.tempy = random(height);
  this.y = cos(theta);
  this.x = random(width);
  this.r = 5;
  this.opacity = (random(150,255))
  
  this.move = function(){
    this.y = this.tempy+ map(cos(theta),-1,1,0+this.r,height-(this.tempy+height/2+this.r*2));
    this.x+=noise(theta);
    if(this.x+this.r>=width+520){
      this.x=0;
    }
  } 
  this.display = function(){
    noStroke();
    fill(115,0,200,this.opacity);
    ellipse(this.x,this.y,this.r,this.r);
  }
}
function Circ2(){
  this.tempy = random(height);
  this.y = cos(theta2);
  this.x = random(width);
  this.r = 5;
  this.opacity = (random(150,255))
  
  this.move = function(){
    this.y = this.tempy+ map(noise(theta2),-1,1,0+this.r,height-(this.tempy+height/2+this.r*2));
    this.x+=noise(theta);
    if(this.x+this.r>=width+520){
      this.x=0;
    }
  } 
  this.display = function(){
    noStroke();
    fill(115,0,200,this.opacity);
    ellipse(this.x,this.y,this.r,this.r);
  }
}
function Circ3(){
  this.tempy = random(height);
  this.y = cos(theta);
  this.x = random(width);
  this.r = 5;
  this.opacity = (random(150,255))
  
  this.move = function(){
    this.y = this.tempy+ map(cos(theta),-1,1,0+this.r,height-(this.tempy+height/2+this.r*2));
    this.x+=noise(theta);
    if(this.x+this.r>=width+520){
      this.x=0;
    }
  } 
  this.display = function(){
    noStroke();
    fill(115,0,200,this.opacity);
    ellipse(this.x,this.y,this.r,this.r);
  }
}
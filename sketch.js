//coordinates of line endpoints
var x1;
var x2;
var y1;
var y2;

//number of lines
var numLines = 12;
//x2-x1 or y2-y1
var difference = 250;

var i = 0;

//array of lines
var lines = [];
//array of intersect values
//var intersects = [];

// start of functions
function setup() {
  createCanvas(720,480);
  
  //create each object
  for (var i = 0; i< numLines; i++){
    x1 = random(width);
    if(x1 < width-difference){
      x2 = random(x1+difference);
    }
    else{
      x2 = random(x1-difference);
    }
    y1 = random(height);
    if(y1 < height-difference){
      y2 = random(y1+difference);
    }
    else{
      y2 = random(y1-difference);
    }
    
    lines[i] = new Line(x1,y1,x2,y2);
    //lines[i] = randomGen();
  }
}

function draw() {
  background(238,190,248);
  //update and display each line in the array
  for (var i = 0; i<lines.length; i++){
    lines[i].display();
  }
}

function mouseClicked(){
  for (var i = 0; i< numLines; i++){
    x1 = random(width);
    if(x1 < width-difference){
      x2 = random(x1+difference);
    }
    else{
      x2 = random(x1-difference);
    }
    y1 = random(height);
    if(y1 < height-difference){
      y2 = random(y1+difference);
    }
    else{
      y2 = random(y1-difference);
    }
    
    lines[i] = new Line(x1,y1,x2,y2);
  }
}

/*
//Solve for point of intersection
function intersectSolver()

for(i=0; i<lines.length; i++){

  LineA=lines[i];
  LineB=lines[i+1];
  
  var unknownA = ((LineB.x2-LineB.x1)*(LineA.y1-LineB.y1)-
                 (LineB.y2-LineB.y1)*(LineA.x1-LineB.x1))/
                 ((LineB.y2-lineB.y1)*(LineA.x2-LineA.x1)-
                 (LineB.x2-LineB.x1)*(LineA.y2-LineA.y1));
                
  var unknownB = ((LineA.x2-LineA.x1)*(LineA.y1-LineB.y1)-
                 (LineA.y2-LineB.y1)*(LineA.x1-LineB.x1))/
                 ((LineB.y2-lineB.y1)*(LineA.x2-LineA.x1)-
                 (LineB.x2-LineB.x1)*(LineA.y2-LineA.y1));
                 
  var intersectX = LineA.x1 + unknownA(LineA.x2-LineA.x1);
  var intersectY = LineA.y1 + unknownA(LineA.y2-LineA.y1);
  
  intersects[i] += (intersectX,intersectY)
                
//draw ovals to show intersection
function highlightIntersect(){
  for(i=0; i<lines.length; i++){
    (var x, var y) = intersects[i];
    ellipse(x,y,50,50)
  }
}
}
*/
                
function Line(tempX1,tempY1,tempX2,tempY2){
  //set initial values for properties
  this.x1 = tempX1;
  this.x2 = tempX2;
  this.y1 = tempY1;
  this.y2 = tempY2;
  
  this.display = function(){
    line(this.x1,this.y1,this.x2,this.y2);
    
  }
}


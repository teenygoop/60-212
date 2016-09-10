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
var intersects = [];
//array of ellipses
var ellipses = [];

//intersect variables
var intersectX;
var intersectY;

// start of functions
function setup() {
  createCanvas(720,480);

  //create each line object
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

function draw() {
  background(238,190,248);
  //update and display each line in the array
  for (var i = 0; i< lines.length; i++){
    lines[i].display();
  }
  intersectSolver();
  
  for(var i = 0; i< ellipses.length; i++){
    ellipses[i].display();
    
  }
}


function mouseClicked(){
  lines = [];
  intersects = [];
  ellipses = [];

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
  
//Solve for point of intersection
function intersectSolver(){

  for(var i=0; i < lines.length; i++){
    for(var j=i+1; j < lines.length;j++){
      var LineA=lines[i];
      var LineB=lines[j];
  
      var unknownA = ((LineB.x2-LineB.x1)*(LineA.y1-LineB.y1)-
                     (LineB.y2-LineB.y1)*(LineA.x1-LineB.x1))/
                     ((LineB.y2-LineB.y1)*(LineA.x2-LineA.x1)-
                     (LineB.x2-LineB.x1)*(LineA.y2-LineA.y1));
                
      var unknownB = ((LineA.x2-LineA.x1)*(LineA.y1-LineB.y1)-
                     (LineA.y2-LineB.y1)*(LineA.x1-LineB.x1))/
                     ((LineB.y2-LineB.y1)*(LineA.x2-LineA.x1)-
                     (LineB.x2-LineB.x1)*(LineA.y2-LineA.y1));
                 
      //if((ua>=0.0) && (ua <=1.0) && (ub>= 0.0) && (ub<= 1.0)) * reference: Golan's explanation              
      if ((unknownA >= 0.0) && (unknownA <= 1.0) && (unknownB >= 0.0) && (unknownB<= 1.0)){
                 
        intersectX = LineA.x1 + unknownA*(LineA.x2-LineA.x1);
        intersectY = LineA.y1 + unknownA*(LineA.y2-LineA.y1);
        
        storeCoordinate(intersectX,intersectY, intersects);
      }
    }
  }
}
  
function storeCoordinate(xVal,yVal){
  intersects.push([xVal,yVal]);
  
  //create an array of ellipses
  for(i=0; i<intersects.length; i++){
    var interX = intersects[i][0];
    var interY = intersects[i][1];
    ellipses[i] = new Ellipse(interX,interY);
  }
}  
function Ellipse(tempX1,tempY1){
  this.x1 = tempX1;
  this.x2 = tempY1;
  this.r = 10;
  
  this.display = function(){
    fill(0,255,0);
    ellipse(this.x1,this.x2,this.r,this.r);
  } 
 }
// start of functions
void setup(){
  size(720,480);
  
  //coordinates of line endpoints
  int x1;
  int x2;
  int y1;
  int y2;

  //number of lines
  int numLines = 12;
  //x2-x1 or y2-y1
  int difference = 250;

  int i = 0;

  //array of lines
  int[] lines;

  //create each object
  for (int i = 0; i< numLines; i++){
    
    x1 = int(random(width));
    if(x1 < width-difference){
      x2 = int(random(x1+difference));
    }
    else{
      x2 = int(random(x1-difference));
    }
    y1 = int(random(height));
    if(y1 < height-difference){
      y2 = int(random(y1+difference));
    }
    else{
      y2 = int(random(y1-difference));
    }
    lines[i] = new Line(x1,y1,x2,y2);
  }
}


void draw() {
  background(238,190,248);
  //update and display each line in the array
  for (int i = 0; i<lines.length; i++){
    lines[i].display();
  }
}

void mouseClicked(){
  for (int i = 0; i< numLines; i++){
    x1 = int(random(width));
    if(x1 < width-difference){
      x2 = int(random(x1+difference));
    }
    else{
      x2 = int(random(x1-difference));
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

void Line(tempX1,tempY1,tempX2,tempY2){
  //set initial values for properties
  this.x1 = tempX1;
  this.x2 = tempX2;
  this.y1 = tempY1;
  this.y2 = tempY2;
  
  this.display = function(){
    line(this.x1,this.y1,this.x2,this.y2);
  }
}
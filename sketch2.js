function setup() {
  createCanvas(600,600);
  background(20);
}

function draw() {
  line(50,50,300,50);
  line(300,50,300,300);
  stroke(0);
  stroke(255,0,255);
  rect(50,50,50,50);
  if(mouseIsPressed){
    fill(0);

  }else{
    fill(255);
  }
  fill(255,0,0);
  ellipse(50,50,50,50);
  ellipse(40,40,40,40);
  ellipse(50,50,50,50);
  ellipse(50,40,50,40);
  ellipse(30,20,60,80);
  ellipse(10,75,50,25);
  fill(300,0,0);
  ellipse(mouseX,mouseY,70,70);
  rect(30,20,55,50);
  rect(mouseX,mouseY,40,40);
}
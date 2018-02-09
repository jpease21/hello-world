function setup() {
  createCanvas(600,600);
}

function draw() {
    squares(10,10);
    squares(20,20);
    squares(40,40);
    squares(65,65);
    squares(80,80);
    squares(100,100)
    squares(120,120);
    squares(160,160);
    squares(215,215);
    squares(240,240);
    squares(270,270);
    squares(295,295);
    squares(320,320);
    squares(345,345);
    squares(370,370);
    squares(400,400);
    squares(430,430);
    squares(460,460);
    squares(490,490);
    squares(520,520);
    squares(550,550);
    squares(580,580);
    squares(610,610);
}

function squares(x,y){
    rect(x,y,100,100);
    ellipse(x,y,70,70);
    rect(x+30,y+45,60,60);
    ellipse(x,y,60,40);
    rect(x+50,y+40,72,72);
    circles(40,40);
    circles(30,30);
    circles(65,65);
    circles(95,95);
    circles(115,115);
    circles(145,145);
    circles(175,175);
    circles(205,205);
    circles(235,235);
    circles(265,265);
    circles(295,295);
    circles(325,325);
    circles(355,355);
    circles(385,385);
}
function circles(x,y){
    ellipse(x,y,40,40);
    ellipse(x+20,y+20,45,45);
    ellipse(x,y,35,35);
    rect(x,y,80,20);
    ellipse(x+72,y+46,68,68);
    ellipse(x+25,y+50,46,64);
    rect(x,y,20,80);
}
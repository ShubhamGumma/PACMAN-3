var border1,border2,border3,border4,border5,border6,border7,border8,border9,border10,border11,border12,border13,border14,border15,border16,border17,border18,border19,border20;
var p1,p2,p3,p4,p5,p6,p7,p8;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12;
var c1,c2,c3,c4,c5,c6;
var d1,d2,d3,d4,d5;
var t1,t2,t3,t4,t5,t6,t6,t7,t8,t9,t10,t11;
var s1,s2,s3,s4;
var z1,z2,z3,z4,z5,z6,z7,z8,z9,z10;

var pacman,pacmanImg;
var ghost1,ghost2,ghost3;
var ghost1Img,ghost2Img,ghost3Img;

var pacman,pacmanImg;

var pacIntro,pacIntroimg;
var score = 0;
var lives = 3;

var coinGroup;

function preload(){
  pacIntroimg = loadImage("Pac-Intro.jpg");
  pacmanImg = loadImage("Imported piskel (3).gif");
  ghost1Img = loadImage("ghost2.png");
  ghost2Img = loadImage("ghj.png");
  ghost3Img = loadAnimation("ghost-boo.gif");
  coinImg = loadImage("coin.gif");
}

function setup() {
  createCanvas(1200,600);

  pacIntro = createSprite(210,500,10,100);
  pacIntro.addImage(pacIntroimg);
  pacIntro.scale = 0.7;

  ghost1 = createSprite(605,200,10,10);
  ghost1.velocityY = -2;
  ghost1.addImage(ghost1Img);
  ghost1.scale = 0.04;
  ghost2 = createSprite(630,200,10,10);
  ghost2.velocityY = -2;
 
  ghost2.scale = 0.05;
  ghost2.addImage(ghost2Img);
  ghost3 = createSprite(655,200,10,10);
  ghost3.velocityY = -2;
 
  ghost3.addAnimation("gg",ghost3Img);
  ghost3.scale = 0.125;

  pacman = createSprite(843,70,15,15);
  pacman.addImage(pacmanImg);
  pacman.scale = 0.09;

  border1 = createSprite(600,30,1010,10);
  border1.shapeColor = "DarkBlue";
  border2 = createSprite(600,370,1010,10);
  border2.shapeColor = "DarkBlue";
  border3 = createSprite(90,65,10,80);
  border3.shapeColor = "DarkBlue";
  border4 = createSprite(90,335,10,80);
  border4.shapeColor = "DarkBlue";
  border5 = createSprite(1100,65,10,80);
  border5.shapeColor = "DarkBlue";
  border6 = createSprite(1100,335,10,80);
  border6.shapeColor = "DarkBlue";
  border7 = createSprite(120,100,60,10);
  border7.shapeColor = "DarkBlue";
  border8 = createSprite(145,130,10,50);
  border8.shapeColor = "DarkBlue";
  border9 = createSprite(118,160,65,10);
  border9.shapeColor = "DarkBlue";
  border10 = createSprite(90,190,10,70);
  border10.shapeColor = "DarkBlue";
  border11 = createSprite(120,220,60,10);
  border11.shapeColor = "DarkBlue";
  border12 = createSprite(145,262,10,74);
  border12.shapeColor = "DarkBlue";
  border13 = createSprite(115,293,60,10);
  border13.shapeColor = "DarkBlue";
  border14 = createSprite(1070,100,60,10);
  border14.shapeColor = "DarkBlue";
  border15 = createSprite(1045,130,10,50);
  border15.shapeColor = "DarkBlue";
  border16 = createSprite(1072,160,65,10);
  border16.shapeColor = "DarkBlue";
  border17 = createSprite(1100,190,10,70);
  border17.shapeColor = "DarkBlue";
  border18 = createSprite(1070,220,60,10);
  border18.shapeColor = "DarkBlue";
  border19 = createSprite(1045,262,10,74);
  border19.shapeColor = "DarkBlue";
  border20 = createSprite(1075,293,60,10);
  border20.shapeColor = "DarkBlue";

  //Letter P
  p1 = createSprite(200,200,5,270);
  p1.shapeColor = "yellow";
  p2 = createSprite(250,65,110,5);
  p2.shapeColor = "yellow";
  p3 = createSprite(255,90,60,5);
  p3.shapeColor = "yellow";
  p4 = createSprite(225,110,5,40);
  p4.shapeColor = "yellow";
  p5 = createSprite(280,110,5,40);
  p5.shapeColor = "yellow";
  p6 = createSprite(229,129,10,5);
  p6.shapeColor = "yellow";
  p7 = createSprite(276,129,10,5);
  p7.shapeColor = "yellow";
  p8 = createSprite(305,110,5,90);
  p8.shapeColor = "yellow";
  p9 = createSprite(265,155,80,5);
  p9.shapeColor = "yellow";
  p10= createSprite(230,244,5,185);
  p10.shapeColor = "yellow";

  //Letter A
  a1 = createSprite(340,200,5,270);
  a1.shapeColor = "red";
  a2 = createSprite(395,65,115,5);
  a2.shapeColor = "red";
  a3 = createSprite(450,200,5,270);
  a3.shapeColor = "red";
  a4 = createSprite(370,130,5,80);
  a4.shapeColor = "red";
  a5 = createSprite(370,200,60,5);
  a5.shapeColor = "red";
  a6 = createSprite(420,230,60,5);
  a6.shapeColor = "red";
  a7 = createSprite(420,130,5,80);
  a7.shapeColor = "red";
  a8 = createSprite(395,170,50,5);
  a8.shapeColor = "red";
  a9 = createSprite(395,90,50,5);
  a9.shapeColor = "red";
  a10 = createSprite(355,330,30,5);
  a10.shapeColor = "red";
  a11 = createSprite(435,330,30,5);
  a11.shapeColor = "red";

  //Letter C
  c1 = createSprite(490,200,5,270);
  c1.shapeColor = "LawnGreen";
  c2 = createSprite(535,335,95,5);
  c2.shapeColor = "LawnGreen";
  c3 = createSprite(535,65,95,5);
  c3.shapeColor = "LawnGreen";
  c4 = createSprite(525,200,5,200);
  c4.shapeColor = "LawnGreen";
  c5 = createSprite(550,100,60,5)
  c5.shapeColor = "LawnGreen";
  c6 = createSprite(550,300,60,5);
  c6.shapeColor = "LawnGreen";

  //Dash
  d1 = createSprite(590,200,5,50);
  d1.shapeColor = "DarkBlue";
  d2 = createSprite(663,200,5,50);
  d2.shapeColor = "DarkBlue";
  d3 = createSprite(627,225,70,5);
  d3.shapeColor = "DarkBlue";
  d4 = createSprite(657,177,10,5);
  d4.shapeColor = "DarkBlue";
  d5 = createSprite(597,177,10,5);
  d5.shapeColor = "DarkBlue";

  //Number 2
  t1 = createSprite(795,115,5,115);
  t1.shapeColor = "DarkOrange";
  t2 = createSprite(750,60,85,5);
  t2.shapeColor = "DarkOrange";
  t3 = createSprite(750,170,85,5);
  t3.shapeColor = "DarkOrange";
  t4 = createSprite(710,255,5,167);
  t4.shapeColor = "DarkOrange";
  t5 = createSprite(735,90,50,5);
  t5.shapeColor = "DarkOrange";
  t6 = createSprite(760,115,5,50);
  t6.shapeColor = "DarkOrange";
  t7 = createSprite(735,140,50,5);
  t7.shapeColor = "DarkOrange";
  t8 = createSprite(755,340,95,5);
  t8.shapeColor = "DarkOrange";
  t9 = createSprite(770,205,60,5);
  t9.shapeColor = "DarkOrange";
  t10 = createSprite(740,255,5,99);
  t10.shapeColor = "DarkOrange";
  t9 = createSprite(770,305,60,5);
  t9.shapeColor = "DarkOrange";

  //Square Shape
  s1 = createSprite(835,325,5,30);
  s1.shapeColor = "Cyan";
  s2 = createSprite(855,325,5,30);
  s2.shapeColor = "Cyan";
  s3 = createSprite(845,312,20,5);
  s3.shapeColor = "Cyan";
  s4 = createSprite(845,337,20,5);
  s4.shapeColor = "Cyan";

  //Number 0
  z1 = createSprite(895,200,5,290);
  z1.shapeColor = "DeepPink";
  z2 = createSprite(990,200,5,290);
  z2.shapeColor = "DeepPink";
  z3 = createSprite(980,345,25,5);
  z3.shapeColor = "DeepPink";
  z4 = createSprite(905,345,25,5);
  z4.shapeColor = "DeepPink";
  z5 = createSprite(980,57,25,5);
  z5.shapeColor = "DeepPink";
  z6 = createSprite(907,57,25,5);
  z6.shapeColor = "DeepPink";
  z7 = createSprite(925,200,5,200);
  z7.shapeColor = "DeepPink";
  z8 = createSprite(960,200,5,200);
  z8.shapeColor = "DeepPink";
  z9 = createSprite(943,300,37,5);
  z9.shapeColor = "DeepPink";
  z10 = createSprite(943,100,37,5);
  z10.shapeColor = "DeepPink";

  coinGroup = createGroup();

}

function draw() {
  background("black");

  //Text for Score & Lives
  textSize(20);
  fill("blue");
  text("SCORE: " + score,500,520);
  text("LIVES: " + lives,800,520);

  //Text for Intro
  textSize(25);
  fill("yellow");
  text("Welcome To PAC-2.0, We Hope You Enjoy This Arcade Game!",370,450);

  if(keyDown("UP_ARROW")){
    //pacaman.velocityY = pacman.velocityY-1
    pacman.velocityY-= 0.08;
  }

  if(keyDown("DOWN_ARROW")){
    pacman.velocityY+= 0.08;
  }

  if(keyDown("LEFT_ARROW")){
    pacman.velocityX-= 0.08;
  }

  if(keyDown("RIGHT_ARROW")){
    pacman.velocityX+= 0.08;

  }

  pacman.collide(border1);
  pacman.collide(border2);
  pacman.collide(border3);
  pacman.collide(border4);
  pacman.collide(border5);
  pacman.collide(border6);
  pacman.collide(border7);
  pacman.collide(border8);
  pacman.collide(border9);
  pacman.collide(border10);
  pacman.collide(border11);
  pacman.collide(border12);
  pacman.collide(border13);
  pacman.collide(border14);
  pacman.collide(border15);
  pacman.collide(border16);
  pacman.collide(border17);
  pacman.collide(border18);
  pacman.collide(border19);
  pacman.collide(border20);

  ghost1.collide(border1);
  ghost1.collide(border2);
  ghost1.collide(border3);
  ghost1.collide(border4);
  ghost1.collide(border5);
  ghost1.collide(border6);
  ghost1.collide(border7);
  ghost1.collide(border8);
  ghost1.collide(border9);
  ghost1.collide(border10);
  ghost1.collide(border11);
  ghost1.collide(border12);
  ghost1.collide(border13);
  ghost1.collide(border14);
  ghost1.collide(border15);
  ghost1.collide(border16);
  ghost1.collide(border17);
  ghost1.collide(border18);
  ghost1.collide(border19);
  ghost1.collide(border20);

  ghost2.collide(border1);
  ghost2.collide(border2);
  ghost2.collide(border3);
  ghost2.collide(border4);
  ghost2.collide(border5);
  ghost2.collide(border6);
  ghost2.collide(border7);
  ghost2.collide(border8);
  ghost2.collide(border9);
  ghost2.collide(border10);
  ghost2.collide(border11);
  ghost2.collide(border12);
  ghost2.collide(border13);
  ghost2.collide(border14);
  ghost2.collide(border15);
  ghost2.collide(border16);
  ghost2.collide(border17);
  ghost2.collide(border18);
  ghost2.collide(border19);
  ghost2.collide(border20);

  ghost3.collide(border1);
  ghost3.collide(border2);
  ghost3.collide(border3);
  ghost3.collide(border4);
  ghost3.collide(border5);
  ghost3.collide(border6);
  ghost3.collide(border7);
  ghost3.collide(border8);
  ghost3.collide(border9);
  ghost3.collide(border10);
  ghost3.collide(border11);
  ghost3.collide(border12);
  ghost3.collide(border13);
  ghost3.collide(border14);
  ghost3.collide(border15);
  ghost3.collide(border16);
  ghost3.collide(border17);
  ghost3.collide(border18);
  ghost3.collide(border19);
  ghost3.collide(border20);

  pacman.collide(p1);
  pacman.collide(p2);
  pacman.collide(p3);
  pacman.collide(p4);
  pacman.collide(p5);
  pacman.collide(p6);
  pacman.collide(p7);
  pacman.collide(p8);
  pacman.collide(p9);
  pacman.collide(p10);

  ghost1.collide(p1);
  ghost1.collide(p2);
  ghost1.collide(p3);
  ghost1.collide(p4);
  ghost1.collide(p5);
  ghost1.collide(p6);
  ghost1.collide(p7);
  ghost1.collide(p8);
  ghost1.collide(p9);
  ghost1.collide(p10);

  ghost2.collide(p1);
  ghost2.collide(p2);
  ghost2.collide(p3);
  ghost2.collide(p4);
  ghost2.collide(p5);
  ghost2.collide(p6);
  ghost2.collide(p7);
  ghost2.collide(p8);
  ghost2.collide(p9);
  ghost2.collide(p10);

  ghost3.collide(p1);
  ghost3.collide(p2);
  ghost3.collide(p3);
  ghost3.collide(p4);
  ghost3.collide(p5);
  ghost3.collide(p6);
  ghost3.collide(p7);
  ghost3.collide(p8);
  ghost3.collide(p9);
  ghost3.collide(p10);

  pacman.collide(a1);
  pacman.collide(a2);
  pacman.collide(a3);
  pacman.collide(a4);
  pacman.collide(a5);
  pacman.collide(a6);
  pacman.collide(a7);
  pacman.collide(a8);
  pacman.collide(a9);
  pacman.collide(a10);
  pacman.collide(a11);

  ghost1.collide(a1);
  ghost1.collide(a2);
  ghost1.collide(a3);
  ghost1.collide(a4);
  ghost1.collide(a5);
  ghost1.collide(a6);
  ghost1.collide(a7);
  ghost1.collide(a8);
  ghost1.collide(a9);
  ghost1.collide(a10);
  ghost1.collide(a11);

  ghost2.collide(a1);
  ghost2.collide(a2);
  ghost2.collide(a3);
  ghost2.collide(a4);
  ghost2.collide(a5);
  ghost2.collide(a6);
  ghost2.collide(a7);
  ghost2.collide(a8);
  ghost2.collide(a9);
  ghost2.collide(a10);
  ghost2.collide(a11);

  ghost3.collide(a1);
  ghost3.collide(a2);
  ghost3.collide(a3);
  ghost3.collide(a4);
  ghost3.collide(a5);
  ghost3.collide(a6);
  ghost3.collide(a7);
  ghost3.collide(a8);
  ghost3.collide(a9);
  ghost3.collide(a10);
  ghost3.collide(a11);

  pacman.collide(c1);
  pacman.collide(c2);
  pacman.collide(c3);
  pacman.collide(c4);
  pacman.collide(c5);
  pacman.collide(c6);

  ghost1.collide(c1);
  ghost1.collide(c2);
  ghost1.collide(c3);
  ghost1.collide(c4);
  ghost1.collide(c5);
  ghost1.collide(c6);

  ghost2.collide(c1);
  ghost2.collide(c2);
  ghost2.collide(c3);
  ghost2.collide(c4);
  ghost2.collide(c5);
  ghost2.collide(c6);

  ghost3.collide(c1);
  ghost3.collide(c2);
  ghost3.collide(c3);
  ghost3.collide(c4);
  ghost3.collide(c5);
  ghost3.collide(c6);

  pacman.collide(d1);
  pacman.collide(d2);
  pacman.collide(d3);
  pacman.collide(d4);
  pacman.collide(d5);

  ghost1.collide(d1);
  ghost1.collide(d2);
  ghost1.collide(d3);
  ghost1.collide(d4);
  ghost1.collide(d5);

  ghost2.collide(d1);
  ghost2.collide(d2);
  ghost2.collide(d3);
  ghost2.collide(d4);
  ghost2.collide(d5);

  ghost3.collide(d1);
  ghost3.collide(d2);
  ghost3.collide(d3);
  ghost3.collide(d4);
  ghost3.collide(d5);

  pacman.collide(t1);
  pacman.collide(t2);
  pacman.collide(t3);
  pacman.collide(t4);
  pacman.collide(t5);
  pacman.collide(t6);
  pacman.collide(t7);
  pacman.collide(t8);
  pacman.collide(t9);

  ghost1.collide(t1);
  ghost1.collide(t2);
  ghost1.collide(t3);
  ghost1.collide(t4);
  ghost1.collide(t5);
  ghost1.collide(t6);
  ghost1.collide(t7);
  ghost1.collide(t8);
  ghost1.collide(t9);

  ghost2.collide(t1);
  ghost2.collide(t2);
  ghost2.collide(t3);
  ghost2.collide(t4);
  ghost2.collide(t5);
  ghost2.collide(t6);
  ghost2.collide(t7);
  ghost2.collide(t8);
  ghost2.collide(t9);

  ghost3.collide(t1);
  ghost3.collide(t2);
  ghost3.collide(t3);
  ghost3.collide(t4);
  ghost3.collide(t5);
  ghost3.collide(t6);
  ghost3.collide(t7);
  ghost3.collide(t8);
  ghost3.collide(t9);

  pacman.collide(s1);
  pacman.collide(s2);
  pacman.collide(s3);
  pacman.collide(s4);

  ghost1.collide(s1);
  ghost1.collide(s2);
  ghost1.collide(s3);
  ghost1.collide(s4);

  ghost2.collide(s1);
  ghost2.collide(s2);
  ghost2.collide(s3);
  ghost2.collide(s4);

  ghost3.collide(s1);
  ghost3.collide(s2);
  ghost3.collide(s3);
  ghost3.collide(s4);

  pacman.collide(z1);
  pacman.collide(z2);
  pacman.collide(z3);
  pacman.collide(z4);
  pacman.collide(z5);
  pacman.collide(z6);
  pacman.collide(z7);
  pacman.collide(z8);
  pacman.collide(z9);
  pacman.collide(z10);

  ghost1.collide(z1);
  ghost1.collide(z2);
  ghost1.collide(z3);
  ghost1.collide(z4);
  ghost1.collide(z5);
  ghost1.collide(z6);
  ghost1.collide(z7);
  ghost1.collide(z8);
  ghost1.collide(z9);
  ghost1.collide(z10);

  ghost2.collide(z1);
  ghost2.collide(z2);
  ghost2.collide(z3);
  ghost2.collide(z4);
  ghost2.collide(z5);
  ghost2.collide(z6);
  ghost2.collide(z7);
  ghost2.collide(z8);
  ghost2.collide(z9);
  ghost2.collide(z10);

  ghost3.collide(z1);
  ghost3.collide(z2);
  ghost3.collide(z3);
  ghost3.collide(z4);
  ghost3.collide(z5);
  ghost3.collide(z6);
  ghost3.collide(z7);
  ghost3.collide(z8);
  ghost3.collide(z9);
  ghost3.collide(z10);

  movementYellowRight();
  movementYellowDown();
  
  movementLeft();
  movementDown();
  penOut();
  coinCreation();
  drawSprites();
}

function movementYellowRight(){
  if(frameCount%50===0){
    ghost1.velocityX = 3;
  }
}

function movementYellowDown(){
  if(frameCount%90===0){
    ghost1.velocityY += 3;
  }
}


function movementLeft(){
  if(frameCount%50===0){
    ghost2.velocityX = -3;
  }
}

function movementDown(){
  if(frameCount%50===0){
    ghost3.velocityY = -3;
  }
}

function coinCreation(){
  for (var i = 140; i < 1100; i=i+100) {
    //row1
    var coin1 = createSprite(i, 350, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 140; i < 1100; i=i+100) {
    //row2
    var coin1 = createSprite(i, 50, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 300; i < 340; i=i+50) {
    //row3
    var coin1 = createSprite(i, 90, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 510; i < 610; i=i+50) {
    //row4
    var coin1 = createSprite(i, 320, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 510; i < 610; i=i+50) {
    //row5
    var coin1 = createSprite(i, 320, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 555; i < 570; i=i+50) {
    //row6
    var coin1 = createSprite(i, 80, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 720; i < 800; i=i+50) {
    //row7
    var coin1 = createSprite(i, 70, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 740; i < 800; i=i+50) {
    //row8
    var coin1 = createSprite(i, 190, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 740; i < 800; i=i+50) {
    //row9
    var coin1 = createSprite(i, 330, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 720; i < 800; i=i+50) {
    //row10
    var coin1 = createSprite(i, 150, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 100; i < 400; i=i+100) {
    //collum1
    var coin1 = createSprite(170, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }


  for (var i = 100; i < 400; i=i+100) {
    //collum2
    var coin1 = createSprite(1020, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 80; i < 340; i=i+50) {
    //collum3
    var coin1 = createSprite(215, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 80; i < 150; i=i+50) {
    //collum4
    var coin1 = createSprite(290, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 90; i < 310; i=i+50) {
    //collum5
    var coin1 = createSprite(350, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 90; i < 310; i=i+50) {
    //collum6
    var coin1 = createSprite(430, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 80; i < 310; i=i+50) {
    //collum6
    var coin1 = createSprite(510, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 110; i < 160; i=i+50) {
    //collum7
    var coin1 = createSprite(770, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  for (var i = 210; i < 360; i=i+50) {
    //collum8
    var coin1 = createSprite(725, i, 20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.030;
    coinGroup.add(coin1);
  }

  
}

function penOut() {
  if (frameCount%10===0) {
    ghost1.velocityY=-3;
    ghost2.x=ghost2.x+5;
    ghost2.velocityY=-3;
    ghost3.x=ghost3.x-5;
    ghost3.velocityY=-3;
  }
}
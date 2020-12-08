function outsideBG () {
  push();
  image(bg,450,450,920,920);
  image(garland,450,85,900,150);
  image(presents,450,790,700,150);

  fill(255);
  fill(0);
  fill(255);
  rect(450,450,750,500);

  fill(0);
  rect(450,800,360,150);
  fill(165,203,203);
  rect(450,800,330,130);

  image(keyExplantion,450,800,320,110);

  pop();
}

function singBG () {

  push();
  stroke(0);
  //fill()
  rectMode(CENTER);
  fill(255,255,246);
  rect(450,450,750,500);
  //screen

  noStroke();
  fill(225,242,230)
  ellipse(285,390,270,370); //char
  
  stroke(0);
  fill(0,51,153);
  rect(450,630,750,140); // lyrics
  rect(450,200,750,40); // current song
  
  stroke(0);
  rect(590,400,305,105);
  fill(255);
  rect(590,400,300,100);
  fill(0,51,153);
  rect(540,400,2,105);
  rect(650,400,2,105);// clothes
  
  stroke(0);
  fill(0,51,153);
  rect(590,300,305,15);
  fill(255);
  rect(590,300,300,10);
  fill(0,51,153);
  rect(595,300,115,15);
  fill(228,247,186);
  rect(595,300,110,10)
  fill(255,0,0);
  rect(696,300,87,10);
  fill(0);
  textSize(10);
  text("0",440,320);
  text("33",535,320);
  text("66",650,320);
  text("100",735,320);
  textSize(30);
  text("score",590,270); //score
  
  fill(188,229,92);
  noStroke()
  ellipse(110,255,50,50);
  fill(255,100,100);
  ellipse(90,250,7,7);
  ellipse(130,260,7,7);
  ellipse(100,270,7,7);
  fill(255,255,100);
  ellipse(120,275,7,7);
  ellipse(95,260,7,7);
  ellipse(132,250,7,7);
  fill(255);
  ellipse(110,255,30,30);
  fill(255,0,0);
  triangle(100,225,110,235,100,245);
  triangle(110,235,120,225,120,245); // ring
  
  fill(255,0,0);
  noStroke();
  ellipse(95,360,20,20);
  rectMode(CENTER);
  rect(105,360,20,20);
  ellipse(120,360,20,20);
  rectMode(CORNERS);
  rect(130,360,105,305);
  fill(71,200,62);
  rect(105,305,130,315);
  fill(242,203,97);
  ellipse(90,360,7,7);
  ellipse(110,350,7,7);
  ellipse(125,330,7,7);
  ellipse(120,365,7,7); //socks
  
  fill(242,203,97);
  rectMode(CENTER);
  rect(113,410,10,50);
  fill(242,242,97);
  ellipse(113,415,40,40);
  fill(242,203,100);
  ellipse(113,435,15,15);
  fill(242,242,97);
  quad(93,415,133,415,141,435,85,435); // bell
  
  fill(102,92,0);
  rect(115,530,20,45);
  fill(71,200,62);
  triangle(115,505,85,540,145,545);
  fill(188,229,92);
  triangle(115,480,85,515,145,520);
  fill(107,153,0);
  triangle(115,465,85,490,145,495); // tree

  fill(255,237,125);
  triangle(790,230,770,270,810,270);
  triangle(770,240,810,240,790,280);
  noStroke();
  triangle(767,250,762,260,772,260);
  triangle(762,255,767,265,772,255); //star
  
  fill (188,237,125);
  rect(787,335,55,55);  
  fill(255,0,0);
  rect(787,335,55,7);
  rect(787,335,7,55);   
  triangle(767,295,787,307,767,315);
  triangle(807,295,787,307,807,315);  //present

  fill(224,185,79);
  ellipse(787,415,60,60);
  fill(242,203,97);
  ellipse(784,415,60,60); 
  fill(0);
  rect(787,413,5,5); 
  rect(800,403,5,5); 
  rect(770,423,5,5); 
  rect(777,408,5,5); 
  rect(790,428,5,5); 
  rect(805,418,5,5); 
  rect(785,398,5,5); //cookie
  
  fill(255,0,0);
  ellipse(770,485,40,40); 
  ellipse(800,485,40,40);
  triangle(750,490,820,490,785,540); 
  pop();
}

function initialBG() {
  push();
  noStroke();
  fill(12, 12, 56);
  rect(450, 450, 750, 500);

  //건물2
  fill(143, 166, 162);
  rect(230, 620, 310, 60);
  rect(520, 600, 290, 70);
  rect(700, 620, 250, 70);
  quad(75, 590, 100, 550, 250, 550, 275, 590);
  triangle(530, 570, 600, 530, 680, 570);
  quad(825, 590, 800, 550, 750, 550, 725, 590);

  //건물1
  fill(193, 193, 199);
  rect(215, 650, 280, 60);
  rect(390, 650, 80, 40);
  rect(500, 650, 140, 100);
  rect(570, 630, 100, 140);
  rect(690, 650, 270, 70);
  triangle(215, 630, 145, 580, 75, 630);
  triangle(540, 610, 480, 565, 415, 610);
  triangle(825, 620, 750, 570, 680, 620);


  //눈밭
  ellipseMode(CENTER)
  fill(256);
  arc(260, 700, 370, 100, PI, 0, CHORD);
  arc(560, 700, 370, 100, PI, 0, CHORD);
  triangle(825, 650, 825, 700, 680, 700);
  triangle(150, 700, 75, 650, 75, 700);

  //창문
  fill(252, 244, 3);
  win(120, 630);
  win(230, 580);
  win(400, 600);
  win(500, 610);
  win(770, 630);
  fill(255, 213, 3);
  win(335, 635);
  win(600, 600);
  win(790, 580);


  //기둥
  fill(135, 94, 50);
  tree(180, 670);
  tree(300, 650);
  tree(400, 660);
  tree(550, 640);
  tree(670, 650);
  tree(740, 670);

  //나무
  christmasTree(180, 670);
  christmasTree(400, 660);
  christmasTree(670, 650);
  christmasTree(740, 670);
  fill(38, 115, 21);
  triangle(300, 570, 330, 640, 270, 640);
  triangle(550, 570, 570, 635, 530, 635);

  //장식
  fill(255, 0, 0); //빨
  decoration(190, 600);
  decoration(420, 630);
  decoration(750, 600);
  fill(255, 157, 0); //주
  decoration(195, 640);
  decoration(300, 605);
  decoration(660, 580);
  fill(0, 255, 238); //파
  decoration(170, 620);
  decoration(310, 625);
  decoration(680, 610);
  decoration(755, 643);
  fill(242, 255, 0); //노
  decoration(390, 590);
  decoration(552, 620);
  decoration(655, 630);
  fill(255, 0, 234); //분
  decoration(390, 620);
  decoration(730, 630);

  //달
  fill(247, 218, 0);
  ellipse(450, 300, 120, 120);

  //글씨
  textFont(yun);
  textSize(80);
  textAlign(CENTER);
  fill(256);
  text("CHRISTMAS CONO", 450, 315);

  textSize(30);
  fill(256);
  text("올해도 어김없이 솔크를 맞이하는 당신에게", 370, 390);
  text("어느날, 익명의 편지가 도착했다!", 560, 415);
  textSize(40);
  text("Click a Letter", 450, 532);

  //편지
  fill(255, 0, 0);
  rect(450, 480, 90, 48);
  fill(256);
  triangle(405, 455, 495, 455, 450, 490);
  fill(255, 0, 0);
  triangle(410, 455, 490, 455, 450, 485);

  if (mouseX > 405 && mouseX < 495 && mouseY > 456 && mouseY < 504) {
    fill(255, 0, 0);

    rect(450, 480, 95, 52);
    triangle(402, 455, 498, 455, 450, 430);

    fill(250, 242, 215);
    triangle(402, 455, 498, 455, 450, 487);
  pop();
}
}

function win(x, y) {
let yw = rect(x, y, 13, 18);
return yw;
}

function tree(x, y) {
let t = ellipse(x, y, 14, 30);
return t;
}

function christmasTree(x, y) {
  let c = fill(35, 120, 46);
  triangle(x, y - 60, x + 50, y - 10, x - 50, y - 10);
  fill(61, 184, 67);
  triangle(x, y - 90, x + 45, y - 30, x - 45, y - 30);
  fill(70, 242, 93);
  triangle(x, y - 100, x + 40, y - 60, x - 40, y - 60);
  fill(256);
  triangle(x, y - 100, x + 17, y - 85, x - 17, y - 85);
  return c;
}

function decoration(x, y) {
let d =
  ellipse(x, y, random(10, 14), random(10, 14));
return d;
}

function instructionBG() {
  push();
  noStroke();
  if (iStage === 0) {
    rectMode(CENTER);
  fill(12, 12, 56);
  rect(450, 450, 750, 500);

  //건물2
  fill(143, 166, 162);
  rect(230, 620, 310, 60);
  rect(520, 600, 290, 70);
  rect(700, 620, 250, 70);
  quad(75, 590, 100, 550, 250, 550, 275, 590);
  triangle(530, 570, 600, 530, 680, 570);
  quad(825, 590, 800, 550, 750, 550, 725, 590);

  //건물1
  fill(193, 193, 199);
  rect(215, 650, 280, 60);
  rect(390, 650, 80, 40);
  rect(500, 650, 140, 100);
  rect(570, 630, 100, 140);
  rect(690, 650, 270, 70);
  triangle(215, 630, 145, 580, 75, 630);
  triangle(540, 610, 480, 565, 415, 610);
  triangle(825, 620, 750, 570, 680, 620);


  //눈밭
  ellipseMode(CENTER)
  fill(256);
  arc(260, 700, 370, 100, PI, 0, CHORD);
  arc(560, 700, 370, 100, PI, 0, CHORD);
  triangle(825, 650, 825, 700, 680, 700);
  triangle(150, 700, 75, 650, 75, 700);

  //창문
  fill(252, 244, 3);
  win(120, 630);
  win(230, 580);
  win(400, 600);
  win(500, 610);
  win(770, 630);
  fill(255, 213, 3);
  win(335, 635);
  win(600, 600);
  win(790, 580);


  //기둥
  fill(135, 94, 50);
  tree(180, 670);
  tree(300, 650);
  tree(400, 660);
  tree(550, 640);
  tree(670, 650);
  tree(740, 670);

  //나무
  christmasTree(180, 670);
  christmasTree(400, 660);
  christmasTree(670, 650);
  christmasTree(740, 670);
  fill(38, 115, 21);
  triangle(300, 570, 330, 640, 270, 640);
  triangle(550, 570, 570, 635, 530, 635);

  //장식
  fill(255, 0, 0); //빨
  decoration(190, 600);
  decoration(420, 630);
  decoration(750, 600);
  fill(255, 157, 0); //주
  decoration(195, 640);
  decoration(300, 605);
  decoration(660, 580);
  fill(0, 255, 238); //파
  decoration(170, 620);
  decoration(310, 625);
  decoration(680, 610);
  decoration(755, 643);
  fill(242, 255, 0); //노
  decoration(390, 590);
  decoration(552, 620);
  decoration(655, 630);
  fill(255, 0, 234); //분
  decoration(390, 620);
  decoration(730, 630);

  //설명
  fill(242, 248, 252);
  rect(450, 370, 650, 240);
  fill(214, 214, 214);
  rect(450, 370, 640, 230);

  //양말
  fill(255, 69, 69);
  ellipse(125, 295, 50, 35);
  rect(135, 270, 30, 50);
  fill(0, 255, 30);
  rect(135, 250, 30, 15);
  fill(235, 251, 41);
  ellipse(115, 295, 8, 8);
  ellipse(135, 270, 8, 8);
  ellipse(140, 290, 8, 8);

  //선물상자
  fill(0, 255, 238);
  quad(730, 450, 790, 450, 790, 505, 730, 505);
  fill(255, 0, 0);
  rect(760, 477, 8, 57);
  rect(760, 475.5, 60, 8);
  triangle(760, 450, 780, 450, 775, 432);
  triangle(760, 450, 740, 450, 745, 432);

  if(mouseX>730&&mouseX<790&&mouseY>450&&mouseY<505){
    fill(255, 251, 0);
    quad(730, 450, 790, 450, 790, 505, 730, 505);fill(255, 0, 0);
  rect(760, 477, 8, 57);
  rect(760, 475.5, 60, 8);
  triangle(760, 450, 780, 450, 775, 432);
  triangle(760, 450, 740, 450, 745, 432);
  }
  
  

  textFont(yun);
  textAlign(CENTER);
  textSize(40);
  fill(242, 0, 255);
  text("<2020 OH! CHRISTMAS PARTY>", 450, 290);

  textSize(30);
  fill(0);
  text("축하합니다, 당신은 꿈과 사랑이 이루어지는", 450, 330);
  text("지상 최대 초호화 럭셔리 파티에 초대되셨습니다", 450, 360);
  text("단, 이곳에 들어오기 위한 한가지 조건이 있습니다", 450, 390);

  fill(0, 64, 255);
  text("1. 파티에 참석하려면 반드시 캐롤을 열창해야 합니다.", 450, 425);
  text("2. 노래 점수에 따라 파티 의상이 정해집니다.", 450, 455);
  
  textSize(40);
  fill(256);
  text("Click!", 760,530);
  } else {
    fill(12, 12, 56);
  rect(450, 450, 750, 500);

  //건물2
  fill(143, 166, 162);
  rect(230, 620, 310, 60);
  rect(520, 600, 290, 70);
  rect(700, 620, 250, 70);
  quad(75, 590, 100, 550, 250, 550, 275, 590);
  triangle(530, 570, 600, 530, 680, 570);
  quad(825, 590, 800, 550, 750, 550, 725, 590);

  //건물1
  fill(193, 193, 199);
  rect(215, 650, 280, 60);
  rect(390, 650, 80, 40);
  rect(500, 650, 140, 100);
  rect(570, 630, 100, 140);
  rect(690, 650, 270, 70);
  triangle(215, 630, 145, 580, 75, 630);
  triangle(540, 610, 480, 565, 415, 610);
  triangle(825, 620, 750, 570, 680, 620);


  //눈밭
  ellipseMode(CENTER)
  fill(256);
  arc(260, 700, 370, 100, PI, 0, CHORD);
  arc(560, 700, 370, 100, PI, 0, CHORD);
  triangle(825, 650, 825, 700, 680, 700);
  triangle(150, 700, 75, 650, 75, 700);

  //창문
  fill(252, 244, 3);
  win(120, 630);
  win(230, 580);
  win(400, 600);
  win(500, 610);
  win(770, 630);
  fill(255, 213, 3);
  win(335, 635);
  win(600, 600);
  win(790, 580);


  //기둥
  fill(135, 94, 50);
  tree(180, 670);
  tree(300, 650);
  tree(400, 660);
  tree(550, 640);
  tree(670, 650);
  tree(740, 670);

  //나무
  christmasTree(180, 670);
  christmasTree(400, 660);
  christmasTree(670, 650);
  christmasTree(740, 670);
  fill(38, 115, 21);
  triangle(300, 570, 330, 640, 270, 640);
  triangle(550, 570, 570, 635, 530, 635);

  //장식
  fill(255, 0, 0); //빨
  decoration(190, 600);
  decoration(420, 630);
  decoration(750, 600);
  fill(255, 157, 0); //주
  decoration(195, 640);
  decoration(300, 605);
  decoration(660, 580);
  fill(0, 255, 238); //파
  decoration(170, 620);
  decoration(310, 625);
  decoration(680, 610);
  decoration(755, 643);
  fill(242, 255, 0); //노
  decoration(390, 590);
  decoration(552, 620);
  decoration(655, 630);
  fill(255, 0, 234); //분
  decoration(390, 620);
  decoration(730, 630);

  //설명
  fill(242, 248, 252);
  rect(450, 370, 650, 240);
  fill(214, 214, 214);
  rect(450, 370, 640, 230);

  //양말
  fill(255, 69, 69);
  ellipse(125, 295, 50, 35);
  rect(135, 270, 30, 50);
  fill(0, 255, 30);
  rect(135, 250, 30, 15);
  fill(235, 251, 41);
  ellipse(115, 295, 8, 8);
  ellipse(135, 270, 8, 8);
  ellipse(140, 290, 8, 8);

  //선물상자
  fill(0, 255, 238);
  quad(730, 450, 790, 450, 790, 505, 730, 505);
  fill(255, 0, 0);
  rect(760, 477, 8, 57);
  rect(760, 475.5, 60, 8);
  triangle(760, 450, 780, 450, 775, 432);
  triangle(760, 450, 740, 450, 745, 432);

  if (mouseX > 730 && mouseX < 790 && mouseY > 450 && mouseY < 505) {
    fill(255, 251, 0);
    quad(730, 450, 790, 450, 790, 505, 730, 505);
    fill(255, 0, 0);
    rect(760, 477, 8, 57);
    rect(760, 475.5, 60, 8);
    triangle(760, 450, 780, 450, 775, 432);
    triangle(760, 450, 740, 450, 745, 432);
  }



  textFont(yun);
  textAlign(CENTER);
  textSize(40);
  fill(242, 0, 255);
  text("<2020 OH! CHRISTMAS PARTY>", 450, 290);

  textSize(30);
  fill(0);
  text("1. 원하는 곡목을 골라 노래를 불러주세요", 450, 340);
  text("2. 파트별 마이크 볼륨에 따라 옷이 달라집니다", 450, 370);
  text("3. 만약 볼륨이 너무 낮아질시, 당신의 얼굴이 캐릭터를 대체합니다", 450, 400);

  fill(0, 64, 255);
  text("* 하단에 있는 노래방 단축키를 참고하세요 *", 450, 445);
  
  fill(255, 106, 0);
  text("마이크 볼륨", 392, 370);
  text("옷", 515, 370);
  text("당신의 얼굴", 475, 400);


  textSize(40);
  fill(256);
  text("Start!", 760, 530);
  }
  pop();
}

function endingBG() {
  push();
noStroke();
  fill(255, 225, 166);
rect(450, 450, 750, 500);

//바닥
fill(235, 220, 145);
rect(450, 560, 750, 180);
fill(255, 247, 209, 120);
for (let i = 80; i < 825; i += 40) {
  rect(i, 590, 12, 180);}
fill(219, 133, 83);
rect(450, 680, 750, 68);
fill(168, 104, 67, 70);
rect(450, 705, 750, 26);

//러그
fill(82, 45, 17);
arc(450, 710, 600, 100, PI, 0, CHORD);
fill(176, 55, 55, 120);
arc(450, 710, 500, 50, PI, 0, CHORD);

//창문
fill(87, 65, 38);
rect(450, 300, 400, 200);
fill(12, 12, 56);
rect(450, 295, 380, 190);
fill(256);
snowball(280, 230);
snowball(480, 220);
fill(87, 65, 38);
rect(450, 325, 400, 8);
rect(450, 260, 400, 8);
rect(450, 300, 8, 200);

fill(255, 189, 117,200);
quad(210,200, 310,200, 290,320, 220,320);
quad(220,320,290,320, 310,440,210,440);
quad(590,200,690,200,670,320,605,320);
quad(605,320,670,320,690,440,590,440);

fill(245, 75, 49,150);
rect(255,320,70,17);
rect(638,320,67,17);

//트리
fill(81, 207, 50);
quad(75, 300, 95, 280, 180, 390,75, 390);
fill(14, 156, 28);
quad(75, 390, 75, 480, 200, 480, 160, 390);
fill(26, 102, 33);
quad(75, 480, 75, 570, 220, 570, 180, 480);
fill(10, 56, 12);
quad(75, 570, 75, 660, 240, 660, 200, 570);
boxx(140,630,color(231, 48, 255),color(112, 255, 241))
boxx(105,650,color(54, 108, 235), color(255, 181, 92));
boxx(220,640,color(157, 0, 255),color(242, 255, 0));
fill(242, 255, 0);
stars(80,330);
stars(130,370);
stars(100,430);
stars(150,460);
stars(110,510);
stars(170,550);
stars(90,570);

//score
fill(0, 255, 217);
rect(450,260,200,70);
fill(255, 252, 207);
rect(450,260,180,60);

textFont(letsPlay);
textSize(35);
  textAlign(CENTER);
  fill(0);
  text("score",405,250);
  pop();
}


function snowball(x, y) {
let s =
  //280,230    
  ellipse(x, y, 11, 11);
ellipse(x + 20, y + 70, 10, 10);
ellipse(x + 30, y + 140, 10, 10);
ellipse(x + 90, y + 130, 10, 10);
ellipse(x + 130, y + 70, 10, 10);
ellipse(x + 70, y - 5, 8, 8);
ellipse(x + 120, y, 8, 8);
ellipse(x + 70, y + 90, 12, 12);
ellipse(x + 100, y + 50, 12, 12);
ellipse(x + 40, y + 20, 13, 13);
ellipse(x + 130, y + 140, 13, 13);
ellipse(x + 5, y + 120, 14, 14);
return s;
}


function boxx(x,y,a,b){
let box =
fill(a);
rect(x,y,60,60);
fill(b);
rect(x,y,8,60);
rect(x,y,60,8);
triangle(x,y-25,x+20,y-25,x+15,y-40);
triangle(x,y-25,x-20,y-25,x-15,y-40);  
return box;
}

function stars(x,y){
let st = push();
noStroke();
  triangle(x, y+3, x+20, y+3, x+10, y-15);
triangle(x, y-10, x+20, y-10, x+10,y+10);
pop();
return st;
}

function readyBG() {
push();
noStroke();
fill(12, 12, 56);
  rect(450, 450, 750, 500);

  //건물2
  fill(143, 166, 162);
  rect(230, 620, 310, 60);
  rect(520, 600, 290, 70);
  rect(700, 620, 250, 70);
  quad(75, 590, 100, 550, 250, 550, 275, 590);
  triangle(530, 590, 600, 550, 680, 590);
  quad(825, 590, 800, 550, 750, 550, 725, 590);

  //건물1
  fill(193, 193, 199);
  rect(215, 650, 280, 60);
  rect(390, 650, 80, 40);
  rect(500, 650, 140, 100);
  rect(570, 630, 100, 140);
  rect(690, 650, 270, 70);
  triangle(215, 630, 145, 580, 75, 630);
  triangle(540, 610, 480, 550, 415, 610);
  triangle(825, 620, 750, 570, 680, 620);


  //눈밭
  ellipseMode(CENTER)
  fill(256);
  arc(260, 700, 370, 100, PI, 0, CHORD);
  arc(560, 700, 370, 100, PI, 0, CHORD);
  triangle(825, 650, 825, 700, 680, 700);
  triangle(150, 700, 75, 650, 75, 700);

  //창문
  fill(252, 244, 3);
  win(120, 630);
  win(230, 580);
  win(400, 600);
  win(500, 610);
  win(770, 630);
  fill(255, 213, 3);
  win(335, 635);
  win(600, 600);
  win(790, 580);


  //기둥
  fill(135, 94, 50);
  tree(180, 670);
  tree(300, 650);
  tree(400, 660);
  tree(550, 640);
  tree(670, 650);
  tree(740, 670);

  //나무
  christmasTree(180, 670);
  christmasTree(400, 660);
  christmasTree(670, 650);
  christmasTree(740, 670);
  fill(38, 115, 21);
  triangle(300, 570, 330, 640, 270, 640);
  triangle(550, 570, 570, 635, 530, 635);

  //장식
  fill(255, 0, 0); //빨
  decoration(190, 600);
  decoration(420, 630);
  decoration(750, 600);
  fill(255, 157, 0); //주
  decoration(195, 640);
  decoration(300, 605);
  decoration(660, 580);
  fill(0, 255, 238); //파
  decoration(170, 620);
  decoration(310, 625);
  decoration(680, 610);
  decoration(755, 643);
  fill(242, 255, 0); //노
  decoration(390, 590);
  decoration(552, 620);
  decoration(655, 630);
  fill(255, 0, 234); //분
  decoration(390, 620);
  decoration(730, 630);

  //화면
  fill(256);
  rect(450, 370, 650, 240);
  fill(214, 214, 214);
  rect(450, 370, 640, 230);
  fill(256);
  rect(450, 300, 650, 5);
  for (i = 300; i < 490; i += 38) {
    rect(450, i, 650, 3);
  }
  rect(270, 370, 3, 240);
  rect(540, 370, 3, 240);





  textFont(yun);
  textSize(35);
  textAlign(CENTER, BASELINE);
  fill(10, 34, 66);
  text("NUMBER", 205, 285);
  text("SONG", 400, 285);
  text("ARTIST", 655, 285);

  let songList = [
    [['12250', 'Must Have Love', 'SG워너비 & 브아걸'],
    ['10290', 'All I Want for Christmas Is You', 'Mariah Carey'],
    ['12170', '우리 사랑하게 됐어요', '조권 & 가인'],
    ['93626', 'Santa Tell Me', 'Ariana Grande'],
    ['93516', '미리메리크리스마스', '아이유 (Feat. 천둥)']],

    [['12408', '첫눈', 'EXO'], ['75218','Snowman','Sia'], ['60910','하얀 고백','인피니트'],
    ['14116','Let It Go','Idina Menzel'], ['','','']]
  ];


    textSize(30);

    text(songList[page][0][1], 400, 325);
    text(songList[page][0][2], 655, 325);
    if (!page) {
      push();
      textSize(25);
      text(songList[page][1][1], 400, 367);
      pop();
    } else {
      text(songList[page][1][1], 400, 367);
    }
    text(songList[page][1][2], 655, 367);
    text(songList[page][2][1], 400, 405);
    text(songList[page][2][2], 655, 405);
    text(songList[page][3][1], 400, 440);
    text(songList[page][3][2], 655, 440);
    text(songList[page][4][1], 400, 475);
    text(songList[page][4][2], 655, 475);

    textSize(35);
    text(songList[page][0][0], 200, 325);
    text(songList[page][1][0], 200, 365);
    text(songList[page][2][0], 200, 402);
    text(songList[page][3][0], 200, 438);
    text(songList[page][4][0], 200, 473);
  

  //다음
  fill(256);
  text("PRESS THE NUMBER > PRESS ENTER", 450,237);

  if (!page){
  triangle(695, 520, 695, 500, 710, 510);
  textSize(35)
  text(`PAGE 1/2`, 630, 515);
  if (mouseX > 565 && mouseX < 710 && mouseY > 500 && mouseY < 520) {
    fill(242, 255, 0);
    triangle(695, 520, 695, 500, 710, 510);
    text(`PAGE 1/2`, 630, 515);
  }} else {
    triangle(580, 520, 580, 500, 565, 510);
    textSize(35);
    text("PAGE 2/2", 655, 515);
    if (mouseX > 565 && mouseX < 710 && mouseY > 500 && mouseY < 520) {
      fill(242, 255, 0);
      triangle(580, 520, 580, 500, 565, 510);
      text("PAGE 2/2", 655, 515);
    }
  }

  //양말
  fill(255, 69, 69);
  ellipse(125, 295, 50, 35);
  rect(135, 270, 30, 50);
  fill(0, 255, 30);
  rect(135, 250, 30, 15);
  fill(235, 251, 41);
  ellipse(115, 295, 8, 8);
  ellipse(135, 270, 8, 8);
  ellipse(140, 290, 8, 8);

  //선물상자
  fill(0, 255, 238);
  quad(730, 450, 790, 450, 790, 505, 730, 505);
  fill(255, 0, 0);
  rect(760, 477, 8, 57);
  rect(760, 475.5, 60, 8);
  triangle(760, 450, 780, 450, 775, 432);
  triangle(760, 450, 740, 450, 745, 432);

pop();
}
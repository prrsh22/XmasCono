function outsideBG () {
    push();
    fill(255);
    rectMode(CENTER);
    rect(450,450,750,500);

    fill(0);
    rect(450,800,350,130);
    fill(165,203,203);
    rect(450,800,120,100);
    fill(242,242,240);
    rect(335,800,102,100);
    line(318,750,318,850);
    line(352,750,352,850);
    line(284,775,386,775);
    line(284,800,386,800);
    line(284,825,386,825);
    rect(565,800,102,100);
    line(548,750,548,850);
    line(582,750,582,850);
    line(514,775,616,775);
    line(514,800,616,800);
    line(514,825,616,825);
    pop();
}

function singBG () {

    push();
    stroke(0);
    //fill()
    rectMode(CENTER);
    fill(255,255,246);
    rect(450,450,750,500);
    //screan
  
    noStroke();
    fill(225,242,230)
    ellipse(285,390,270,370); //char
    
    stroke(0);
    fill(0,51,153);
    rect(450,630,750,140); // lyrics
    rect(450,200,750,40); // next song
    
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
    text("0",435,320);
    text("33",530,320);
    text("66",645,320);
    text("100",730,320);
    textSize(30);
    text("score",560,280); //score
    
    fill(255,0,0);
    stroke(0);
    push();
    translate(650,370);
    rotate(radians(180));
    triangle(0,40,40,40,20,0)
    pop(); // point
    
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
    textSize(12);
    text("Merry", 734,555);
    fill(107,153,0);
    text("christmas!",768,555); //heart
    pop();
}

function initialBG() {
    push();
    noStroke();
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
    triangle(540, 610, 480, 550, 415, 610);
    triangle(825, 620, 750, 570, 680, 620);
  
  
    //눈밭
    ellipseMode(CENTER);
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
    fill(252, 252, 58);
    ellipse(450, 310, 120, 120);
  
    //종
    fill(77, 255, 216);
    rect(600, 395, 10, 15);
    ellipse(600, 457, 25, 20);
    fill(255, 199, 254);
    arc(600, 450, 60, 100, PI, 0, CHORD);
    ellipse(600, 450, 70, 15);
  
    if (mouseX < 610 && mouseX > 550 && mouseY < 450 && mouseY > 400) {
      fill(255, 46, 70);
      arc(600, 450, 60, 100, PI, 0, CHORD);
      ellipse(600, 450, 70, 15);
    }
  
    //양말
    fill(43, 255, 237);
    ellipse(300,450,55,35);
    rect(313,420,30,60);
    
    fill(255, 69, 69);
    rect(313,390,30,15);
    
    if(mouseX < 325 && mouseX > 275 && mouseY < 437 && mouseY > 395){
      fill(0, 120, 247);
      ellipse(300,450,55,35);
    rect(313,420,30,60);
    }  
    pop();
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

//설명
  fill(242, 248, 252);
  rect(450,370,650,240);
  fill(214, 214, 214);
  rect(450,370,640,230);
  
  //양말
fill(255, 69, 69);
  ellipse(145,295,50,35);
  rect(155,270,30,50);
  fill(0, 255, 30);
  rect(155,250,30,15);
fill(255, 251, 41);
  ellipse(135,295,8,8);
  ellipse(155,270,8,8);
  ellipse(160,290,8,8);
  
  //선물상자
  fill(0, 255, 238);
  quad(700,450,760,450,760,505,700,505);
  fill(255, 0, 0);
  rect(730,477,8,57);
  rect(730,475.5,60,8);
  triangle(730,450,750,450,745,432);
  triangle(730,450,710,450,715,432);
  pop(); 
}

function endingBG() {
    push();
    rectMode(CENTER);
  fill(163, 181, 167);
  rect(450, 450, 750, 500);

  //바닥
  fill(117, 78, 15);
  rect(450, 620, 750, 150);
  fill(237, 177, 81, 50);
  for (let i = 80; i < 825; i += 40) {
    rect(i, 620, 12, 150);
  }

  //러그(색 수정 필요)
  fill(92, 87, 83);
  arc(450, 700, 750, 230, PI, 0, CHORD);
  //fill(252, 116, 116);
  //arc(450, 700, 700, 200, PI, 0, CHORD);
  fill(245, 19, 7);
  arc(450, 700, 620, 150, PI, 0, CHORD);

  //창문
  fill(256);
  rect(450, 300, 400, 200);
  fill(12, 12, 56);
  rect(450, 295, 380, 190);
  fill(256);
  rect(450, 325, 400, 8);
  rect(450, 260, 400, 8);
  rect(450, 300, 8, 200);
  
  fill(153, 152, 151,180);
  rect(250,310,100,220);
  rect(630, 310,100,220);


  //트리
  fill(38, 255, 86);
  triangle(75, 220, 75, 350, 150, 350);
  fill(14, 156, 28);
  quad(75, 350, 75, 440, 170, 440, 130, 350);
  fill(26, 102, 33);
  quad(75, 440, 75, 530, 190, 530, 160, 440);
  fill(10, 56, 12);
  quad(75, 530, 75, 620, 210, 620, 180, 530);
    pop();
}
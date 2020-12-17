let state = 'initial';
let bgm;
let nextSound;
let clapSound;

// fonts
let letsPlay;
let yun;
let temp;

// Background
let bg;
let garland;
let presents;
let keyExplantion;

//initial
let initBtn;

//insturction
let iStage = 0;
let iPrevBtn;
let iNextBtn;
let startBtn;

//ready & 
let page = 0;
let songNum = ''; //부를 노래(시작 누를 때까지 누른 키값 문자열로 합침)
let placeHolder = '노래 번호를 입력해주세요: ';
let songTitle = '';
let songSinger = '';
let lyrics;
let modeLyrics;
let mrs = {'12250': '', '10290': '',
'93516': '', '93626': '', '12408': '', '12170': '',
'75218': '', '60910': '', '14116': ''}; // mr 불러올 것(loadSound).
let song;
let numbers = [];

let mode; // 1절, 하이라이트
let mul = 1400; // 점수 산출 시 곱해주는 수(클수록 점수 후함)
let v1ModeBtn;
let fullModeBtn;

let countDown = -1;
let millisForCountDown;
let millisForScore;

let index = 0; // 노래 내 인덱스(경과시간에 따른)
let partScore = []; // 구간 점수(구간 내에 점수 다 저장하는 곳. 구간 끝날 때 평균 내고 [] 리셋)
let scores = []; // 구간당 평균 저장하는 곳. 마지막에 평균 낼 것
let finalScore; // scores의 avg
let threshold = 40;

let cam;
let camOn = false;

let songStage = 'hair';
let character;
let parts = ['hair', 'top', 'bottom', 'shoes', 'face'];
let clothes = {
    hair: [],
    top: [],
    bottom: [],
    shoes: [],
    face: []
} // 옷 이미지들 불러올 곳(preload)

let clothesGot = {}; //구간마다 딴 옷

let mic;
let micLevel;

let clapBtn;

//end
//머리, 상의, 하의, 신발, 표정 순 - 앞의 scores에 따라 불러오면 됨
let restartBtn;
let toMainBtn;
let endingSound;
let prince;
let commentBubble;
let comment;

function preload() {
    bg = loadImage('assets/images/background.png');
    garland = loadImage('assets/images/garland.png');
    presents = loadImage('assets/images/presents.png');
    keyExplantion = loadImage('assets/images/keyexplanation.png');

    letsPlay = loadFont('assets/fonts/LetsPlay.ttf');
    yun = loadFont('assets/fonts/YunTaemin.ttf');
    temp = loadFont('assets/fonts/jua.ttf');
    
    parts.forEach( part => {
        let images = [];
        for (let i = 0; i < 3; i++) {
            let img = loadImage(`assets/images/${part}${i}.png`);
            images.push(img);
        }
        clothes[part] = images;
    });

    Object.keys(mrs).forEach ( (key) => {
        mrs[key] = loadSound(`assets/sounds/songs/${key}.mp3`);
    })

    character = loadImage('assets/images/character.png');
    endingSound = loadSound('assets/sounds/effects/ending.mp3');
    prince = loadImage('assets/images/prince.png');
    commentBubble = loadImage('assets/images/commentBubble.png');

    bgm = loadSound('assets/sounds/songs/bgm.mp3');
    clapSound = loadSound('assets/sounds/effects/clap.mp3');
    nextSound = loadSound('assets/sounds/effects/next.wav');
  
  for (let i=0;i<10;i++) {
    numbers[i] = loadSound(`assets/sounds/effects/${i}.mp3`);
  }
}

function setup() {
    createCanvas(900, 900);
    restartBtn = new Button('다시 도전!', 18, 750, 240, 100, 50);
    toMainBtn = new Button('메인으로', 18, 750, 300, 100, 50);

    v1ModeBtn = new Button('1절만', 30, 300, 450, 200, 100);
    hlModeBtn = new Button('하이라이트만', 30, 600, 450, 200, 100);

    clapBtn = new Button('박수', 30, 700, 525, 80, 40);

    mic = new p5.AudioIn();
    mic.start();

    cam = createCapture(VIDEO);
    cam.hide();
    bgm.loop();
}

function draw() {

    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    textFont(temp);


    outsideBG();    

    switch(state){
        case 'initial':
            initialBG();
            break;

        case 'instruction':
            instructionBG();
            break;

        case 'ready':
            clothesGot = {}
            readyBG();
            textSize(25);
            push();
            textAlign(CENTER, CENTER);
            fill(255);
            rect(450, 530, 200, 50);
            if (songNum === '') {
                push();
                fill(150);
                textSize(15);
                text(`${placeHolder}`, 450, 530);

                if (millis() % 1000 < 400) {
                    rect(525, 530, 2, 15);
                }
                pop();
            }
            fill(0);
            text(`${songNum}`, 450, 530);
            pop();
            
            break;

        case 'sing':
            bgm.stop();

            if (countDown === 0 && song.currentTime() > modeLyrics[modeLyrics.length -1][0]) {
                song.stop();
            }

            if (countDown === 0 && !song.isPlaying()){
                state = 'end';
              clapSound.stop();
                endingSound.play();
                countDown = -1;

                //finalScore 산출
                let sum = 0;
                scores.forEach(score => {
                    sum += score;
                });
                finalScore = int(sum / 5); //중간에 취소했어도 5로 나눔. 중도취소니까

                return;
            }
            
            calScore();
            singBG();
            clapBtn.show();
            push();
            textSize(25);
            fill('yellow');
            if (camOn) text(`노래를 부르셔야 캠이 사라집니다!`, 450, 200);
            else text(`현재 곡: ${songTitle} - ${songSinger}`, 450, 200);
            pop();
            image(character, 285, 390, 482/3, 789/3);
            putOnClothes();

            if (!mode) {
                //모드를 안 정한 상태
                push();
                fill(0, 180);
                rect(450, 439.5, 750, 520);
                v1ModeBtn.show();
                hlModeBtn.show();
              
              (mouseX > 385 && mouseX < 525 && mouseY > 555 && mouseY < 605 || mul === 2500) ? fill('yellow'):fill(255);
                rect(450, 580, 150, 50);
                fill(0);
                textSize(20);
              
                text('점수 후하게!', 465, 577);
              
                stroke(0);
                strokeWeight(4);
              if (mul === 1400) {
                fill(255);
              }
                rect(395, 580, 20, 20);
              
                pop();
            } else {
                if (countDown === 0){
                    setIndex();
                }

                showLyrics();
                //모드를 정하고 시작해야 하는 상태
                showScore();
              
                if (camOn) {
                    image(cam, 280, 290, 200, 130);
                }

            }

            // 모드 정했고 카운트다운일 때
            if (countDown > 0) {
                push();
                fill(0, 180);
                rect(450, 439.5, 750, 520);
                fill(255);
                textSize(100);
                textStyle(BOLD);
                text(`${countDown}`, 450, 430);
                pop();


                if (millis() - millisForCountDown >= 1000) {
                    countDown--;
                    millisForCountDown = millis();
                    if (countDown === 0) {
                        if (mode === 'v1' && modeLyrics[0][1] === '전주 중') song.play();
                        else song.play(undefined, undefined, undefined, modeLyrics[0][0], 
                            modeLyrics[modeLyrics.length - 1][0] - modeLyrics[0][0]);
                        
                        millisForScore = millis();
                    }
                }
            }        
            

            break;

        case 'end':
            endingBG();
            push();
            textSize(40);
            text(`${finalScore}`, 490, 250)
            pop();
            image(character, 620, 470, 482/2, 789/2);
            image(prince, 310, 450, prince.width/1.5, prince.height/1.5);
            image(commentBubble, 145, 300, commentBubble.width/1.2, commentBubble.height/1.2);

            push();
            textSize(23);

            if (finalScore >= 80) {
                comment = comments[0];
            } else if (finalScore >= 50) {
                comment = comments[1];
                textSize(18);
            } else {
                comment = comments[2];
            }

            textAlign(CENTER, CENTER);
            text(`${comment}`, 125, 290);
            pop();
            putOnClothes();
            restartBtn.show();
            toMainBtn.show();
            break;

        default: // loading 등등
            fill(0);
            text('로딩중..', 450, 450);
            break;
    }

}


function mousePressed() {
    switch(state){
        case 'initial':
            if (mouseX > 405 && mouseX < 495 && mouseY > 455 && mouseY && 510) {
                state = 'instruction';
                nextSound.play();
            }
            break;
        case 'instruction':
            if(mouseX>730&&mouseX<790&&mouseY>450&&mouseY<505){
                nextSound.play();
                if (iStage === 0) {
                    iStage++;
                } else {
                    state = 'ready';
                    iStage--; //그냥 미리 초기화
                }
            }
            break;
        case 'ready':
            if (mouseX > 565 && mouseX < 710 && mouseY > 500 && mouseY < 520) {
                page ? page--:page++;
                nextSound.play();
            }
            break;
        case 'sing':
            if (!mode) {
                if (v1ModeBtn.over(mouseX, mouseY) || hlModeBtn.over(mouseX, mouseY)) {
                    
                    (v1ModeBtn.over(mouseX, mouseY)) ? mode = 'v1' : mode = 'hl';

                    if (mode === 'hl') index = 1;
                    countDown = 3;
                    modeLyrics = lyrics[mode];
                    millisForCountDown = millis();
                } else if (mouseX > 385 && mouseX < 525 && mouseY > 555 && mouseY < 605) {
                  if (mul === 1400) mul = 2500;
                  else mul = 1400;
                }  
            } else if (clapBtn.over(mouseX, mouseY)) {
                clapSound.play();
            }
            break;
        case 'end':
            if (restartBtn.over(mouseX, mouseY) || toMainBtn.over(mouseX, mouseY)) {
                resetVariables();
                if (toMainBtn.over(mouseX, mouseY)) state = 'initial';
                else state = 'ready';
                bgm.loop();
            }
            break;
        default:
            break;
    }
}

function resetVariables () {
    songNum = '';
    index = 0;
    songStage = 'hair';
    mode = undefined;
    song = undefined;
    lyrics = undefined;
    modeLyrics = undefined;
    partScore = [];
    camOn = false;
    endingSound.stop();
    page = 0;
    micLevel = undefined;
    scores = [];
    mul = 1400;
}

function keyPressed() {
    switch(state) {
        case 'ready':
        
            if (key === 'Backspace') {
                if (songNum.length > 0) songNum = songNum.slice(0, -1);
            } else if (key === 'Enter') {
                if (songNum.length === 0) {
                    alert('노래 번호를 입력해주세요!')
                } else if (songs[songNum]) {
                    songTitle = songs[songNum].title;
                    songSinger = songs[songNum].singer;
                    lyrics = songs[songNum].lyrics;
                    modeLyrics = lyrics.v1; //일단 full로 해놓고 모드 입력받으면 바꾸기
                    song = mrs[songNum];
                    clothesGot = {};
                    scores = [];
                    state = 'sing';
                } else {
                    alert('해당하는 노래가 없습니다! 번호를 확인해주세요!');
                }
            } else if (songNum.length > 4) {
                alert('5자리까지만 입력 가능합니다!')
            } else if (keyCode > 57 || keyCode < 48) {
                alert('숫자만 입력해주세요!');
            } else {
              
              numbers[key].play();
                songNum = songNum + key;
            }
            break;
        case 'sing':
            //리모콘 기능들
            //간주점프
            if (key === 'j' && ['전주 중', '간주 중'].includes(modeLyrics[index][1])) {
                song.jump(modeLyrics[index][0]);
            } else if (key === 'c') {
                //취소
                song.stop();
            }
            break;
        default:
            break;
    }
}

function putOnClothes() {
    const {hair, top, bottom, shoes, face} = clothesGot;

    if (state === 'sing') {
        if (bottom) image(bottom, 285, 470, bottom.width/3, bottom.height/3);
        if (top) image(top, 285, 395, top.width/3, top.height/3);
        if (hair) {
            if (scores[0] > 70) {
                image(hair, 285, 310, hair.width/3, hair.height/3);
            } else if (scores[0] > 40) {
                image(hair, 285, 280, hair.width/3, hair.height/3);
            } else {
                image(hair, 285, 260, hair.width/3, hair.height/3);
            }
        }
        if (shoes) image( shoes, 285, 510, shoes.width/3, shoes.height/3);
        if (face) image( face, 285, 320, face.width/2, face.height/2);
    } else {
        if (bottom) image(bottom, 620, 570, bottom.width/2, bottom.height/2);
        if (top) image(top, 620, 480, top.width/2, top.height/2);

        if (hair) {
            if (scores[0] > 70) {
                image(hair, 620, 340, hair.width/2, hair.height/2);
            } else if (scores[0] > 40) {
                image(hair, 620, 310, hair.width/2, hair.height/2);
            } else {
                image(hair, 620, 270, hair.width/2, hair.height/2);
            }
        }
        if (shoes) image(shoes, 620, 650, shoes.width/2, shoes.height/2);
        if (face) image(face, 620, 370, 57, face.height);
    }
    
}

function setIndex() {
    if (song.isPlaying) {
        while (index <= modeLyrics.length - 2 && song.currentTime() > modeLyrics[index][0]) {
            index++;

            if (modeLyrics[index][2] || index === modeLyrics.length -1) {
                let sum = 0;
                let ignore = 0;

                partScore.forEach( (score, index) => {
                    if (score < threshold && partScore[index-1] > threshold) { 
                        // 노래 안불러서 점수 낮은 게 아니라 노래 사이였을 경우
                        ignore++;
                    } else {
                        sum += score;
                    }
                });
                const partAvg = sum/(partScore.length-ignore);
                scores.push(partAvg);
                partScore = [];

                // 옷 배정
                if (partAvg > 70) {
                    clothesGot[songStage] = clothes[songStage][0];
                } else if (partAvg > 40) {
                    clothesGot[songStage] = clothes[songStage][1];
                } else {
                    clothesGot[songStage] = clothes[songStage][2];
                }
        
                if (modeLyrics[index][2]) {
                    songStage = modeLyrics[index][2];
                }
            }

        }    
        while (index > 0 && modeLyrics[index - 1][0] > song.currentTime()){
            index--;
        }
    }
}

function calScore() {
    // 구간 파악 및 구간 전환 시 이전 구간 평균 점수 산출.. 은 전환시 해야해서 setIndex로 옮김
    // 구간 점수(partScores) 채우기 - 1초마다

    if (song.isPlaying() && millis() - millisForScore >= 1000) {
        //전주간주 아닐때만 산출
        if (!['전주 중', '간주 중', ' '].includes(modeLyrics[index][1])) {
            const tempScore = Math.min(int(mul * mic.getLevel()) + 20, 100);
            
            if (tempScore > threshold || partScore[partScore.length-1] < threshold) {
                micLevel = tempScore;
            } // 계속 안 부르는 것 vs 노래 사이사이 끊김 구별 (아까도 조용했는지 체크)

            if (partScore[partScore.length-2] < threshold &&
                partScore[partScore.length-1] < threshold &&
                tempScore < threshold) {
                    camOn = true;} //3연속 저득점일 때 캠온
            
            if (tempScore > threshold) {
                camOn = false;
            }

            partScore.push(tempScore);
        }
        millisForScore = millis();
    } 
}

function showLyrics() {

    if (index < modeLyrics.length - 1) {
    
        if (index % 2 === 0) {
            fill(153, 255, 153);
            text(modeLyrics[index][1], 450, 595);
            fill(255);
            text(modeLyrics[index+1][1], 450, 665);
        } else {
            fill(153, 255, 153);
            text(modeLyrics[index][1], 450, 595);
            fill(255);
            text(modeLyrics[index+1][1], 450, 665);
        }
    }
}

function showScore() {
    // 1. 스테이지에 따른 캐릭터와 옷장
    clothes[songStage].forEach( cloth => {
        const index = clothes[songStage].indexOf(cloth);
        if (songStage === 'face') {
            if (index === 1) {
                image(cloth, 695.25 - index * 102.25, 400, 57, 5);  
            } else {
                image(cloth, 695.25 - index * 102.25, 400, 57, 29)
            }
        } else {
            image(cloth, 695.25 - index * 102.25, 400, cloth.width/5.5, cloth.height/5.5);
        }
    });
    // 2. 점수에 따라 옷장 사이를 움직이는 화살표
    if (!(['전주 중', '간주 중', ' '].includes(modeLyrics[index][1]))) {
        push();
        fill(255,0,0);
        stroke(0);
        translate(450+ micLevel * 3,370);
        rotate(radians(180));
        triangle(0,40,40,40,20,0)
        pop(); // point
    }

}
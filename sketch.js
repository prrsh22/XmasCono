let state = 'initial';

// fonts
let letsPlay;
let yun;
let temp;

// Background
let bg;
let garland;
let presents;

//initial
let initBtn;

//insturction
let iStage = 0;
let iPrevBtn;
let iNextBtn;
let startBtn;
let username; // 이름도 나중에 꼭 입력받을게요~~

//ready & sing
let songNum = ''; //부를 노래(시작 누를 때까지 누른 키값 문자열로 합침)
let songTitle = '';
let songSinger = '';
let lyrics;
let modeLyrics;
let mrs = {'12250': '', '202012': '',
'93516': '', '93626': '', '12408': '', '12170': ''}; // mr 불러올 것(loadSound).
let song;

let mode; // 1절, 하이라이트
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

//end
//머리, 상의, 하의, 신발, 표정 순 - 앞의 scores에 따라 불러오면 됨
let restartBtn;
let recordBtn;
let toMainBtn;
let endingSound;

function preload() {
    bg = loadImage('assets/images/background.png');
    garland = loadImage('assets/images/garland.png');
    presents = loadImage('assets/images/presents.png');

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
};

function setup() {
    createCanvas(900, 900);
    iPrevBtn = new Button('<', 50, );
    restartBtn = new Button('다시 도전!', 30, 300, 800, 200, 100);
    toMainBtn = new Button('메인으로', 30, 600, 800, 200, 100);

    v1ModeBtn = new Button('1절만', 30, 300, 450, 200, 100);
    hlModeBtn = new Button('하이라이트만', 30, 600, 450, 200, 100);

    mic = new p5.AudioIn();
    mic.start();

    cam = createCapture(VIDEO);
    cam.hide();
}

function draw() {

    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    textFont(temp);

    image(bg,450,450,920,920);
    image(garland,450,85,900,150);
    image(presents,450,790,700,150);

    outsideBG();    

    switch(state){
        case 'initial':
            initialBG();
            break;

        case 'instruction':
            instructionBG();
            // const textBox = textBox(iStage); textBox.show()
            // iNextBtn, iPrevBtn
            break;

        case 'ready':
            // 배경 & 화면 클래스. 노래 목록도. 목록에 시작 버튼, 곡번호 입력칸도!
            readyBG();
            textSize(25);
            push();
            fill(255);
            rect(450, 530, 200, 50);
            fill(0);
            text(`${songNum}`, 450, 530);
            pop();

            if (songs[songNum]) {
                //rect(450, 200, 300, 100);
                //시작 전, 해당하는 노래가 있으면 일치하는 노래 있다고 목록에서 표시
            }
            
            break;

        case 'sing':
            
            if (countDown === 0 && song.currentTime() > modeLyrics[modeLyrics.length -1][0]) {
                song.stop();
            }

            if (countDown === 0 && !song.isPlaying()){
                state = 'end';
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
            push();
            textSize(25);
            fill('yellow');
            if (camOn) text(`노래를 부르셔야 거울이 사라집니다!`, 450, 200);
            else text(`현재 곡: ${songTitle} - ${songSinger}`, 450, 200);
            pop();
            image(character, 285, 390, 482/3, 789/3);
            putOnClothes();

            if (!mode) {
                //모드를 안 정한 상태
                push();
                fill(0, 180);
                rect(450, 450, 750, 540);
                v1ModeBtn.show();
                hlModeBtn.show();
                pop();
            } else {
                if (countDown === 0){
                    setIndex();
                }

                showLyrics();
                //모드를 정하고 시작해야 하는 상태
                if ((mode === 'full')&&(song.currentTime()<5)) {
                    //완창상태고 전주 중일 때
                    fill(255);
                    rect(450, 390, 750, 340);
                    fill(0);
                    text(`${songTitle}`, 450, 360);
                    text(`- ${songSinger}`, 450, 400);
                } else {
                    showScore();
                }

                if (camOn) {
                    image(cam, 450, 450, 750, 460);
                }
            }

            // 모드 정했고 카운트다운일 때
            if (countDown > 0) {
                push();
                fill(0, 180);
                rect(450, 450, 750, 540);
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
            text(`${finalScore}`, 500, 250)
            image(character, 450, 530, 482/2, 789/2);
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
                state = 'ready';
            }
            // if (mouseX < 610 && mouseX > 550 && mouseY < 450 && mouseY > 400) {
            //     state = 'ready';
            // } else if (mouseX < 325 && mouseX > 275 && mouseY < 437 && mouseY > 395) {
            //     state = 'instruction';
            // }
            break;
        case 'instruction':
            if(mouseX>730&&mouseX<790&&mouseY>450&&mouseY<505){
                state = 'ready';
            }
            break;
        case 'ready':
            break;
        case 'sing':
            if (!mode) {
                if (v1ModeBtn.over(mouseX, mouseY) || hlModeBtn.over(mouseX, mouseY)) {
                    
                    (v1ModeBtn.over(mouseX, mouseY)) ? mode = 'v1' : mode = 'hl';

                    if (mode === 'hl') index = 1;
                    countDown = 3;
                    modeLyrics = lyrics[mode];
                    console.log(mode);
                    millisForCountDown = millis();
                }  
            }
            break;
        case 'end':
            resetVariables();
            if (restartBtn.over(mouseX, mouseY)) state = 'ready';
            if (toMainBtn.over(mouseX, mouseY)) state = 'initial';
 
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
        if (bottom) image(bottom, 450, 630, bottom.width/2, bottom.height/2);
        if (top) image(top, 450, 540, top.width/2, top.height/2);

        if (hair) {
            if (scores[0] > 70) {
                image(hair, 450, 400, hair.width/2, hair.height/2);
            } else if (scores[0] > 40) {
                image(hair, 450, 370, hair.width/2, hair.height/2);
            } else {
                image(hair, 450, 330, hair.width/2, hair.height/2);
            }
        }
        if (shoes) image(shoes, 450, 710, shoes.width/2, shoes.height/2);
        if (face) image(face, 450, 430, 57, face.height);
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
                console.log(scores);
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
        //같은 곡 또 부르는 경우, 멈춘 시점의 currentTime이 유지되기 때문에
        // index가 ++되어 1이 됨.. 그것 리셋
    
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
            const tempScore = Math.min(int(1000 * mic.getLevel()) + 20, 100);
            
            if (tempScore > threshold || partScore[partScore.length-1] < threshold) {
                micLevel = tempScore;
            } // 계속 안 부르는 것 vs 노래 사이사이 끊김 구별 (아까도 조용했는지 체크)

            if (partScore[partScore.length-2] < threshold &&
                partScore[partScore.length-1] < threshold
                && tempScore < threshold) {
                    camOn = true;} //3연속 저득점일 때 캠온
            
            if (tempScore > threshold) {
                camOn = false;
            }

            partScore.push(tempScore);
            console.log(partScore);
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
        translate(455+ micLevel * 3,370);
        rotate(radians(180));
        triangle(0,40,40,40,20,0)
        pop(); // point
    }

    // 3. 점수(구간)에 따라 달라지는 응원 멘트
}
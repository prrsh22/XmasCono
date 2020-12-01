let state = 'initial';

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
let mrs = {'12250': ''}; // mr 불러올 것(loadSound).
let song;

let index = 0; // 노래 내 인덱스(경과시간에 따른)
let partScore = []; // 구간 점수(구간 내에 점수 다 저장하는 곳. 구간 끝날 때 평균 내고 [] 리셋)
let scores = []; // 구간당 평균 저장하는 곳. 마지막에 평균 낼 것
let finalScore; // scores의 avg

let songStage = 'shoes';
let character;
let parts = ['hair', 'top', 'bottom', 'shoes', 'face'];
let clothes = {
    hair: [],
    top: [],
    bottom: [],
    shoes: [],
    face: []
} // 옷 이미지들 불러올 곳(preload)

let clothesGot = []; //구간마다 딴 옷

let mic;
let micLevel;

//end
//머리, 상의, 하의, 신발, 표정 순 - 앞의 scores에 따라 불러오면 됨
let restartBtn;
let recordBtn;


function preload() {
    //이미지는 프리로드. 노래는 안하는 게 나을듯 어차피 loading 화면 필요(근데 p5에서 너무오래걸려)
    bg = loadImage('assets/images/background.png');
    garland = loadImage('assets/images/garland.png');
    presents = loadImage('assets/images/presents.png');
    
    parts.forEach( part => {
        let images = [];
        for (let i = 0; i < 3; i++) {
            let img = loadImage(`assets/images/${part}${i}.png`);
            images.push(img);
        }
        clothes[part] = images;
    });

    Object.keys(mrs).forEach ( (key) => {
        mrs[key] = loadSound(`assets/songs/${key}.mp3`);
    })

    character = loadImage('assets/images/character.png');
};

function setup() {
    createCanvas(900, 900);
    initBtn = new Button('시작', 30, 450, 700, 200, 100);
    iPrevBtn = new Button('<', 50, );
    restartBtn = new Button('다시 도전!', 30, 450, 600, 200, 100);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {

    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);

    image(bg,450,450,920,920);
    image(garland,450,85,900,150);
    image(presents,450,790,700,150);

    outsideBG();    

    switch(state){
        case 'initial':
            initialBG();
            initBtn.show();
            break;

        case 'instruction':
            instructionBG();
            fill(0);
            text('설명', 450, 450);
            // const textBox = textBox(iStage); textBox.show()
            // iNextBtn, iPrevBtn
            break;

        case 'ready':
            // 배경 & 화면 클래스. 노래 목록도. 목록에 시작 버튼, 곡번호 입력칸도!
            fill(255);
            rect(450, 450, 300, 100);
            textSize(30);
            push();
            fill(0);
            text(`${songNum}`, 450, 450);
            pop();

            if (songs[songNum]) {
                //rect(450, 200, 300, 100);
                //시작 전, 해당하는 노래가 있으면 일치하는 노래 있다고 목록에서 표시
            }
            break;

        case 'sing':
            if (!song.isPlaying()) {
                state = 'end';
                return;
            }
            
            singBG();
            showLyrics();
            push();
            textSize(25);
            fill('yellow');
            text(`현재 곡: ${songTitle} - ${songSinger}`, 450, 200);
            pop();


            if (song.currentTime() < 7) {
                fill(255);
                rect(450, 390, 750, 340);
                fill(0);
                text(`${songTitle}`, 450, 360);
                text(`- ${songSinger}`, 450, 400);
            } else {
                image(character, 285, 390, 482/3, 789/3);
                showScore();
            }
            

            break;

        case 'end':
            endingBG();
            fill(0);
            text('끝', 450, 450);
            restartBtn.show();
            break;

        default: // loading 등등
            fill(0);
            text('로딩중..', 450, 450);
            break;
    }

}

function startSing () {
    state = 'sing';
    song.play();
}

function mousePressed() {
    switch(state){
        case 'initial':
            if (initBtn.over(mouseX, mouseY)) state = 'instruction';
            break;
        case 'instruction':
            state = 'ready';
            break;
        case 'ready':
            break;
        case 'end':
            if (restartBtn.over(mouseX, mouseY)) state = 'ready';
            songNum = '';
            index = 0;
            songStage = 'hair';
            break;
        default:
            break;
    }
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
                    song = mrs[songNum];
                    startSing();
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
            if (key === 'j' && ['전주 중', '간주 중'].includes(lyrics[index][1])) {
                song.jump(lyrics[index][0]);
            } else if (key === 'c') {
                //취소
                song.stop();
            }
            break;
        default:
            break;
    }
}

function showLyrics() {

    if (index < lyrics.length - 2) {
        if (song.currentTime() > lyrics[index][0]){
          index++;
        }
    }
    
    if (index < lyrics.length - 1) {
    
        if (index % 2 === 0) {
            fill(153, 255, 153);
            text(lyrics[index][1], 450, 595);
            fill(255);
            text(lyrics[index+1][1], 450, 665);
        } else {
            fill(153, 255, 153);
            text(lyrics[index][1], 450, 595);
            fill(255);
            text(lyrics[index+1][1], 450, 665);
        }
    }
}

function showScore() {
    // 1. 스테이지에 따른 캐릭터와 옷장
    clothes[songStage].forEach( cloth => {
        const index = clothes[songStage].indexOf(cloth);
        image(cloth, 695.25 - index * 102.25, 400, 80, 80);
    });
    // 2. 점수에 따라 옷장 사이를 움직이는 화살표
    if (song.currentTime() > 7 && !(['전주 중', '간주 중'].includes(lyrics[index][1]))) {
        micLevel = Math.min(int(1000 * mic.getLevel()), 100);
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
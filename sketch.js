let state = 'ready';

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
let song; // mr 불러올 것(loadSound)

let index = 0; // 노래 내 인덱스(경과시간에 따른)
let partScore = []; // 구간 점수(구간 내에 점수 다 저장해서 구간 끝날 때 평균 내고 리셋)
let scores = []; // 구간당 평균 저장해서 마지막에 평균 냄
let finalScore; // scores의 avg

//score


function preload() {
    //노래를 미리 가져와 두는 게 나을 것 같기도 한데... 너무 오래 걸릴까
}

function setup() {
    createCanvas(900, 900);
    initBtn = new Button('시작', 30, 450, 700, 200, 100);
    iPrevBtn = new Button('<', 50, );
}

function draw() {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    switch(state){
        case 'initial':
            background(0); // 시작 화면 클래스 가져오면 됨
            initBtn.show();
            break;

        case 'instruction':
            background(0); // 노래방 배경 클래스
            fill('white');
            text('설명', 450, 450);
            // const textBox = textBox(iStage); textBox.show()
            // iNextBtn, iPrevBtn
            break;

        case 'ready':
            background(0); // 배경 & 화면 클래스. 노래 목록도. 목록에 시작 버튼, 곡번호 입력칸도!
            rect(450, 450, 300, 100);
            textSize(30);
            text(`${songNum}`, 450, 450);

            if (songs[songNum]) {
                //rect(450, 200, 300, 100);
                //시작 전, 해당하는 노래가 있으면 일치하는 노래 있다고 목록에서 표시
            }
            break;

        case 'sing':
            background(0); // 배경 & 화면 클래스, 가사

            if (!song.isPlaying()) {
                state = 'score';
                return;
            }

            if (song.currentTime() < 7) {
                fill(255, 255, 77);
                text('Must Have Love', 450, 420);
                text('- 브라운아이드걸스, SG워너비', 450, 460);
            }

            if (index < lyrics.length - 2) {
                if (song.currentTime() > lyrics[index][0]){
                  index++;
                }
            }
            
            if (index < lyrics.length - 1) {
            
                if (index % 2 === 0) {
                    fill(153, 255, 153);
                    text(lyrics[index][1], 450, 820);
                    fill(255);
                    text(lyrics[index+1][1], 450, 860);
                } else {
                    fill(153, 255, 153);
                    text(lyrics[index][1], 450, 820);
                    fill(255);
                    text(lyrics[index+1][1], 450, 860);
                }
            }
            break;
            
        case 'score':
            background(0); // 점수 화면 클래스
            fill('white');
            text('점수', 450, 450);
            break;

        case 'end':
            background(0); // 시작화면 클래스
            fill('white');
            text('끝', 450, 450);
            break;

        default: // loading 등등
            background(0);
            fill('white');
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
                    state = 'loading';
                    song = loadSound(`assets/${songNum}.mp3`, startSing); 
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
            //리모콘 기능들: 간주점프, 취소
            break;
        default:
            break;
    }
}
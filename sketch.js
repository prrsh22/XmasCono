let state = 'ready';

//initial
let initBtn;

//insturction
let iStage = 0;
let iPrevBtn;
let iNextBtn;
let startBtn;

//ready
let songNum = ''; //부를 노래(시작 누를 때까지 누른 키값 문자열로 합침)


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
            text(`${songNum}`, 450, 450)
            break;

        case 'sing':
            background(0); // 배경 & 화면 클래스, 가사
            fill('white');
            text('노래', 450, 450);
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

        default: // loading 같은 것
            break;
    }

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
            } else if (songNum.length > 4) {
                alert('5자리까지만 입력 가능합니다!')
            } else if (keyCode > 57 || keyCode < 48) {
                alert('숫자만 입력해주세요!');
            } else {
                songNum = songNum + key;
            }
            break;
        default:
            break;
    }
}
class instructionBox {
    constructor(stage) {
        this.text = instructions[stage];
    }
    
    show(){
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(this.tSize);
        text(this.title, this.x, this.y);    
    }
}

const instructions = [
    ['설명 1', '설명 1-1', '설명 1-2'], 
    ['설명 2', '설명 2-1'],
    ['설명 3'],
    ['마지막 설명', '둘째줄', '셋째줄', '넷째줄']
]

// 폭, 높이 정하고, 설명 줄 수에 따라 margin 구해서
// 텍스트마다 간격 띄어서 뜰 수 있게

// 할일: 사각형 좌표 정하기, margin 구하고 텍스트 루프 도는 것
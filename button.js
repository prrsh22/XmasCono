class Button {
    constructor(title,tSize,x,y,w,h) {
        this.title = title;
        this.tSize = tSize;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    over(mx, my) {
        let x1 = this.x - this.w/2;
        let x2 = this.x + this.w/2;
        let y1 = this.y - this.h/2;
        let y2 = this.y + this.h/2;
        return (mx > x1 && mx < x2 && my > y1 && my < y2);
    }
    
    show(){
        (this.over(mouseX, mouseY)) ? fill('green'):fill('yellow');

        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(this.tSize);
        text(this.title, this.x, this.y);    
    }
    
  }
  
  
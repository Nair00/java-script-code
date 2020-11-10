class Snake {
    constructor() {
        this.x = floor(random(width / step)) * step;
        this.y = floor(random(height / step)) * step;
        this.xspeed = 0;
        this.yspeed = 0;
        this.dead = false;

        this.score = 2;
        this.tail = [];
        this.tail.unshift(createVector(this.x, this.y));
        this.tail.unshift(createVector(this.x - step, this.y));
        this.tail.unshift(createVector(this.x - step*2, this.y));
        
        //this.tail.push([this.x - 1 * step, this.y]);
    }

	update() {
        if(!this.dead){
            this.move();
            this.eventCheck();
        }
    }

    
    eventCheck(){
        if(s.x == a.x && s.y == a.y)
            eat(a);

        if (s.x > width || s.x < 0 || s.y > height || s.y < 0) {
            setup();
            pause = true;
        } else for(var i = 0; i < s.score; i++) {
            var part = s.tail[i];

        if(part.x == s.x && part.y == s.y) {
            setup();
            pause = true;
        }
	}
}
    
    move(){
		this.x = this.x + this.xspeed * step;
		this.y = this.y + this.yspeed * step;
        this.tail.shift();
        this.tail.push(createVector(this.x, this.y));
    }

	show() {
        noStroke();
        fill(0, 255, 0);
        rect(this.x + outline,this.y + outline, step - outline * 2, step - outline * 2);

        rect((this.x + this.tail[this.tail.length - 1].x) / 2.0 + outline, (this.y + this.tail[this.tail.length - 1].y) / 2.0 + outline, step - outline * 2, step - outline * 2);

        for(var i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x + outline, this.tail[i].y + outline, step - outline * 2, step - outline * 2);
            if(i < this.tail.length - 1){
                let x = (this.tail[i].x + this.tail[i + 1].x) / 2;
                let y = (this.tail[i].y + this.tail[i + 1].y) / 2;
                rect(x + outline, y + outline, step - outline * 2, step - outline * 2);
            }
        }
	}

	dir(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}
}
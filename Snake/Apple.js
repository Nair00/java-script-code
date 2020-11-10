class Apple {
    constructor() {
        this.x = floor(random(width / step));
        this.y = floor(random(height / step));

        this.x = this.x * step;
        this.y = this.y * step;
    }

    show() {
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, step, step);
    }
}
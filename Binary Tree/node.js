class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    addNode(n) {
        if (n.value < this.value) {
            if(this.left == null){
                this.left = n;
            } else {
                this.left.addNode(n);
            }
        } else if(n.value > this.value) {
            if(this.right == null){
                this.right = n;
            } else {
                this.right.addNode(n);
            }
        }
    }

    visit(x, y, X, Y) {
        if (this.left != null) {
            this.left.visit(x / 2, y + 50, x, y);
        }
        line(x, y, X, Y);
        ellipse(x + 6, y - 5, 30);
        fill(0);
        text(this.value, x, y);
        fill(255);
        console.log(this.value + ' ' + x + ' ' + y);
        if (this.right != null) {
            this.right.visit(x + x / 2, y + 50, x, y);
        }
    }
}
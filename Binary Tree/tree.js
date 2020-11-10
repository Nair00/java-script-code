class Tree {
    constructor() {
	this.root = null;}

    traverse(){
        noStroke();
        fill(255);
        var x = width / 2;
        var y = 30;
        this.root.visit(x, y, x, y);
    }

    addValue(val) {
        var n = new Node(val);
        if (this.root == null) {
            this.root = n;
        } else {
            this.root.addNode(n);
        }
    }
}
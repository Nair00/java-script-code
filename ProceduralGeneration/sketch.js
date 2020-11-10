var cols, rows;
var w = 1260;
var h = 600;
var scl = 20;
var flying = 0;

var terrain;
let temp;

function setup() {
	createCanvas(800, 600, WEBGL);
	cols = w / scl;
	rows = h / scl + 1;
	terrain = [];
}

function draw() {
	
	flying -= 0.05;
	
	// var yoff = flying;
	// for (var y = 0; y < rows; y++) {
	// 	var xoff = 0;
	// 	for (var x = 0; x < cols; x++) {
	// 	terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 150);
	// 	xoff += 0.1;
	// 	}
	// 	yoff += 0.1;
	// }
	
	var yoff = 0.0;
	for(var x = 0; x < cols; x++) {
		terrain[x] = [];
		var xoff = flying;
		for(var y = 0; y < rows; y++) {
			terrain[x].push(map(noise(xoff, yoff), 0, 1, -200, 200));
			xoff += 0.1;
		}
		yoff += 0.1;
	}
	
	background(0);
	strokeWeight(1);
	stroke(0);
	fill(255);

	rotateX(PI / 3);
	
	translate(-w/2, -h/2);

	for (var y = 0; y < rows; y++) {
		beginShape(TRIANGLE_STRIP);
		for (var x = 0; x < cols - 1; x++) {
			vertex(x*scl, (y + 1)*scl, terrain[x][y+1]);
			vertex(x*scl, y*scl, terrain[x][y]);
			vertex((x+1)*scl, y*scl, terrain[x+1][y]);
			vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
		}
		endShape();
	}
}
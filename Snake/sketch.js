var s;
var a;
var step = 20;
var outline = 2;
var pause = true;

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	a = new Apple();
	frameRate(10);
}

function draw() {
	background(51);

	a.show();
	s.show();

	if(!pause){
		s.update();
		// eventCheck();
	}
}

function keyPressed() {
	if(keyCode === DOWN_ARROW || keyCode == 83) {
		pause = false;
		s.dir(0, 1);
	} else if(keyCode === UP_ARROW || keyCode == 87) {
		pause = false;
		s.dir(0, -1);
	} else if(keyCode === LEFT_ARROW || keyCode == 65) {
		pause = false;
		s.dir(-1, 0);
	} else if(keyCode === RIGHT_ARROW || keyCode == 68) {
		pause = false;
		s.dir(1, 0);
	}
}

function eat(other) {
	delete other;
	a = new Apple();
	s.score = s.score + 1;

	while (check()) {
		console.log(s.score);
		delete a;
		a = new Apple();
	}

	s.tail.unshift(createVector(s.tail[0].x, s.tail[0].y));
}

function check() {
	cond = false;

	s.tail.forEach(part => {
		if (part.x == a.x && part.y == a.y) {
			cond = true;
		}
	});

	return cond;
}

function eventCheck(){
	if(s.x == a.x && s.y == a.y)
		eat(a);

	if (s.x > width || s.x < 0 || s.y > height || s.y < 0) {
		setup();
		pause = true;
	} 
	
	for(var i = 0; i < s.tail.length; i++) {
		var part = s.tail[i];

		if(part.x == s.x && part.y == s.y) {
			setup();
			pause = true;
		}
	}
}
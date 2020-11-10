var angle = PI/6;

var slider;
function setup() {
	createCanvas(600, 600);
	slider = createSlider(0, TWO_PI, PI / 6, PI / 60)
}

function draw() {
	background(51);
	angle = slider.value();

	translate(width / 2, height)

	var len = 200;
	stroke(255);
	branch(len);
}

function branch(len){
	line(0, 0, 0, -len);
	translate(0, -len);
	if(len > 4){
		push()
		rotate(angle);
		branch(len * 0.67);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.67);
		pop();
	}
}
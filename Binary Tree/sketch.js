var tree;

function setup() {
	createCanvas(1000, 600);
	background(51);
	tree = new Tree();

	for (i = 0; i < 10; i++)
		tree.addValue(floor(random(100)));

	console.log(tree);
	tree.traverse();

}
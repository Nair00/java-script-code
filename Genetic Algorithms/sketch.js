let target;
let mutationRate;
let popmax;
let population;

let bestPhrase;
let allPhrases;
let stats;

function setup() {
	bestPhrase = createP("Best phrase:");
	//bestPhrase.position(10,10);
	bestPhrase.class("best");

	allPhrases = createP("All phrases:");
	allPhrases.position(600, 10);
	allPhrases.class("all");

	stats = createP("Stats");
	//stats.position(10,200);
	stats.class("stats");

	//createCanvas(windowWidth, windowHeight);
	target = "To be or not to be.";
	mutationRate = 0.001;
	popmax = 1000;

	population = new Population(target, mutationRate, popmax);
}

function draw() {
	population.naturalSelection();
	population.generate();
	population.calcFitness();
	population.evaluate();

	if(population.isFinished()) {
		noLoop();
	}
	displayInfo();
}

function displayInfo() {
  	let answer = population.getBest();

  	bestPhrase.html("Best phrase:<br>" + answer);

 	let statstext = "total generations:     " + population.getGenerations() + "<br>";
	statstext += "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
  	statstext += "total population:      " + popmax + "<br>";
 	statstext += "mutation rate:         " + mutationRate * 100 + "%";

 	stats.html(statstext);

  	allPhrases.html("All phrases:<br>" + population.allPhrases())
}


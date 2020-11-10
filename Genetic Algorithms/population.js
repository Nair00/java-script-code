class Population {
    constructor(t, mR, num) {
        this.target = t;
        this.mutationRate = mR;
        this.population = [];
        this.matingPool;
        this.generations = 0;   //number of generations
        this.finished = false;  //check if the target has been reached
        this.perfectScore = 1;

        this.best = "";

        for(let i = 0; i < num; i++){
            this.population[i] = new DNA(this.target.length);
        }
        this.matingPool = [];

        
	    this.calcFitness();
    }

    calcFitness() {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcFitness(this.target);
        }
    }

    isFinished() {
        return this.finished;
    }

    naturalSelection() {
        this.matingPool = [];

        let maxFitness = 0;
        this.population.forEach(element => {
            if (element.fitness > maxFitness) {
                maxFitness = element.fitness;
            }
        });
        this.population.forEach(element => {
            let fitness = map(element.fitness, 0, maxFitness, 0, 1);

            for(let i = 0; i < fitness * 100; i++) {
                this.matingPool.push(element);
            }
        });
    }

    generate() {
        for(let i = 0; i < this.population.length; i++) {
            let a = floor(random(this.matingPool.length));
            let b = floor(random(this.matingPool.length));
            let parentA = this.matingPool[a];
            let parentB = this.matingPool[b];
            let child = parentA.crossover(parentB);

            child.mutate(this.mutationRate);
            this.population[i] = child;
        }
        this.generations++;

    }

    evaluate() {
        let worldRecord = 0.0;
        let index = 0;

        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > worldRecord) {
                index = i;
                worldRecord = this.population[i].fitness;
            }
        }

        this.best = this.population[index].getPhrase();
        if(worldRecord == this.perfectScore) {
            this.finished = true;
        }
    }
///////////////////////////
    allPhrases() {
        let everything = "";

        let displayLimit = min(this.population.length, 50);


        for (let i = 0; i < displayLimit; i++) {
        everything += this.population[i].getPhrase() + "<br>";
        }
        return everything;
    }

    getAverageFitness() {
        let total = 0;
        for (let i = 0; i < this.population.length; i++) {
          total += this.population[i].fitness;
        }
        return total / (this.population.length);
    }

    getGenerations() {
        return this.generations;
    }

    getBest() {
        return this.best;
    }
}
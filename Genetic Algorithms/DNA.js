function newChar() {
    let letter = floor(random(63, 122));
    if (letter == 64) letter = 32;
    if (letter == 63) letter = 46;

    return String.fromCharCode(letter);
}

class DNA {
    constructor(len) {
        this.genes = [];
        this.fitness = 0;

        for (let i = 0; i < len; i++) {
            this.genes[i] = newChar();
        }
    }

    calcFitness(target) {
        let score = 0;

        for (let i = 0; i < target.length; i++) {
            if (this.genes[i] == target.charAt(i)) {
                score++;
            }
        }

        this.fitness = score / target.length;
    }

    crossover(other) {
        let child = new DNA(this.genes.length);
        let middlePoint = floor(random(this.genes.length));
        for(let i = 0; i < this.genes.length; i++) {
            if(i < middlePoint) {
                child.genes[i] = this.genes[i];
            }
            else {
                child.genes[i] = other.genes[i];
            }
        }

        return child;
    }

    mutate(rate) {
        for(let i = 0; i < this.genes.length; i++) {
            if (random(1) < rate) {
                this.genes[i] = newChar();
            }
        }
    }

    getPhrase() {
        return this.genes.join("");
    }
}
export class FightStats {

    constructor() {
        this.score = 0;
    }

    logScore() {
        this.score += 100;
    }

    getScore() {
        return this.score;
    }
}
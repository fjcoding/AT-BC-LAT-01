export class FightStats {

    constructor() {
        if (FightStats.instance) {
            return FightStats.instance;
        }
        this.score = 0;
        FightStats.instance = this;
        return this;
    }

    logScore() {
        this.score += 100;
    }

    getScore() {
        return this.score;
    }
}
export class Fight {
    constructor(leftFighter, rightFighter) {
        this.leftFighter = leftFighter;
        this.rightFighter = rightFighter;
    }

    makeLeftFighterAttack(fightStats) {
        if (fightStats) {
            fightStats.logScore();
        }
        const attack = this.leftFighter.attack();
        this.rightFighter.receiveAttack(attack);
    }

    makeRightFighterAttack() {
        const attack = this.rightFighter.attack();
        this.leftFighter.receiveAttack(attack);
    }
}
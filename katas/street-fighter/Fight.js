import { FightStats } from './FightStats';

export class Fight {
    constructor(leftFighter, rightFighter) {
        this.leftFighter = leftFighter;
        this.rightFighter = rightFighter;
    }

    makeLeftFighterAttack() {
        new FightStats().logScore(); // FightStats.instance.logScore()
        const attack = this.leftFighter.attack();
        this.rightFighter.receiveAttack(attack);
    }

    makeRightFighterAttack() {
        new FightStats().logScore();
        const attack = this.rightFighter.attack();
        this.leftFighter.receiveAttack(attack);
    }
}
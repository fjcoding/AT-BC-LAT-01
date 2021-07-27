import { Guile } from './Guile';
import { Ryu } from './Ryu';

export class Fight {
    constructor() {
        this.leftFighter = new Ryu();
        this.rightFighter = new Guile();
    }

    makeLeftFighterAttack() {
        const attack = this.leftFighter.doHadouken();
        this.rightFighter.receiveAttack(attack);
    }

    makeRightFighterAttack() {
        const attack = this.rightFighter.doSonicBoom();
        this.leftFighter.receiveAttack(attack);
    }
}
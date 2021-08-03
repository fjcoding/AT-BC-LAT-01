import { Fighter } from './Fighter';

export class Guile extends Fighter {

    constructor() {
        super();
        this.sonicBoomPowerAttack = 7;
    }

    attack() {
        return this.hadoukenPowerAttack;
    }

    receiveAttack(attack) {
        this.health -= attack;
    }

    isDefeated() {
        return this.health <= 0;
    }
}
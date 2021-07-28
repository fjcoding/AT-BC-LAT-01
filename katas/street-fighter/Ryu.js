import { Fighter } from './Fighter';

export class Ryu extends Fighter {

    constructor() {
        super();
        this.hadoukenPowerAttack = 10;
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
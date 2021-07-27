export class Guile {

    constructor() {
        this.sonicBoomPowerAttack = 7;
        this.health = 30;
    }

    doSonicBoom() {
        return this.hadoukenPowerAttack;
    }

    receiveAttack(attack) {
        this.health -= attack;
    }

    isDefeated() {
        return this.health <= 0;
    }
}
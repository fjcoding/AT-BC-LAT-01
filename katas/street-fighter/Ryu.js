export class Ryu {

    constructor() {
        this.hadoukenPowerAttack = 10;
        this.health = 30;
    }

    doHadouken () {
        return this.hadoukenPowerAttack;
    }

    receiveAttack(attack) {
        this.health -= attack;
    }

    isDefeated() {
        return this.health <= 0;
    }
}
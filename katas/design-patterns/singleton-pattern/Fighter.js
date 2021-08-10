export class Fighter {

    constructor() {
        this.health = 30;
    }

    attack() {}

    receiveAttack(attack) {
        this.health -= attack;
    }

    isDefeated() {}
}
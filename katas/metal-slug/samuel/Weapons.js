export class Weapons {
    constructor(attackPower = 0) {
        this.attackPower = attackPower;
    }
    getAttackPower() {
        return this.attackPower;
    }
}
export class Weapon {
    constructor(attackPower) {
        this.attackPower = attackPower;
    }

    getAttackPower() {
        return this.attackPower;
    }
}

export class WeaponHitsOne extends Weapon {
    constructor(attackPower) {
        super(attackPower);
    }

    attack(enemy) {
        enemy.receiveDamage(this.attackPower);
    }
}

export class WeaponHitsMultiple extends Weapon {
    constructor(attackPower) {
        super(attackPower);
    }

    attack(enemies) {
        const damage = this.attackPower;
        enemies.forEach((enemy) => {
            enemy.receiveDamage(damage);
        });
    }
}

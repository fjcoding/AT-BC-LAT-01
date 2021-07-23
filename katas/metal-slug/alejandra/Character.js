import { hasMultipleLifes, hasVehicle, hasWeapon } from './characteristics';

class Character {
    constructor(health, attackPower) {
        this.health = health;
        this.attackPower = attackPower;
        this.lives = true;
    }

    kill() {
        this.lives = false;
    }

    getHealth() {
        return this.health;
    }

    getAttackPower() {
        return this.attackPower;
    }

    receiveDamage(damage) {
        const newHealth = this.health - damage;
        if (newHealth > 0) {
            this.health = newHealth;
        } else {
            this.health = 0;
            this.kill();
        }
    }

    isAlive() {
        return this.lives;
    }
}

export class Soldier extends Character {
    constructor() {
        super(1, 1);
        this.setLifes(3);
    }
}

export class Mercenary extends Character {
    constructor() {
        super(3, 2);
    }
}

/* Asiggn to the soldier prototype its characteristics */
Object.assign(Soldier.prototype, hasMultipleLifes);
Object.assign(Soldier.prototype, hasWeapon);
Object.assign(Soldier.prototype, hasVehicle);

Object.assign(Mercenary.prototype, hasWeapon);

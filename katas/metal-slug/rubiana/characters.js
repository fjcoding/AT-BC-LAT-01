class Character {
    constructor(_lives, _health, _attackPower) {
        this.lives = parseInt(_lives);
        this.health = parseInt(_health);
        this.attackPower = parseInt(_attackPower);
        this.weapon = this.useWeapon;
        this.vehicle = this.useVehicle;
    }

    isAlive() {
        if (this.health <= 0) {
            this.lives -= 1;
            return false;
        } else {
            return true;
        }
    }

    getDamage(damage) {
        let currentHealth = this.health - damage;
        this.health = currentHealth;
        if (!this.isAlive()) {
            this.health = 0;
        }
    }

    useVehicle(vehicle, vehicleHealth) {
        this.vehicle = vehicle;
        this.health += vehicleHealth;
    }

    useWeapon(weapon, weaponAttackPower) {
        this.weapon = weapon;
        this.attackPower += weaponAttackPower;
    }
}

export class Soldier extends Character {
    constructor() {
        super(3, 1, 1);
    }
}

export class Enemy extends Character {
    constructor(_lives, _health, _attackPower, _hasSpecialAbilities) {
        super(_lives, _health, _attackPower);
        this.hasSpecialAbilities = _hasSpecialAbilities;
        this.specialAbility = this.getSpecialAbility;
    }

    getSpecialAbility() {
        if (this.hasSpecialAbilities == true) {
            this.specialAbility = ['Invulnerable', 'Throw Granades'];
            this.health = 1;
            this.useWeapon('Granade', 10);
        } else {
            this.specialAbility = 'none';
        }
    }
}
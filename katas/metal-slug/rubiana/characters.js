class Character {
    constructor(_lives, _health, _attackPower) {
        this.lives = parseInt(_lives);
        this.health = parseInt(_health);
        this.attackPower = parseInt(_attackPower);
        this.weapon = this.useWeapon();
        this.vehicle = this.useVehicle();
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
        if (this.isAlive()) {
            this.health = currentHealth;
        } else {
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
        this.abilities = [this.useWeapon(), this.useKnife(), this.throwGranades()];
    }

    useKnife(knife, knifePowerAttack) {
        this.useWeapon(knife, knifePowerAttack);
    }

    throwGranades(granade, granadePowerAttack) {
        this.useWeapon(granade, granadePowerAttack);
    }
}

export class Enemy extends Character {
    constructor(_lives, _health, _attackPower, _hasSpecialAbilities) {
        super(_lives, _health, _attackPower);
        this.hasSpecialAbilities = _hasSpecialAbilities;
        this.abilities = [this.useWeapon()];
    }

    haveSpecialAbilities(_hasSpecialAbilities) {
        if (_hasSpecialAbilities == true) {
            this.abilities = [this.useWeapon(), this.throwGranades(), this.beeingTemporaryInvulnerable()];
        }
    }

    throwGranades(granade, granadePowerAttack) {
        this.useWeapon(granade, granadePowerAttack);
    }

    beeingTemporaryInvulnerable() {
        this.getDamage(0);
    }
}
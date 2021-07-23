const hasMultipleLifes = {
    setLifes(lifes) {
        this.lifes = lifes;
    },
    receiveDamage(damage) {
        const newHealth = this.health - damage;
        newHealth >= 0 ? (this.health = newHealth) : (this.health = 0);

        if (this.health === 0) {
            this.lifes -= 1;
            this.health = 1;
        }

        if (this.lifes === 0) {
            this.kill();
        }
    },
};

const hasWeapon = {
    setWeapon(weapon) {
        this.weapon = weapon;
        this.attackPower += weapon.getAttackPower();
    },
    shot(target) {
        this.weapon.attack(target);
    },
};

const hasVehicle = {
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    },
    receiveDamage(damage) {
        if (this.vehicle !== null) {
            this.vehicle.receiveDamage(damage);
            const vehiclesHealth = this.vehicle.getHealth();

            if (vehiclesHealth <= 0) {
                this.vehicle = null;
                this.health += vehiclesHealth;
            }
        } else {
            this.health = this.health - damage;
        }
    },
    getVehicle() {
        return this.vehicle;
    },
};

export { hasMultipleLifes, hasVehicle, hasWeapon };

export class Soldier {
    constructor() {
        this.health = 1;
        this.atackDamage = 1;
        this.lifes = 3;
    }
    newWeapon(weaponDamage) {
        this.atackDamage = 1 + weaponDamage;
        return this.atackDamage;
    }
    newVehicle(vehicleHealth) {
        this.health = 1 + vehicleHealth;
        return this.health;
    }
}
export class Vehicle {
    constructor(type, health) {
        this.name = type;
        this.health = health;
    }

    getHealth() {
        return this.health;
    }

    getName() {
        return this.name;
    }

    receiveDamage(damage) {
        const newHealth = this.health - damage;
        this.health = newHealth;
    }
}

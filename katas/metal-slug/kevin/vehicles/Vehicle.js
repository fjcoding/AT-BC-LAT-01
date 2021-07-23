export class Vehicle {
    constructor(lifePoints) {
        this.lifePoints = lifePoints;
    }
    getvehicleLifePoints() {
        return this.lifePoints;
    }

    setvehicleLifePoints(lifepoints) {
        this.lifePoints = lifepoints;
    }

    recieveDamage(damage) {
        const newHealth = this.health - damage;
        newHealth >= 0 ? (this.health = newHealth) : (this.health = 0);
    }

}
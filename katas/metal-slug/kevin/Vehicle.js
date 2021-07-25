export class Vehicle {
    constructor(lifePoints) {
        this.lifePoints = lifePoints;
    }
    recieveDamage(damage) {
        const newHealth = this.health - damage;
        this.health = newHealth;
    }
}
export class Camel extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
    }
}
export class Plane extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
    }
}
export class Submarine extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
    }
}
export class Tank extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
    }
}
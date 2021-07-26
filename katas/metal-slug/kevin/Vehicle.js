export class Vehicle {
    constructor(lifePoints) {
        this.lifePoints = lifePoints;
    }
    recieveDamage(damage) {
        const newHealth = this.health - damage;
        this.health = newHealth;
    }
}
export class Tank extends Vehicle {
    constructor() {
        super(3);
    }
}
export class Plane extends Vehicle {
    constructor() {
        super(4);
    }
}
export class Camel extends Vehicle {
    constructor() {
        super(1);
    }
}
export class Submarine extends Vehicle {
    constructor() {
        super(3);
    }
}
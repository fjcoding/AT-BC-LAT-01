class Vehicle {
    constructor() {}

    setHealth(health) {
        this.health = health;
    }

    getHealth() {
        return this.health;
    }

    reciveDamage(damage) {
        const newHealth = this.health - damage;
        newHealth >= 0 ? (this.health = newHealth) : (this.health = 0);
    }
}

class Tank extends Vehicle {
    constructor() {
        super();
        this.setHealth(3);
    }
}

class Plain extends Vehicle {
    constructor() {
        super();
        this.setHealth(4);
    }
}

class Camel extends Vehicle {
    constructor() {
        super();
        this.setHealth(1);
    }
}
class Submarine extends Vehicle {
    constructor() {
        super();
        this.setHealth(3);
    }
}

export { Tank, Camel, Plain, Submarine };

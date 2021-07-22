export class Enemy {
    constructor(health = 1, atackDamage) {
        this.health = health;
        this.atackDamage = atackDamage;
    }
}

export class Alien extends Enemy {
    constructor() {
        super(1, 3);
    }
}

export class Mercenarie extends Enemy {
    constructor() {
        super(3, 5);
    }
}

export class Boss extends Enemy {
    constructor() {
        super(10, 5);
    }
}
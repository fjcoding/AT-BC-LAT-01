export class Enemy {
    constructor(health = 1, atackDamage) {
        this.health = health;
        this.atackDamage = atackDamage;
    }
}

export class Alien extends Enemy {
    constructor() {
        super(1, 3);
        this.invulnerable = 'no damage for 4 seconds';
    }
}

export class Mercenary extends Enemy {
    constructor() {
        super(3, 5);
        this.enrage = 'he has double damage for 2 seconds';
    }
}

export class Boss extends Enemy {
    constructor() {
        super(10, 5);
        this.habilities = 'he can gain one random habilitie of the other type of enemy';
    }
}
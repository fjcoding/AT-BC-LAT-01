 class Character {
    constructor(health, attackPower) {
        this.health = health;
        this.attackPower = attackPower;
    }

}

 class Soldier extends Character {
    constructor() {
        super(1, 1);
    }
}


 class Mercenary extends Character {
    constructor() {
        super(3, 2);
    }
}
 class Alien extends Character {
    constructor() {
        super(2, 4);
    }
}

 class Boss extends Character {
    constructor() {
        super(10, 6);
    }
}

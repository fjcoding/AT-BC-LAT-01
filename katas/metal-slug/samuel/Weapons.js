export class Weapon {
    constructor(attackPower = 1) {
        this.attackPower = attackPower;
    }

    getAttackPower() {
        return this.attackPower;
    }
}

export class RocketLauncher extends Weapon {
    constructor() {
        super(4);
        this.range = 1;
    }
}

export class Grenade extends Weapon {
    constructor() {
        super(10);
        this.range = 5;
    }
}

export class Shotgun extends Weapon {
    constructor() {
        super(5);
        this.range = 3;
    }
}

export class HeavyMachine extends Weapon {
    constructor() {
        super(2);
        this.range = 1;
    }
}

export class FlameShot extends Weapon {
    constructor() {
        super(5);
        this.range = 5;
    }
}
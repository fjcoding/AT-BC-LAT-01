export class Weapon {
    constructor(attackPower) {
        this.attackPower = attackPower;
    }
}
export class Shotgun extends Weapon {
    constructor() {
        super(5);
    }
}
export class HeavyMachineGun extends Weapon {
    constructor() {
        super(2);
    }
}
export class RocketLauncher extends Weapon {
    constructor() {
        super(4);
    }
}
export class FlameShot extends Weapon {
    constructor() {
        super(5);
    }
}
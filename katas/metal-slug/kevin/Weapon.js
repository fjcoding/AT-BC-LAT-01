export class Weapon {
    constructor(attackPower) {
        this.attackPower = attackPower;
    }
}
export class Shotgun extends Weapon {
    constructor(attackPower) {
        super(attackPower);
        this.setweaponAttackPower(5);
    }
}
export class HeavyMachineGun extends Weapon {
    constructor(attackPower) {
        super(attackPower);
        this.setweaponAttackPower(2);
    }
}
export class RocketLauncher extends Weapon {
    constructor(attackPower) {
        super(attackPower);
        this.setweaponAttackPower(4);
    }
}
export class FlameShot extends Weapon {
    constructor(attackPower) {
        super(attackPower);
        this.setweaponAttackPower(5);
    }
}
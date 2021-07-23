import { Weapon } from './Weapon.js';
export class FlameShot extends Weapon {
    constructor(attackPower) {
        super(attackPower);
        this.setweaponAttackPower(5);
    }
}
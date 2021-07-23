import { Weapon } from './Weapon.js';
export class Shotgun extends Weapon {
    constructor(attackPower) {
        super(attackPower);
        this.setweaponAttackPower(5);
    }
}
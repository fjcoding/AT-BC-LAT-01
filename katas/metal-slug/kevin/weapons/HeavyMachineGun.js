import { Weapon } from './Weapon.js';
export class HeavyMachineGun extends Weapon {
    constructor(attackPower) {
        super(attackPower);
        this.setweaponAttackPower(2);
    }
}
import { Civilian } from './Civilian.js';
import { Enemy } from './Enemy.js';

export class Soldier {
    constructor() {
        this.resistance = 1;
        this.attackPower = 0;
        this.lifes = 3;
    }

    changeWeapon(weaponAttackPower) {
        this.attackPower = 1;
        this.attackPower = this.attackPower + weaponAttackPower;
        return this.attackPower;
    }

    useKnife(civilianOrEnemy) {
        if (civilianOrEnemy instanceof Civilian) {
            return 'Rescued';
        } else if (civilianOrEnemy instanceof Enemy) {
            return 'Attack';
        } else {
            return 'Can\'t use' ;
        }
    }
}

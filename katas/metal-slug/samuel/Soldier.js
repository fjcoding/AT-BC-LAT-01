import { Civilian } from './Civilian.js';
import { Enemy } from './Enemy.js';

export class Soldier {
    constructor() {
        this.resistance = 1;
        this.attackPower = 1;
        this.lifes = 3;
    }

    changeWeapon(weaponInstance, soldierInstance) {
        let weaponEntries = Object.entries(weaponInstance);
        let soldierEntries = Object.entries(soldierInstance);
        for (let index = 0; index < weaponEntries.length; index++) {
            let weaponAttribute = weaponEntries[index];
            let weaponAttributeName = weaponAttribute[0];
            let weaponAttributeValue = weaponAttribute[1];
            for (let soldierIndex = 0; soldierIndex < soldierEntries.length; soldierIndex++) {
                let soldierAttributes = soldierEntries[soldierIndex];
                let soldierAttributeName =  soldierAttributes[0];
                if (soldierAttributeName == weaponAttributeName) {
                    soldierInstance[weaponAttributeName] += weaponAttributeValue;
                }
            }
        }
        return soldierInstance;
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

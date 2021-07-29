import { Character } from './character.js';
import { weaponsList } from './weaponList.js';
export class Enemy extends Character {
    constructor(healthPoints, enemyType = 'footSoldier',
        gunType, abilityType,
        vehicleType, attackPoints, haveWeapon, onVehicle){
        super(healthPoints, attackPoints, haveWeapon, onVehicle, gunType, vehicleType);
        this._enemyType = String(enemyType);
        this._abilityType = String(abilityType);
    }
}

export const enemySoldier = new Enemy(1, 'foot soldier', false, 'throwGranade', 'none', weaponsList._weaponType.handGun._attackPower, true, weaponsList._weaponType.handGun._name);

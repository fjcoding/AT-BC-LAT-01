import { Character } from './character.js';
import { weaponsList } from './weaponList.js';
export class Enemy extends Character {
    constructor(healthPoints = 1, enemyType = 'footSoldier',
        gunType = weaponsList.weapons()._weaponType.handGun, abilityType = 'throwGranade',
        vehicleType = 'none', attackPoints = weaponsList.weapons()._weaponType.handGun._attackPower, haveWeapon = true, onVehicle = false){
        super(healthPoints, attackPoints, haveWeapon, onVehicle, gunType, vehicleType);
        this._enemyType = String(enemyType);
        this._abilityType = String(abilityType);
    }
}
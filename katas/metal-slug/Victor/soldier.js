import { Character } from './character.js';
import { WeaponList, weaponsList } from './weaponList.js';

export class Soldier extends Character {
    constructor(healthPoints = 1, lifePoints = 3,
        gunType = new WeaponList()._weaponType.handGun, hasGranade = 'false',
        vehicleType = 'none', attackPoints = 0, haveWeapon = true, onVehicle = false){
        super(healthPoints, attackPoints, haveWeapon, onVehicle, gunType, vehicleType);
        this._lifePoints = Number(lifePoints);
        this._hasGranade = Boolean(hasGranade);
    }
}


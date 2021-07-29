import { Character } from './character.js';
import { weaponsList } from './weaponList.js';
export class Soldier extends Character {
    constructor(healthPoints, lifePoints,
        gunType, vehicleType, attackPoints, haveWeapon, onVehicle){
        super(healthPoints, attackPoints, haveWeapon, onVehicle, gunType, vehicleType);
        this._lifePoints = Number(lifePoints);
    }

    useALife(healthPoints){
        if (healthPoints == 0) this._lifePoints - 1;
        return this._lifePoints;
    }
}

export const marco = new Soldier(3, 3, false, 'none', weaponsList._weaponType.handGun._attackPower, true, weaponsList._weaponType.handGun._name);

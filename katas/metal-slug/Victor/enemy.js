import { Character } from './character.js';

export class Enemy extends Character {
    constructor(healthPoints = 1, enemyType = 'footSoldier', gunType = 'none', meleeWeapon = 'false', abilityType = 'throwGranade', vehicleType = 'none', attackPoints = 0, haveGun = false, onVehicle = false){
        super(healthPoints, attackPoints, haveGun, onVehicle);
        this._enemyType = String(enemyType);
        this._gunType = String(gunType);
        this._vehicleType = String(vehicleType);
        this._meleeWeapon = Boolean(meleeWeapon);
        this._abilityType = String(abilityType);
    }
}
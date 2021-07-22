import { Character } from './character.js';

export class Soldier extends Character {
    constructor(healthPoints = 1 ,lifePoints = 3, gunType = 'none', vehicleType = 'none', attackPoints = 0, haveGun = false, onVehicle = false){
        super(healthPoints, attackPoints, haveGun, onVehicle);
        this._lifePoints = Number(lifePoints);
        this._gunType = String(gunType);
        this._vehicleType = String(vehicleType);
    }
    
}
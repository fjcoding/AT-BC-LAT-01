export class Character {
    constructor(healthPoints, attackPoints, haveWeapon, gunType, onVehicle, vehicleType){
        this._healthPoints = Number(healthPoints);
        this._attackPoints = Number(attackPoints);
        this._haveWeapon = Boolean(haveWeapon);
        this._gunType = String(gunType);
        this._onVehicle = Boolean(onVehicle);
        this._vehicleType = String(vehicleType);
    }
}
export class Character {
    constructor(healthPoints, attackPoints, haveGun, onVehicle){
        this._healthPoints = Number(healthPoints);
        this._attackPoints = Number(attackPoints);
        this._haveGun = Boolean(haveGun);
        this._onVehicle = Boolean(onVehicle);
    }

}
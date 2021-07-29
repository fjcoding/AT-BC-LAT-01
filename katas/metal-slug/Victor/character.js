export class Character {
    constructor(healthPoints, attackPoints, haveWeapon, gunType, onVehicle, vehicleType){
        this._healthPoints = Number(healthPoints);
        this._attackPoints = Number(attackPoints);
        this._haveWeapon = Boolean(haveWeapon);
        this._gunType = String(gunType);
        this._onVehicle = Boolean(onVehicle);
        this._vehicleType = String(vehicleType);
    }

    useWeapon(attackPoints){
        return this._healthPoints - attackPoints;
    }

    mountOnVehicle(vehicleType){
        if(vehicleType != undefined){
            this._vehicleType = true;
            this._healthPoints += this._defensePoints;
        }
        return this._onVehicle, this._healthPoints;
    }

    isAlive(lifePoints){
        return (lifePoints > 0) ? 'Alive' : 'Death';
    }
}
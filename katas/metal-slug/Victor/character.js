export class Character {
    constructor(lifePoints, attackPoints, haveGun, onVehicle){
        this._lifePoints = Number(lifePoints);
        this._attackPoints = Number(attackPoints);
        this._haveGun = Boolean(haveGun);
        this._onVehicle = Boolean(onVehicle);
    }
}
let char1 = new Character(1, 1, false, false);

console.log(char1._lifePoint);
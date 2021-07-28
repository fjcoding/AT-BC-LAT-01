export class Weapon {
    constructor(name, attackPower, maxRange, sprdDamage){
        this._name = String(name);
        this._attackPower = Number(attackPower);
        this._maxRange = Number(maxRange);
        this._sprdDamage = Boolean(sprdDamage);
    }
}
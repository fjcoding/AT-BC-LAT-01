export class Actors {
    constructor(name, type, weapon, health){
        this.name = name;
        this.type = type;
        this.weapon = weapon;
        this.health = health;
    }

    //*getter and setters methods

    getActorName() {
        return this._actorName;
    }

    setActorName(actorName){
        this._actorName = actorName;
    }

    getHealthPoints() {
        return this._healthPoints;
    }

    setHealthPoints(healthPoints){
        this._healthPoints = healthPoints;
    }

    getActorType() {
        return this._actorType;
    }

    setActorType(actorType){
        this._actorType = actorType;
    }

    getWeaponType() {
        return this._weaponType;
    }

    setWeaponType(weaponType){
        this._weaponType = weaponType;
    }

    //*actors methods
    //TODO add more methods (discuss with teams)

    isAlive(healthPoints){
        return (healthPoints > 0) ? 'Alive' : 'Death';
    }

}
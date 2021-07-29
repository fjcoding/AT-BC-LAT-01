export class Actors {
    constructor(actorName, healthPoints, actorType, weaponType){
        this._actorName = actorName;
        this._healthPoints = healthPoints;
        this._actorType = actorType;
        this._weaponType = weaponType;
    }

    //*getter and setters methods

    getActorName() {
        return this._healthPoints;
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

export class Actor {
    constructor(actorName, healthPoints, actorType, weaponType) {
        this.actorName = actorName;
        this.healthPoints = healthPoints;
        this.actorType = actorType;
        this.weaponType = weaponType;
    }

    getactorName() {
        return this.healthPoints;
    }

    setactorName(actorName) {
        this.actorName = actorName;
    }

    getHealthPoints() {
        return this.healthPoints;
    }

    setHealthPoints(healthPoints) {
        this.healthPoints = healthPoints;
    }

    getActorType() {
        return this.actorType;
    }

    setActorType(actorType) {
        this.actorType = actorType;
    }

    getWeaponType() {
        return this.weaponType;
    }

    setWeaponType(weaponType) {
        this.weaponType = weaponType;
    }

    isAlive(healthPoints) {
        return (healthPoints > 0) ? 'Alive' : 'Death';
    }
}
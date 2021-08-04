import { weapons } from './Weapon.js';
export class Actor {
    constructor(name, type, weapon, health, position) {
        this.name = name;
        this.type = type;
        this.weapon = weapon;
        this.health = health;
        this.position = position;
    }

    getActorName() {
        return this.name;
    }

    setActorName(actorName) {
        this.name = actorName;
    }

    getHealth() {
        return this.health;
    }

    setHealth(healthPoints) {
        this.health = healthPoints;
    }

    getType() {
        return this.type;
    }

    setType(actorType) {
        this.type = actorType;
    }

    getWeapon() {
        return this.weapon;
    }

    setWeapon(weaponType) {
        this.weapon = weaponType;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }

}

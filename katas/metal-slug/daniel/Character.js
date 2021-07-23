import { SingleEnemyWeapon } from './Weapon.js';

export class Character {
    constructor( pointsOfHealth = 1, genre = 'male' ) {
        this.pointsOfHealth = pointsOfHealth;
        this.genre = genre;
    }

    receiveAttack() {}
}

export class Soldier extends Character {
    constructor( weapon = new SingleEnemyWeapon(), vehicle = undefined ) {
        super();
        this.weapon = weapon;
        this.vehicle = vehicle;        
    }

    changeWeapon ( weapon ) {
        this.weapon = weapon;
        return this.weapon;
    }

    equipVehicle ( vehicle ) {
        this.vehicle = vehicle;
        return this.vehicle;
    }
}
import { MultipleEnemiesWeapon, SingleEnemyWeapon } from './Weapon.js';

export class Character {
    constructor( pointsOfHealth = 1, genre = 'male' ) {
        this.pointsOfHealth = pointsOfHealth;
        this.genre = genre;
    }

    receiveAttack() {}
}

export class Soldier extends Character {
    constructor( weapon = new SingleEnemyWeapon('handgun', 1), vehicle = undefined, numOfLifes = 3 ) {
        super();
        this.weapon = weapon;
        this.vehicle = vehicle;
        this.numOfLifes = numOfLifes;
        this.knife = new SingleEnemyWeapon('knife', 1);
        this.granade = new MultipleEnemiesWeapon('granade', 10);
    }

    changeWeapon ( weapon ) {
        this.weapon = weapon;
        return this.weapon;
    }

    equipVehicle ( vehicle ) {
        this.vehicle = vehicle;
        return this.vehicle;
    }

    receiveAttack( attackPower ) {
        if ( this.numOfLifes >= 1  ) {
            if ( this.vehicle == undefined ) {
                this.numOfLifes--;
                return this.numOfLifes;                
            } else {
                this.vehicle.pointsOfHealth = this.vehicle.receiveAttack( attackPower );
                if ( this.vehicle.pointsOfHealth == 0 ) this.vehicle = undefined;
                return this.numOfLifes;
            }
        }

        throw new Error('Soldier doesnt have lifes to keep playing');
    }

    useKnife( enemies ) {
        return this.knife.useWeapon( enemies );
    }

    throwGranade( enemies ) {
        return this.granade.useWeapon( enemies );
    }

    shootWeapon(enemies ) {
        return this.weapon.useWeapon( enemies );
    }
}
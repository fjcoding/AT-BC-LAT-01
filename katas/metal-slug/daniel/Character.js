import { MultipleEnemiesWeapon, SingleEnemyWeapon } from './Weapon.js';
import { NoDefenceEquipment } from './Equipment.js';
import { ReceiveAttack } from './Ability.js';

export class Character {
    constructor(
        pointsOfHealth = 1,
        initialHealth = 1,
        numOfLifes = 1,
        genre = 'male',
        equipment = {defence: new NoDefenceEquipment},
        abilities = {receiveAttack: new ReceiveAttack}
    ) {

        this.pointsOfHealth = pointsOfHealth;
        this.initialHealth = initialHealth;
        this.numOfLifes = numOfLifes;
        this.genre = genre;
        this.equipment = equipment;
        this.abilities = abilities;
    }

    equip (equipment) {
        equipment.equipCharacter(this);
    }

    useAbility(ability, parameter) {
        this.abilities[ability].do(this, parameter);
    }
}

export class Soldier extends Character {
    constructor(weapon = new SingleEnemyWeapon('handgun', 1), vehicle = undefined, numOfLifes = 3) {
        super();
        this.weapon = weapon;
        this.vehicle = vehicle;
        this.numOfLifes = numOfLifes;
        this.knife = new SingleEnemyWeapon('knife', 1);
        this.granade = new MultipleEnemiesWeapon('granade', 10);
    }

    changeWeapon (weapon) {
        this.weapon = weapon;
        return this.weapon;
    }

    equipVehicle (vehicle) {
        this.vehicle = vehicle;
        return this.vehicle;
    }

    receiveAttack(attackPower) {
        if (this.numOfLifes >= 1) {
            if (this.vehicle == undefined) {
                this.numOfLifes--;
                return this.numOfLifes;
            } else {
                this.vehicle.pointsOfHealth = this.vehicle.receiveAttack(attackPower);
                if (this.vehicle.pointsOfHealth == 0) this.vehicle = undefined;
                return this.numOfLifes;
            }
        }

        throw new Error('Soldier doesnt have lifes to keep playing');
    }

    useKnife(enemies) {
        return this.knife.useWeapon(enemies);
    }

    throwGranade(enemies) {
        return this.granade.useWeapon(enemies);
    }

    shootWeapon(enemies) {
        return this.weapon.useWeapon(enemies);
    }
}
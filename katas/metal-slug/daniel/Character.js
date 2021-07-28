import { NoDefenceEquipment } from './Equipment.js';
import { ReceiveAttackAbility, EquipAbility, AttackAbility } from './Ability.js';

export class Character {
    constructor(
        pointsOfHealth = 1,
        numOfLifes = 1,
        genre = 'male',
        equipment = {defence: new NoDefenceEquipment},
        abilities = {receiveAttack: new ReceiveAttackAbility, equip: new EquipAbility, attack: new AttackAbility}
    ) {

        this.pointsOfHealth = pointsOfHealth;
        this.initialHealth = pointsOfHealth;
        this.numOfLifes = numOfLifes;
        this.genre = genre;
        this.equipment = equipment;
        this.abilities = abilities;
    }

    useAbility(ability, parameter) {
        this.abilities[ability].do(this, parameter);
    }
}

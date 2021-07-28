class Ability {

    do () {
    }
}

export class EquipAbility extends Ability {

    do (character, equipment) {
        equipment.equipCharacter(character);
    }
}

export class ReceiveAttackAbility extends Ability {

    do (character, attackPower) {
        character.equipment.defence.receiveAttack(character, attackPower);
    }
}

export class AttackAbility extends Ability {

    do (character, enemies) {
        character.equipment.gun.attack(enemies);
    }
}
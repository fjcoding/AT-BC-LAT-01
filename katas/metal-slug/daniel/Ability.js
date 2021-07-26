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
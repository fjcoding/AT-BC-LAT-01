class Ability {

    do () {
    }
}

export class ReceiveAttack extends Ability {

    do (character, attackPower) {
        character.equipment.defence.receiveAttack(character, attackPower);
    }
}
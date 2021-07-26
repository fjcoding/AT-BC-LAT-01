class Ability {

    do () {
    }
}

export class ReceiveAttack {

    do (character, attackPower) {
        character.equipment.defence.receiveAttack(character, attackPower);
    }
}
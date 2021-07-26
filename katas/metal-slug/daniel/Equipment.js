class Equipment {
    constructor (name) {
        this.name = name;
    }

    equipCharacter() {

    }
}

export class DefenceEquipment extends Equipment {
    constructor (name, pointsOfHealth = 1) {
        super();
        this.name = name;
        this.pointsOfHealth = pointsOfHealth;
    }

    equipCharacter(character, equipment = this) {
        character.defenceEquipment = equipment;
    }

    receiveAttack(character, attackPower = 1) {
        if (this.pointsOfHealth > attackPower) {
            this.pointsOfHealth = this.pointsOfHealth - attackPower;
            return this;
        }

        this.equipCharacter(character, new NoDefenceEquipment);
        return NoDefenceEquipment;
    }
}

export class NoDefenceEquipment extends DefenceEquipment {
    constructor () {
        super();
        this.name = 'No equipment';
        this.pointsOfHealth = 0;
    }

    receiveAttack(character, attackPower = 1) {
        character.pointsOfHealth = character.pointsOfHealth - attackPower;
        if (character.pointsOfHealth <= 0) {
            character.numOfLifes--;

            if (character.numOfLifes < 0) {
                character.pointsOfHealth = 0;
                character.numOfLifes = 0;
            } else {
                character.pointsOfHealth = character.initialHealth;
            }
        }
        return this;
    }
}

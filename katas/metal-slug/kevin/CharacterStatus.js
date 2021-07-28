export class CharacterStatus {
    totalLifePoints = (character, vehicle) => {
        character.lifePoints = character.lifePoints + vehicle.lifePoints;
        return character.lifePoints;
    };

    totalAttackPower = (character, weapon) => {
        if (weapon.attackPower > 1) {
            character.attackPower = weapon.attackPower;
        }else{
            character.attackPower = 1;
        }
        return character.attackPower;
    };
}
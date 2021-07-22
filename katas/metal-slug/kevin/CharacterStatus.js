export class CharacterStatus {
    getLifePoints = (model, equipment) => {
        const modelLifepoints = model.lifePoints;
        const equipmentLifepoints = equipment.lifePoints;
        let totalLifePoints = modelLifepoints + equipmentLifepoints;
        return totalLifePoints;
    };

    getAttackPower = (model, equipment) => {
        const modelAttackPower = model.attackPower;
        const modelEquipment = equipment.attackPower;
        let totalAttackPower = 0;

        if (modelEquipment > 1) {
            totalAttackPower = modelEquipment;
        }
        else {
            totalAttackPower = modelAttackPower;
        }
        return totalAttackPower;
    };
    





}
export class CharacterStatus {
    getLifePoints = (model, equipment) => {
        const modelLifepoints = model;
        const equipmentLifepoints = equipment;
        let totalLifePoints = modelLifepoints + equipmentLifepoints;
        return totalLifePoints;
    };

    getAttackPower = (model, equipment) => {
        const modelAttackPower = model;
        const modelEquipment = equipment;
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
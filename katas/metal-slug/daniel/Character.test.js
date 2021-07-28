import { Character } from './Character.js';
import { DefenceEquipment } from './Equipment.js';

describe('Soldier Character is expected to equip', () => {
    const soldier = new Character(1, 1, 'male');

    test('defence equipment', () => {
        soldier.useAbility('equip', new DefenceEquipment('tank', 3));
        expect(soldier.equipment.defence).toEqual(new DefenceEquipment('tank', 3));
    });
});

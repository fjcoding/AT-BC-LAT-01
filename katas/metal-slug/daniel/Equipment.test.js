import { DefenceEquipment, NoDefenceEquipment } from './Equipment';
import { Character } from './Character.js';

describe('Verify that DefenceEquipment', () => {
    const character = new Character;
    const tank = new DefenceEquipment('tank', 3);

    test('is equiped by a character', () => {
        character.equip(tank);
        expect(character.equipment.defence).toEqual(tank);
    });

    test('receives attacks and reduces health of defencEquipment', () => {
        character.useAbility('receiveAttack', 1);
        expect(character.pointsOfHealth).toBe(1);
        expect(character.numOfLifes).toBe(1);
        expect(character.equipment.defence.name).toBe('tank');
        expect(character.equipment.defence.pointsOfHealth).toBe(2);
    });

    test('receives attacks and destroys the defenceEquipment', () => {
        character.useAbility('receiveAttack', 5);
        expect(character.pointsOfHealth).toBe(1);
        expect(character.numOfLifes).toBe(1);
        expect(character.equipment.defence).toEqual(new NoDefenceEquipment);
        expect(character.equipment.defence.name).toEqual('No equipment');
        expect(character.equipment.defence.pointsOfHealth).toBe(0);
    });
});

describe('Verify that NoDefenceEquipment', () => {
    const character = new Character(5, 1);
    test('receives attacks and reduce the pointsOfHealt and numOfLife of the character', () => {
        character.useAbility('receiveAttack', 1);
        expect(character.pointsOfHealth).toBe(4);
        expect(character.numOfLifes).toBe(1);
    });

    test('receives attacks and restore the initial pointsOfHealt if the attack is greater than the health', () => {
        character.useAbility('receiveAttack', 5);
        expect(character.pointsOfHealth).toBe(5);
        expect(character.numOfLifes).toBe(0);
    });

    test('receives attacks and the numOfLifes of character is never less than 0', () => {
        character.useAbility('receiveAttack', 5);
        expect(character.pointsOfHealth).toBe(0);
        expect(character.numOfLifes).toBe(0);
    });
});
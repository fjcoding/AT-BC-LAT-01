import { DefenceEquipment, HitMultipleEnemiesWeaponEquipment, HitSingleEnemyWeaponEquipment } from './Equipment.js';
import { Character } from './Character.js';

describe('Verify that EquipAbility', () => {
    const character = new Character;

    test('changes the defence of a character', () => {
        character.useAbility('equip', new DefenceEquipment('tank', 3));
        expect(character.equipment.defence).toEqual(new DefenceEquipment('tank', 3));
    });

    test('equip the character with a gun', () => {
        character.useAbility('equip', new HitSingleEnemyWeaponEquipment);
        expect(character.equipment.gun).toEqual(new HitSingleEnemyWeaponEquipment);
    });
});

describe('Verify that receiveAttackAbility', () => {
    const character = new Character(5);

    test('reduces health of the character', () => {
        character.useAbility('receiveAttack', 1);
        expect(character.pointsOfHealth).toBe(4);
    });

    test('reduces the numOfLifes of a character', () => {
        character.useAbility('receiveAttack', 5);
        expect(character.pointsOfHealth).toBe(5);
        expect(character.numOfLifes).toBe(0);
    });
});

describe('Verify that AttackAbility', () => {
    const character = new Character;
    const enemies = [
        new Character(5),
        new Character(5),
        new Character(5)
    ];

    test('reduces the pointOfHealth of enemies with HitSingleEnemyWeaponEquipment', () => {
        character.useAbility('equip', new HitSingleEnemyWeaponEquipment);
        character.useAbility('attack', enemies);
        expect([
            enemies[0].pointsOfHealth,
            enemies[1].pointsOfHealth,
            enemies[2].pointsOfHealth
        ]).toEqual([4, 5, 5]);
    });

    test('reduces the pointOfHealth of enemies with HitMultipleEnemiesWeaponEquipment', () => {
        character.useAbility('equip', new HitMultipleEnemiesWeaponEquipment);
        character.useAbility('attack', enemies);
        expect([
            enemies[0].pointsOfHealth,
            enemies[1].pointsOfHealth,
            enemies[2].pointsOfHealth
        ]).toEqual([0, 0, 0]);
    });
});
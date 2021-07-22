import { Weapons } from './Weapons';

describe('Tests for class Weapons', () => {
    test('The method getAttackPower() have to return the attackPower of the weapon', () => {
        const weaponInstance = new Weapons();
        expect(weaponInstance.getAttackPower()).toBe(0);
    });
});
import { Weapons } from './Weapons';

describe('When a weapon instance', () => {
    test('Got his attack Power, it should be shown', () => {
        const weaponInstance = new Weapons();
        expect(weaponInstance.getAttackPower()).toBe(0);
    });
});
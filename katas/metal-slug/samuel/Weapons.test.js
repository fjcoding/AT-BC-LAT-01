import { Weapon } from './Weapons';
import { Grenade } from './Weapons';

describe('When a weapon instance', () => {
    test('Got his attack Power, it should be shown', () => {
        const weaponInstance = new Weapon();
        expect(weaponInstance.getAttackPower()).toBe(1);
    });
});
describe('When a weapon subclass instance', () => {
    test('Try to get his attack Power, it should be shown', () => {
        const grenadeInstance = new Grenade();
        expect(grenadeInstance.getAttackPower()).toBe(10);
    });
});